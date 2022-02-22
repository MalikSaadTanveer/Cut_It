import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  Alert,
  Dimensions,
} from 'react-native';
import PlainLayout from '../components/PlainLayout';
import {
  Button,
  FlatButton,
  FlatCollapsible,
  FlatCollapsibleItem,
  HorizontalLine,
  IconButton,
  InputDateTime,
  InputFlat,
  Title,
} from '../components/ComponentItems';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';

import { Formik } from 'formik';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import { useStripe } from '@stripe/stripe-react-native';
import * as turf from '@turf/turf';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import notify from '../utils/notify';

const orderValidationSchema = yup.object().shape({
  street: yup.string().required('Street Address is Required.'),
  unit: yup.string().notRequired('Unit/Flat Address is Required.'),
  city: yup.string().required('City is Required.'),
  state: yup.string().required('Provice is Required.'),
  zip: yup.string().required('Postal code is Required.'),
  country: yup.string().required('Country is Required.'),
  orderDate: yup.string().required('You must select date and time.'),
});

const CreateAppointmentScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const firestore = useFirestore();
  const bagData = useSelector((state) => state.orderStore);
  const locationData = useSelector((state) => state.appStore);
  const dispatch = useDispatch();
  const { mainService } = props.route.params;

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  useFirestoreConnect([
    {
      collection: `services${mainService}`,
      storeAs: mainService,
    },
    { collection: 'users' },
    { collection: 'settings', doc: 'xyqAFk9BFdmmFYRqtiUQ' },
    {
      collection: 'availabilities',
      storeAs: 'allAvailabilitiesCheck',
    },
    {
      collection: 'promos',
      storeAs: 'allPromos',
    },
  ]);
  const service = useSelector(
    ({ firestore: { data } }) => data.services && data.services[mainService]
  );
  const promos = useSelector((state) => state.firestore.ordered.allPromos);
  const users = useSelector((state) => state.firestore.ordered.users);
  const settings = useSelector((state) => state.firestore.ordered.settings);

  const [currentWeek, setCurrentWeek] = useState(() => {
    let currentDate = moment();

    let weekStart = currentDate.clone().startOf('isoWeek');
    let weekEnd = currentDate.clone().endOf('isoWeek');

    let days = [];

    days.push({
      name: moment().startOf('month').format('MMM'),
      day: 0,
    });

    for (let i = 0; i <= 6; i++) {
      let thedate = moment(weekStart).add(i, 'days').toISOString();
      let day = moment(weekStart).add(i, 'days').format('DD');
      let dayName = moment(weekStart).add(i, 'days').format('ddd');
      days.push({
        thedate: thedate,
        day: day,
        name: dayName,
      });
    }
    return days;
  });

  const [finalBag, setFinalBag] = useState(false);

  const allAvailabilities = useSelector(
    (state) => state.firestore.ordered.allAvailabilitiesCheck
  );

  const [timeSugession, setTimeSugession] = useState([]);
  let modalizeRef = useRef(null);
  let modalizePaymentRef = useRef(null);
  let caForm = useRef(null);

  // stripe
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isFreelancersAvailable, setIsFreelancersAvailable] = useState(false);

  const [availableFreelancersFound, setAvailableFreelancersFound] = useState(
    []
  );

  useEffect(() => {
    const unsubscribe = firestore.setListener({ collection: 'availabilities' });
    return unsubscribe();
  }, [allAvailabilities]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (!bagData.cart.length > 0) {
        navigation.goBack();
      }
    });
  }, [navigation, bagData]);

  const minsConverter = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return (
      rhours +
      ' hour' +
      (rhours > 1 ? 's' : '') +
      ' ' +
      rminutes +
      ' min' +
      (rminutes > 1 ? 's' : '')
    );
  };

  const filteredExtraServices = () => {
    let bagItems = bagData.cart
      ? bagData.cart.filter(
          (item) =>
            item.type === 'main' && {
              name: item.name,
            }
        )
      : [];

    let allServices = service.subServices;

    if (bagItems[0] && bagItems[0].name === 'Manicure') {
      allServices = service.subServices.filter(
        (item) => item.name === 'Pedicure'
      );
    } else if (bagItems[0] && bagItems[0].name === 'Pedicure') {
      allServices = service.subServices.filter(
        (item) => item.name === 'Manicure'
      );
    } else if (bagItems[0] && bagItems[0].name === 'Manicure + Pedicure') {
      allServices = [];
    }

    let filteredItems = [];

    for (let i = 0, len = allServices.length; i < len; i++) {
      for (let j = 0, len2 = bagItems.length; j < len2; j++) {
        if (allServices[i].name !== bagItems[j].name && bagItems[j].name) {
          filteredItems.push(allServices[i]);
        }
      }
    }
    return filteredItems;
  };

  // stripe
  const fetchPaymentSheetParams = async (amount) => {
    const response = await fetch(
      //'https://spot-brainy-diadem.glitch.me/checkout', // development
      'https://us-central1-nailzy-app.cloudfunctions.net/charge', // live
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'cad',
        }),
      }
    );
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async (amount) => {
    setLoading(true);
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams(amount);

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Nailzi',
      currency: 'cad',
    });
  };

  const openPaymentSheet = async (order) => {
    //  sk_test_51DwF8hATwbbAJvxxMUXCkLlqNiLMQrxPzcN0P5RJfhRKLnW1amcRNCBLEJyboNsnlQ9vgkQt70SWbrHTdZYjhYhu00Z0lXfBZ4 // dev
    // pk_live_51IyVEMJLd92jeqR3Wd7M0OYYWmAd9zXeBg9N3BE9U0B648UtQUWlz5wGeWvt8akBmXCnMCYvtOlCQPWraYa8ts7K00UFTRPRCF // live
    let clientSecret =
      'pk_live_51IyVEMJLd92jeqR3Wd7M0OYYWmAd9zXeBg9N3BE9U0B648UtQUWlz5wGeWvt8akBmXCnMCYvtOlCQPWraYa8ts7K00UFTRPRCF';
    const { error, paymentOption } = await presentPaymentSheet({
      clientSecret,
    });
    console.log('log-error', error);
    console.log('log-paymentOption', paymentOption);

    if (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Sorry!',
        text2: error.message,
        autoHide: true,
        bottomOffset: 20,
      });
      setLoading(false);
    } else {
      ConfirmOrder(order, paymentOption);
    }
  };

  const ConfirmOrder = async (order, paymentOption) => {
    order.paid = true;
    order.orderId = randomString(10);

    

    order.adminBalance = (order.total / 100) * settings[0].commissionRate;
    order.freelancerBalance = order.total - order.adminBalance;

    const { id: newOrderID } = await firestore.collection('orders').add(order);

    notify(
      'Nailzi - You have got a new order',
      'Please login to accept the order',
      availableFreelancersFound
    )
      .then((resp) => {
        console.log(resp);
      })
      .catch((reason) => {
        console.log(reason);
      });

    setLoading(false);
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Awesome!',
      text2: 'Thank you for your payment.',
      autoHide: true,
      bottomOffset: 20,
    });
    dispatch({ type: 'REMOVEBAG' });
    navigation.navigate('Appointment');
  };
  // stripe end

  const randomString = (length = 20) => {
    let chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  const checkIfAvailable = (thedate, availableFreelancers) => {
    const currentMonth = moment(thedate, 'MM-DD-YYYY HH:mm a')
      .startOf('month')
      .format('MMMM');
    let countTrue = 0;

    let availableData = [];

    currentWeek.map((weekitem, weekindex) => {
      let forCheckingValue = availableFreelancers
        .filter(
          (item) => item[currentMonth] && item[currentMonth][weekitem.day]
        )
        .map((fitem) => {
          return fitem[currentMonth][weekitem.day];
        });

      if (forCheckingValue[0]) {
        const values = Object.values(forCheckingValue[0]);

        for (let i = 0; i < values.length; i++) {
          if (
            moment(values[i].end, 'YYYY-MM-DD HH:mm a').isSameOrAfter(
              moment().subtract(1, 'day')
            )
          ) {
            let checkpoint = moment(thedate, 'MM-DD-YYYY HH:mm a').isBetween(
              moment(values[i].start, 'YYYY-MM-DD HH:mm a').subtract(
                1,
                'minute'
              ),
              moment(values[i].end, 'YYYY-MM-DD HH:mm a').add(1, 'minute')
            );

            if (checkpoint) {
              countTrue = 1;
            } else {
              availableData.push({
                start: moment(values[i].start, 'YYYY-MM-DD HH:mm a'),
                end: moment(values[i].end, 'YYYY-MM-DD HH:mm a'),
              });
            }
          }
        }
      }
    });
    setTimeSugession(availableData);

    return countTrue;
  };

  const handleSubmit = async (values) => {
    if (
      moment(values.orderDate, 'MM-DD-YYYY HH:mm:ss a').isBefore(
        moment(new Date(), 'MM-DD-YYYY HH:mm:ss a').add(2, 'hours')
      )
    ) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Sorry!',
        text2:
          'The booking time should be at least two hours from current time.',
        autoHide: true,
        bottomOffset: 20,
      });
      return false;
    }
    setLoading(true);
    // if (isEmpty(profile)) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Sorry!',
        text2: 'You have to login first to create an order.',
        autoHide: true,
        bottomOffset: 20,
      });
      setLoading(false);
    // } else {
    //   firebase.updateProfile({
    //     street: values.street,
    //     unit: values.unit,
    //     city: values.city,
    //     state: values.state,
    //     zip: values.zip,
    //     country: values.country,
    //   });
    //   let allBagValues = { ...bagData, ...values };

    //   allBagValues.commissionRate = settings[0].commissionRate;
    //   allBagValues.coord = locationData.location;
    //   allBagValues.status = 'upcoming';
    //   allBagValues.createdAt = moment().toISOString();
    //   allBagValues.acceptedBy = 'none';

    //   allBagValues.orderedBy = users.filter(
    //     (uitem) => uitem.email === profile.email
    //   )[0].id;

    //   if (allBagValues.newProfessional) {
    //     allBagValues.ignoreFreelancer = profile.lastFreelancer
    //       ? profile.lastFreelancer
    //       : '';
    //   }

    //   // Note order: longitude, latitude.

    //   let freelancerCoordsData = users
    //     .filter((user) => user.freelancer === true)
    //     .reduce((result, fritem) => {
    //       if (fritem.pushToken && fritem.coords && fritem.active) {
    //         result.push(
    //           turf.point([fritem.coords.longitude, fritem.coords.latitude], {
    //             uid: fritem.id,
    //           })
    //         );
    //       }
    //       return result;
    //     }, []);

    //   let freelancherFeaturesCollections =
    //     turf.featureCollection(freelancerCoordsData);
    //   if ('coords' in profile) {
    //     // Create circle with radius
    //     let center = [profile.coords.longitude, profile.coords.latitude];
    //     console.log('log-center', center);

    //     let circle = turf.circle(
    //       center,
    //       settings[0] ? settings[0].radius : 25,
    //       {
    //         steps: 10,
    //         units: 'kilometers',
    //       }
    //     );

    //     // Find freelancer point within circle
    //     let availableFreelancersinRadius = turf.pointsWithinPolygon(
    //       freelancherFeaturesCollections,
    //       circle
    //     );

    //     if (availableFreelancersinRadius.features.length > 0) {
    //       let getTheAvailableFreelancers =
    //         availableFreelancersinRadius.features.map((afitem, afindex) => {
    //           return users.filter(
    //             (item) => item.id === afitem.properties.uid
    //           )[0];
    //         });

    //       // let filteredAvailabilities = getTheAvailableFreelancers.reduce(
    //       //   (result, gafitem) => {
    //       //     if (
    //       //       allAvailabilities.filter((alitem) => alitem.id === gafitem.id)[0]
    //       //     ) {
    //       //       result.push(
    //       //         allAvailabilities.filter((alitem) => alitem.id === gafitem.id)[0]
    //       //       );
    //       //     }
    //       //     return result;
    //       //   },
    //       //   []
    //       // );

    //       if (getTheAvailableFreelancers.length > 0) {
    //         setIsFreelancersAvailable(true);

    //         if (allBagValues.newProfessional) {
    //           let freelancerData = getTheAvailableFreelancers.filter(
    //             (user) => user.id !== profile.lastFreelancer
    //           );

    //           let getThefreelancersCoordsif = freelancerData.reduce(
    //             (retData, fritem) => {
    //               if (fritem.pushToken) {
    //                 retData.push(fritem.pushToken);
    //               }
    //               return retData;
    //             },
    //             []
    //           );

    //           if (getThefreelancersCoordsif.length > 0) {
    //             setFinalBag(allBagValues);
    //             setAvailableFreelancersFound(getThefreelancersCoordsif);
    //             modalizePaymentRef.current.open();
    //           } else {
    //             setFinalBag(false);
    //             setLoading(false);
    //             Toast.show({
    //               type: 'info',
    //               position: 'bottom',
    //               text1: 'Sorry!',
    //               text2:
    //                 'We did not get any freelancer available at the time you selected. please choose another time.',
    //               autoHide: true,
    //               topOffset: 50,
    //             });
    //           }
    //         } else {
    //           let getThefreelancersCoords = getTheAvailableFreelancers.reduce(
    //             (retData, fritem) => {
    //               if (fritem.pushToken) {
    //                 retData.push(fritem.pushToken);
    //               }
    //               return retData;
    //             },
    //             []
    //           );

    //           setFinalBag(allBagValues);
    //           setAvailableFreelancersFound(getThefreelancersCoords);
    //           modalizePaymentRef.current.open();
    //         }

    //         setLoading(false);
    //       } else {
    //         setIsFreelancersAvailable(false);
    //         setFinalBag(false);
    //         setLoading(false);
    //         Toast.show({
    //           type: 'info',
    //           position: 'bottom',
    //           text1: 'Sorry!',
    //           text2:
    //             'We did not get any freelancer available at the time you selected. please choose another time.',
    //           autoHide: true,
    //           topOffset: 50,
    //         });
    //       }
    //     } else {
    //       setIsFreelancersAvailable(false);
    //       setFinalBag(false);
    //       setLoading(false);
    //       Toast.show({
    //         type: 'info',
    //         position: 'bottom',
    //         text1: 'Sorry!',
    //         text2:
    //           'We did not get any freelancer available at the time you selected. please choose another time.',
    //         autoHide: true,
    //         topOffset: 50,
    //       });
    //     }
    //   } else {
    //     setIsFreelancersAvailable(false);
    //     setFinalBag(false);
    //     setLoading(false);
    //     Toast.show({
    //       type: 'info',
    //       position: 'bottom',
    //       text1: 'Sorry!',
    //       text2: 'Please enable your location in phone settings',
    //       autoHide: true,
    //       topOffset: 50,
    //     });
    //   }
    // }
  };

  const checkIsEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  const countTotalBag = () => {
    let total = 0;
    for (let i = 0; i < bagData.cart.length; i++) {
      if (isNaN(bagData.cart[i].price)) {
        continue;
      }
      total += Number(bagData.cart[i].price);
    }

    return total;
  };

  const validateAndApplyCoupon = (code) => {
    if (!code.length > 0) return true;
    let checkPromoCode = promos.filter((pi) => pi.code === code);

    if (checkPromoCode && checkPromoCode[0]) {
      if (profile.usedCoupons && profile.usedCoupons.includes(code)) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Sorry!',
          text2:
            'Promo code is used already. Promo codes are valid for one time use only.',
          autoHide: true,
          bottomOffset: 20,
        });
      } else {
        let calculateAfterCodeApplied = checkPromoCode[0].voucher
          ? parseInt(checkPromoCode[0].value)
          : (bagData.total / 100) * parseInt(checkPromoCode[0].value);

        if (calculateAfterCodeApplied > bagData.total) {
          Alert.alert(
            'Are you Sure?',
            'The coupon you are trying to use its bigger then the order total. If you use this code the rest money will be lost.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: "Yes it's ok",
                onPress: () => {
                  dispatch({
                    type: 'APPLYCOUPON',
                    payload: bagData.total,
                  });
                  Toast.show({
                    type: 'success',
                    position: 'bottom',
                    text1: 'Awesome!',
                    text2: 'The coupon is valid. You can use it only one time.',
                    autoHide: true,
                    bottomOffset: 20,
                  });
                },
              },
            ]
          );
        } else {
          dispatch({ type: 'APPLYCOUPON', payload: calculateAfterCodeApplied });
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Awesome!',
            text2: 'The coupon is valid. You can use it only one time.',
            autoHide: true,
            bottomOffset: 20,
          });
        }
      }
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Sorry!',
        text2: 'Promo code is not valid.',
        autoHide: true,
        bottomOffset: 20,
      });
    }
  };

  return (
    <PlainLayout
      titleOnly='APPOINTMENT DETAILS'
      showBack
      hideLine
      hideSubheaderShadow
      subHeader={
        <View style={cascreenStyles.flatContainer}>
          <View style={cascreenStyles.flatContainerStart}>
            <Feather name='clock' size={20} color={colors.grey} />
            <Title ml5>{minsConverter(bagData && bagData.totalTime)}</Title>
          </View>
          <View style={cascreenStyles.flatContainerStart}>
            <FontAwesome5
              name='user'
              size={18}
              color={colors.grey}
              style={{ marginLeft: 10 }}
            />
            <Title ml5>{bagData && bagData.totalClient}-person team</Title>
          </View>
        </View>
      }
      footer={
        isEmpty(profile) && (
          <View style={{ paddingHorizontal: 10 }}>
            <Button
              medium
              primary
              block
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              Login
            </Button>
          </View>
        )
      }
      showRight={
        <IconButton
          icon='delete'
          iconType='materialcommunity'
          size={35}
          color={colors.veryDarkGrey}
          onPress={() => {
            Alert.alert('Clear bag', 'Do you really wants to delete the bag?', [
              { text: 'Cancel' },
              {
                text: 'Yes',
                onPress: () => {
                  dispatch({ type: 'REMOVEBAG' });
                  navigation.goBack();
                },
              },
            ]);
          }}
        />
      }
    >
      <Formik
        innerRef={caForm}
        validationSchema={orderValidationSchema}
        initialValues={{
          street: isLoaded(profile) && !isEmpty(profile) ? profile.street : '',
          unit: isLoaded(profile) && !isEmpty(profile) ? profile.unit : '',
          city: isLoaded(profile) && !isEmpty(profile) ? profile.city : '',
          state: isLoaded(profile) && !isEmpty(profile) ? profile.state : '',
          zip: isLoaded(profile) && !isEmpty(profile) ? profile.zip : '',
          country:
            isLoaded(profile) && !isEmpty(profile) ? profile.country : '',
          orderDate: bagData.date,
          styleNotes: bagData.styleNotes ? bagData.styleNotes : '',
          newProfessional: bagData.newProfessional
            ? bagData.newProfessional
            : false,
          couponCode: bagData.couponCode ? bagData.couponCode : '',
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          setFieldValue,
          validateForm,
          validateField,
        }) => (
          <>
            <View style={[cascreenStyles.flatCardWrapper, { marginTop: 10 }]}>
              <View style={[cascreenStyles.flatCardContainer]}>
                <View
                  style={[
                    cascreenStyles.flatCardContainerTitle,
                    { alignItems: 'flex-start' },
                  ]}
                >
                  <View style={[cascreenStyles.flatCardImageWrapper]}>
                    <Image
                      source={{ uri: service.img }}
                      style={[cascreenStyles.flatCardImage]}
                    />
                  </View>

                  <View>
                    <Title ml10 bold h4>
                      {service.name}
                    </Title>
                    <Title ml10 bold>
                      {bagData.cart &&
                        bagData.cart.filter(
                          (item) => item.type === 'main'
                        )[0] &&
                        bagData.cart.filter((item) => item.type === 'main')[0]
                          .name}{' '}
                      - 1 stylist
                    </Title>
                    {bagData.cart &&
                      bagData.cart.filter((item) => item.type === 'another') &&
                      bagData.cart
                        .filter((item) => item.type === 'another')
                        .map((extItem, extIndex) => {
                          return <Title ml10>{extItem.name}</Title>;
                        })}
                    {bagData.cart &&
                      bagData.cart.filter((item) => item.type === 'popular') &&
                      bagData.cart
                        .filter((item) => item.type === 'popular')
                        .map((extItem, extIndex) => {
                          console.log('extItem', extItem);
                          return (
                            <Title ml10>
                              {extItem.name} ({extItem.quantity})
                            </Title>
                          );
                        })}
                  </View>
                </View>

                <View>
                  <Title bold>{bagData.total} CAD</Title>
                  {bagData.discount && bagData.discount > 0 ? (
                    <Title bold gray mr10>
                      {`-${bagData.discount} CAD`}
                    </Title>
                  ) : null}
                </View>
              </View>
              <FlatCollapsible
                name='Add another service'
                showIcon={{ name: 'plus', type: 'feather' }}
              >
                {filteredExtraServices() &&
                !filteredExtraServices().length > 0 ? (
                  <Title center>No extra services can be added</Title>
                ) : (
                  filteredExtraServices().map((exitem, exindex) => {
                    let checkPoint = bagData.cart.filter(
                      (item) => item.name === exitem.name
                    )[0];
                    return (
                      <FlatCollapsibleItem
                        key={exitem.name + exindex.toString()}
                        {...exitem}
                        active={checkPoint && exitem.name === checkPoint.name}
                        onPress={() => {
                          if (bagData.discount > 0)
                            return Alert.alert(
                              'Sorry!',
                              'You cannot add or remove new items to the bag after applying the coupon.'
                            );
                          if (isFreelancersAvailable) return true;
                          if (checkPoint) {
                            dispatch({
                              type: 'ADDINBAG',
                              payload: {
                                id: exitem.name
                                  .replace(/[^A-Z0-9]/gi, '_')
                                  .toLowerCase(),
                                type: 'another',
                                name: exitem.name,
                                quantity: 1,
                                price: -exitem.price,
                                time: -exitem.time,
                              },
                            });
                          } else {
                            dispatch({
                              type: 'ADDINBAG',
                              payload: {
                                id: exitem.name
                                  .replace(/[^A-Z0-9]/gi, '_')
                                  .toLowerCase(),
                                type: 'another',
                                name: exitem.name,
                                quantity: 1,
                                price: exitem.price,
                                time: exitem.time,
                              },
                            });
                          }
                          dispatch({ type: 'COUNTTOTALBAG' });
                        }}
                      />
                    );
                  })
                )}
              </FlatCollapsible>
            </View>

            {isLoaded(profile) && !isEmpty(profile) ? (
              <>
                <View
                  style={[cascreenStyles.flatCardWrapper, cascreenStyles.mr60p]}
                >
                  <FlatCollapsible
                    name='+ Enter Your Address'
                    hideArrow
                    showIcon={{
                      name: 'map-marker-outline',
                      type: 'materialcommunity',
                    }}
                  >
                    <View style={[cascreenStyles.formRow]}>
                      <View style={cascreenStyles.formColumn70}>
                        <InputFlat
                          small
                          name='street'
                          label='Street'
                          onChangeText={handleChange('street')}
                          onBlur={handleBlur('street')}
                          value={values.street}
                          error={errors.street}
                          editable={!isFreelancersAvailable} //availableFreelancersFound
                        />
                      </View>
                      <View style={cascreenStyles.formColumn30}>
                        <InputFlat
                          small
                          name='unit'
                          label='Unit/Flat'
                          onChangeText={handleChange('unit')}
                          onBlur={handleBlur('unit')}
                          value={values.unit}
                          error={errors.unit}
                          editable={!isFreelancersAvailable}
                        />
                      </View>
                    </View>

                    <View style={cascreenStyles.formRow}>
                      <View style={cascreenStyles.formColumn}>
                        <InputFlat
                          small
                          name='city'
                          label='City'
                          onChangeText={handleChange('city')}
                          onBlur={handleBlur('city')}
                          value={values.city}
                          error={errors.city}
                          editable={!isFreelancersAvailable}
                        />
                      </View>
                      <View style={cascreenStyles.formColumn}>
                        <InputFlat
                          small
                          name='state'
                          label='Province'
                          onChangeText={handleChange('state')}
                          onBlur={handleBlur('state')}
                          value={values.state}
                          error={errors.state}
                          editable={!isFreelancersAvailable}
                        />
                      </View>
                    </View>

                    <View style={cascreenStyles.formRow}>
                      <View style={cascreenStyles.formColumn30}>
                        <InputFlat
                          small
                          name='zip'
                          label='Postal Code'
                          onChangeText={handleChange('zip')}
                          onBlur={handleBlur('zip')}
                          value={values.zip}
                          error={errors.zip}
                          editable={!isFreelancersAvailable}
                        />
                      </View>
                      <View style={cascreenStyles.formColumn70}>
                        <InputFlat
                          small
                          name='country'
                          label='Country'
                          onChangeText={handleChange('country')}
                          onBlur={handleBlur('country')}
                          value={values.country}
                          error={errors.country}
                          editable={!isFreelancersAvailable}
                        />
                      </View>
                    </View>
                  </FlatCollapsible>
                  <HorizontalLine />
                  <FlatCollapsible
                    isExpanded={true}
                    name='+ Select a Date and Time'
                    hideArrow
                    showIcon={{
                      name: 'calendar-outline',
                    }}
                  >
                    <View
                      style={[
                        cascreenStyles.formRow,
                        cascreenStyles.formRowPadding,
                      ]}
                    >
                      <InputDateTime
                        disabled={isFreelancersAvailable}
                        divide
                        small
                        name='orderDate'
                        specialProps={{
                          maximumDate: moment().add(1, 'weeks').toDate(),
                          minimumDate: moment().add(2, 'hours').toDate(),
                        }}
                        onChangeText={(dateData) => {
                          console.log('log-dateData', dateData);
                          setFieldValue('orderDate', dateData, true);
                          // validateField('orderDate');
                          dispatch({ type: 'ADDDATE', payload: dateData });
                        }}
                        value={values.orderDate}
                        error={errors.orderDate}
                      />
                    </View>
                  </FlatCollapsible>
                  <HorizontalLine />
                  <FlatCollapsible
                    name='+ Add Style Notes '
                    hideArrow
                    showIcon={{
                      name: 'microsoft-onenote',
                      type: 'materialcommunity',
                    }}
                  >
                    <View
                      style={[
                        cascreenStyles.formRow,
                        cascreenStyles.formRowPadding,
                      ]}
                    >
                      <InputFlat
                        name='styleNotes'
                        onChangeText={(text) => {
                          dispatch({
                            type: 'ADDTOBAG',
                            payload: { styleNotes: text },
                          });

                          setFieldValue('styleNotes', text, false);
                          handleChange('styleNotes');
                        }}
                        onChange={(e) => {
                          dispatch({
                            type: 'ADDTOBAG',
                            payload: { styleNotes: e.nativeEvent.text },
                          });
                          setFieldValue(
                            'styleNotes',
                            e.nativeEvent.text,
                            false
                          );
                          handleChange('styleNotes');
                        }}
                        onBlur={handleBlur('styleNotes')}
                        value={values.styleNotes}
                        error={errors.styleNotes}
                        numberOfLines={9}
                        editable={!isFreelancersAvailable}
                        multiline
                      />
                    </View>
                  </FlatCollapsible>
                  <HorizontalLine />

                  <FlatCollapsible
                    hideArrow
                    onlyHeader
                    disabled={isFreelancersAvailable}
                    value={values.newProfessional}
                    name='Try a new professional'
                    onChangeText={(value) => {
                      //newProfessional
                      dispatch({
                        type: 'ADDTOBAG',
                        payload: { newProfessional: value },
                      });
                      setFieldValue('newProfessional', value, false);
                      handleChange('newProfessional');
                    }}
                    showIcon={{
                      name: 'user-o',
                      type: 'fontawesome',
                    }}
                  />
                  <Title ml10 gray mr10>
                    Use this option to choose a different freelancer from the
                    last one.
                  </Title>
                  <HorizontalLine />
                  <FlatCollapsible
                    name='Redeem promo or gift code'
                    hideArrow
                    showIcon={{
                      name: 'pricetag-outline',
                    }}
                  >
                    <View
                      style={[
                        cascreenStyles.formRow,
                        cascreenStyles.formRowPadding,
                      ]}
                    >
                      <View
                        style={[
                          cascreenStyles.formRow,
                          { alignItems: 'center' },
                        ]}
                      >
                        <View style={[cascreenStyles.formColumn70]}>
                          <InputFlat
                            small
                            editable={!isFreelancersAvailable}
                            name='couponCode'
                            onChangeText={(text) => {
                              dispatch({
                                type: 'ADDTOBAG',
                                payload: { couponCode: text },
                              });

                              setFieldValue('couponCode', text, false);
                              handleChange('couponCode');
                            }}
                            onChange={(e) => {
                              dispatch({
                                type: 'ADDTOBAG',
                                payload: { couponCode: e.nativeEvent.text },
                              });
                              setFieldValue(
                                'couponCode',
                                e.nativeEvent.text,
                                false
                              );
                              handleChange('couponCode');
                            }}
                            onBlur={handleBlur('couponCode')}
                            value={values.couponCode}
                            error={errors.couponCode}
                          />
                        </View>
                        <View style={cascreenStyles.formColumn30}>
                          {bagData.discount && bagData.discount > 0 ? (
                            <Button
                              small
                              smallStyle
                              primary
                              onPress={() => {
                                setFieldValue('couponCode', '', false);
                                dispatch({ type: 'REMOVECOUPON' });
                              }}
                            >
                              Remove
                            </Button>
                          ) : (
                            <Button
                              disabled={isFreelancersAvailable}
                              primary
                              small
                              smallStyle
                              onPress={() => {
                                validateAndApplyCoupon(values.couponCode);
                              }}
                            >
                              Validate
                            </Button>
                          )}
                        </View>
                      </View>
                    </View>
                  </FlatCollapsible>
                </View>
                <View
                  style={{
                    marginTop: 50,
                  }}
                >
                  {!finalBag && (
                    <Button
                      loading={loading}
                      disabled={loading}
                      primary
                      onPress={() =>
                        validateForm().then((resp) => {
                          if (checkIsEmpty(resp)) {
                            setLoading(true);
                            setTimeout(() => {
                              handleSubmit();
                            }, 2000);
                          } else {
                            Toast.show({
                              type: 'error',
                              position: 'bottom',
                              text1: 'Sorry!',
                              text2:
                                'Please check all required fields and fill.',
                              autoHide: true,
                              bottomOffset: 20,
                            });
                          }
                        })
                      }
                    >
                      CHECK AVAILABILITY
                    </Button>
                  )}
                </View>
              </>
            ) : (
              <View
                style={{
                  marginTop: 10,
                  flex: 1,
                  alignItems: 'center',
                  width: '80%',
                  alignSelf: 'center',
                }}
              >
                <Image
                  source={require('../../assets/notauth.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 300,
                    height: 200,
                  }}
                />
                <Title h2 center>
                  You're not logged in
                </Title>
                <Title h4 gray center>
                  To access this feature you need to login first or sign up to
                  create account
                </Title>
              </View>
            )}
          </>
        )}
      </Formik>

      {finalBag && (
        <Portal>
          <Modalize
            ref={modalizePaymentRef}
            modalTopOffset={screenHeight / 1.4}
            onClosed={() => {
              setFinalBag(false);
            }}
            withHandle={false}
            overlayStyle={{
              backgroundColor: 'transparent',
            }}
            modalStyle={{
              width: screenWidth / 1,
              borderColor: colors.lightGrey,
              borderWidth: 1,

              ...Platform.select({
                ios: {
                  backgroundColor: colors.backgroundWhite,
                  shadowColor: colors.btnTextDark,
                  shadowOffset: {
                    width: 0,
                    height: -2,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                },
                android: {
                  backgroundColor: colors.backgroundWhite,
                  elevation: 4,
                },
              }),
            }}
          >
            <View
              style={{
                margin: 20,
              }}
            >
              <Title
                h3
                bold
                center
                style={{ marginBottom: 20, color: colors.darkGrey }}
              >
                Total Amount: {countTotalBag()} CAD
              </Title>
              <Button
                loading={loading}
                disabled={loading}
                payNow
                noShadow
                onPress={async () => {
                  if (finalBag.total > 0) {
                    await initializePaymentSheet(finalBag.total * 100).then(
                      () => {
                        setTimeout(() => {
                          openPaymentSheet(finalBag);
                        }, 1000);
                      }
                    );
                  } else {
                    ConfirmOrder(finalBag);
                  }
                }}
              >
                Pay Now
              </Button>
              <Title ml10 gray mr10 center>
                Card payment
              </Title>
            </View>
          </Modalize>
        </Portal>
      )}

      {/* {finalBag && (
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Button
            loading={loading}
            disabled={loading}
            completed
            onPress={async () => {
              if (finalBag.total > 0) {
                await initializePaymentSheet(finalBag.total * 100).then(() => {
                  setTimeout(() => {
                    openPaymentSheet(finalBag);
                  }, 1000);
                });
              } else {
                ConfirmOrder(finalBag);
              }
            }}
          >
            Pay Now
          </Button>
        </View>
      )} */}
      <Portal>
        <Modalize
          ref={modalizeRef}
          modalTopOffset={0}
          modalStyle={{
            margin: 20,
          }}
          modalHeight={500}
          onClosed={() => {
            setIsFreelancersAvailable(false);
            setTimeSugession([]);
          }}
        >
          <View style={{ padding: 10 }}>
            {timeSugession && timeSugession.length > 0 && (
              <Title center h3 bold>
                We have some suggestion
              </Title>
            )}
            <View>
              {timeSugession && timeSugession.length > 0 ? (
                timeSugession.map((tsitem, tsindex) => {
                  return (
                    <FlatButton
                      onPress={() => {
                        caForm.current.setFieldValue(
                          'orderDate',
                          moment(tsitem.start, 'YYYY-MM-DD HH:mm a').format(
                            'MM-DD-YYYY HH:mm:00 a'
                          ),
                          false
                        );
                        modalizeRef.current.close();
                      }}
                      small
                      outlined
                      key={moment(tsitem.start).unix() + tsindex}
                    >
                      {moment(tsitem.start, 'YYYY-MM-DD HH:mm a').format(
                        'Do MMM - HH:mm'
                      )}{' '}
                      to{' '}
                      {moment(tsitem.end, 'YYYY-MM-DD HH:mm a').format('HH:mm')}
                    </FlatButton>
                  );
                })
              ) : (
                <Title center h3 bold>
                  Sorry no freelancers available in your area right now.
                </Title>
              )}
            </View>
          </View>
        </Modalize>
      </Portal>
    </PlainLayout>
  );
};

const cascreenStyles = StyleSheet.create({
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatCardWrapper: {
    borderRadius: 10,
    backgroundColor: colors.backgroundWhite,
    borderColor: colors.lightGrey,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        borderWidth: 1,
        elevation: 4,
      },
    }),
  },
  flatCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  flatCardContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatCardImageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  flatCardImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  flatContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mr60p: {
    marginTop: 60,
    marginBottom: 10,
  },
  formRow: {
    flexDirection: 'row',
  },
  formRowPadding: {
    flexDirection: 'column',
    paddingLeft: 5,
    paddingRight: 5,
  },
  formColumn: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  formColumn20: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  formColumn30: {
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  formColumn70: {
    flex: 3,
    paddingLeft: 5,
    paddingRight: 5,
  },
  formColumn80: {
    flex: 4,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default CreateAppointmentScreen;
