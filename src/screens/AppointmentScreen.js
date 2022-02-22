import React, { useEffect, useState } from 'react';

import PlainLayout from '../components/PlainLayout';
import { useSelector } from 'react-redux';
import colors from '../utils/colors';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { AppoinmentCard, Button, Title } from '../components/ComponentItems';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import notify from '../utils/notify';

const AppointmentScreen = (props) => {
  useFirestoreConnect([
    {
      collection: 'orders',
      where: [['status', 'not-in', ['canceled', 'upcoming', 'confirmed']]],
      storeAs: 'notCompleted',
    },
    {
      collection: 'orders',
      where: [['status', 'in', ['upcoming']]],
      storeAs: 'upcomingFreelancerOrder',
    },
    {
      collection: 'orders',
      where: [['status', 'in', ['confirmed', 'canceled']]],
      storeAs: 'completed',
    },
    {
      collection: 'users',
      where: [['freelancer', '==', true]],
      storeAs: 'appointmentUsers',
    },
    { collection: 'settings', doc: 'xyqAFk9BFdmmFYRqtiUQ' },
  ]);
  const navigation = useNavigation();
  const users = useSelector(
    (state) => state.firestore.ordered.appointmentUsers
  );
  const ordersNotCompleted = useSelector(
    (state) => state.firestore.ordered.notCompleted
  );
  const settings = useSelector((state) => state.firestore.ordered.settings);

  const ordersUpcoming = useSelector(
    (state) => state.firestore.ordered.upcomingFreelancerOrder
  );
  const ordersCompleted = useSelector(
    (state) => state.firestore.ordered.completed
  );
  const firestore = useFirestore();

  const [active, setActive] = useState(0);

  const randomString = (length = 20) => {
    let chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [loadingCanceled, setLoadingCanceled] = useState(false);
  const [acceptedLoading, setAcceptedLoading] = useState(false);
  const [confirmedLoading, setConfirmedLoading] = useState(false);

  const cancelOrder = (id, order) => {
    if (order.status === 'canceled') return false;
    setLoadingCanceled(true);
    // set new canceled condition
    let theStartTimeBefore = moment(
      order.orderDate,
      'MM-DD-YYYY HH:mm:ss a'
    ).subtract(90, 'minutes');

    let theEndTime = moment(order.orderDate, 'MM-DD-YYYY HH:mm:ss a').add(
      order.totalTime,
      'minutes'
    );

    // checked is before because what will happen if the service is running.
    // we should do the same for customers after any cancellation after if the time is from before 90 min
    if (
      moment().isBetween(theStartTimeBefore, theEndTime) &&
      order.acceptedBy !== 'none'
    ) {
      Alert.alert(
        'Are you sure?',
        'If you cancel the order you will be charged 25% of the total charges, remainder will be available in promo section, please contact support team for further info.',
        [
          {
            text: 'Cancel',
            onPress: () => {
              setLoadingCanceled(false);
            },
          },
          {
            text: 'Yes',
            onPress: () => {
              let adminPercentage = (parseFloat(order.total) / 100) * 15;
              let freelancerPercentage = (parseFloat(order.total) / 100) * 10;

              let customerCouponValue =
                order.total - (adminPercentage + freelancerPercentage);

              let voucherData = {
                code: randomString(10),
                customers: [auth.uid],
                detail: 'Voucher',
                forAll: false,
                value: customerCouponValue,
                voucher: true,
              };

              // create new voucher
              const { id: newvoucherID } = firestore
                .collection('promos')
                .add(voucherData);

          

              // get the freelancer
              let theFrelancerAccepted = users.filter(
                (ui) => ui.id === order.acceptedBy
              );

              // update the order
              firestore.collection('orders').doc(id).set(
                {
                  adminBalance: adminPercentage,
                  freelancerBalance: freelancerPercentage,
                  status: 'canceled',
                  total: 0,
                  refunded: true,
                  canceledBy: auth.uid,
                },
                { merge: true }
              );
              let getTheCustomersPushToken = users.filter(
                (csitem) => csitem.id === order.acceptedBy
              );
              if (
                getTheCustomersPushToken &&
                getTheCustomersPushToken[0] &&
                getTheCustomersPushToken[0].pushToken
              ) {
                notify(
                  'Nailzi Beauty App',
                  'The beauty service appointment has been canceled',
                  [getTheCustomersPushToken[0].pushToken]
                )
                  .then((resp) => {
                    console.log(resp);
                  })
                  .catch((reason) => {
                    console.log(reason);
                  });
              }
              setLoadingCanceled(false);
            },
          },
        ]
      );
    } else {
      Alert.alert('Are you sure?', 'You want to cancel this order?', [
        {
          text: 'Cancel',
          onPress: () => {
            setLoadingCanceled(false);
          },
        },
        {
          text: 'Yes',
          onPress: () => {
            let voucherData = {
              code: randomString(10),
              customers: [auth.uid],
              detail: 'Voucher',
              forAll: false,
              value: order.total,
              voucher: true,
            };

            // create new voucher
            const { id: newvoucherID } = firestore
              .collection('promos')
              .add(voucherData);

            // update the old coupons
           

            // update the order
            firestore.collection('orders').doc(id).set(
              {
                adminBalance: 0,
                freelancerBalance: 0,
                status: 'canceled',
                total: 0,
                refunded: true,
                canceledBy: auth.uid,
              },
              { merge: true }
            );
            let getTheCustomersPushToken = users.filter(
              (csitem) => csitem.id === order.acceptedBy
            );
            if (
              getTheCustomersPushToken &&
              getTheCustomersPushToken[0] &&
              getTheCustomersPushToken[0].pushToken
            ) {
              notify(
                'Nailzi Beauty App',
                'The beauty service appointment has been canceled',
                [getTheCustomersPushToken[0].pushToken]
              )
                .then((resp) => {
                  console.log(resp);
                })
                .catch((reason) => {
                  console.log(reason);
                });
            }
            setLoadingCanceled(false);
          },
        },
      ]);
    }
  };

  const onStarRating = (rate, order) => {
    if (!order.ratedByCustomer) {
      Alert.alert('Are you sure?', ' ', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            firestore.collection('orders').doc(order.id).set(
              {
                freelancerRating: rate,
                ratedByCustomer: true,
              },
              { merge: true }
            );
          },
        },
      ]);
    }
  };

    return (
      <PlainLayout
        noPadding
        useView
        titleOnly='APPOINTMENTS'
        footer={
          <View style={{ width: '95%', alignSelf: 'center' }}>
            <Button
              primary
              medium
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              Login
            </Button>
          </View>
        }
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
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
          <Title h2>You're not logged in</Title>
          <Title h4 gray center>
            To access this feature you need to login first or sign up to create
            account
          </Title>
        </View>
      </PlainLayout>
    );
  

  const confirmOrder = async (total, id, commissionRate, order) => {
    setConfirmedLoading(true);

    Alert.alert(
      'Your appointment has been confirmed',
      "Please login and confirm that your order is completed and don't forget to rate our professional",
      [
        // {
        //   text: 'Cancel',
        //   style: 'cancel',
        //   onPress: () => {
        //     setConfirmedLoading(false);
        //   },
        // },
        {
          text: 'Ok',
          onPress: () => {
            let getTheFreelancerPushToken = users.filter(
              (csitem) => csitem.id === order.acceptedBy
            );
            if (
              getTheFreelancerPushToken &&
              getTheFreelancerPushToken[0] &&
              getTheFreelancerPushToken[0].pushToken
            ) {
              notify(
                'Nailzi - Great, your order has been confirmed',
                'Check your order history.',
                [getTheFreelancerPushToken[0].pushToken]
              )
                .then((resp) => {
                  console.log(resp);
                })
                .catch((reason) => {
                  console.log(reason);
                });
            }
            firestore.collection('orders').doc(id).set(
              {
                status: 'confirmed',
              },
              { merge: true }
            );
            setConfirmedLoading(false);
          },
        },
      ]
    );
  };

  return (
    <PlainLayout
      lineWhite
      titleOnly='APPOINTMENTS'
      showLoader={!isLoaded(auth)}
      hideSubheaderShadow
      subHeader={
        <SegmentedControlTab
          values={['Upcoming', 'Active', 'History']}
          selectedIndex={active}
          onTabPress={setActive}
          borderRadius={15}
          tabsContainerStyle={appointmentscreenStyles.tabsContainerStyle}
          tabStyle={appointmentscreenStyles.tabStyle}
          tabTextStyle={appointmentscreenStyles.tabTextStyle}
          activeTabStyle={appointmentscreenStyles.activeTabStyle}
          activeTabTextStyle={appointmentscreenStyles.activeTabTextStyle}
        />
      }
    >
      {active === 0 && (
        <View style={{ flex: 1 }}>
          {!isLoaded(ordersUpcoming) ? (
            <View>
              <Title h4 bold center>
                Loading ...
              </Title>
            </View>
          ) : isEmpty(ordersUpcoming) ? (
            <View>
              <Title h4 bold center>
                There is no order
              </Title>
            </View>
          ) : (
            ordersUpcoming
              .filter((item) => item.orderedBy === auth.uid)
              .sort(
                (a, b) =>
                  moment(b.createdAt).unix() - moment(a.createdAt).unix()
              )
              .map((ocitem, ocindex) => {
                return (
                  <AppoinmentCard
                    onCancel={(id) => {
                      cancelOrder(id, ocitem);
                    }}
                    acceptedLoading={acceptedLoading}
                    canceledLoading={loadingCanceled}
                    key={ocitem.orderedBy + ocindex}
                    {...ocitem}
                    customer={profile.customer}
                  />
                );
              })
          )}
        </View>
      )}

      {active === 1 && (
        <View style={{ flex: 1 }}>
          {!isLoaded(ordersNotCompleted) ? (
            <View>
              <Title h4 bold center>
                Loading ...
              </Title>
            </View>
          ) : isEmpty(ordersNotCompleted) ? (
            <View>
              <Title h4 bold center>
                There is no order
              </Title>
            </View>
          ) : ordersNotCompleted.length > 0 ? (
            ordersNotCompleted
              .filter((item) => item.orderedBy === auth.uid)
              .sort(
                (a, b) =>
                  moment(b.createdAt).unix() - moment(a.createdAt).unix()
              )
              .map((oncitem, oncindex) => {
                let freelancer = users.filter(
                  (fli) => fli.id === oncitem.acceptedBy
                );
                return (
                  <AppoinmentCard
                    onCancel={(id) => {
                      cancelOrder(id, oncitem);
                    }}
                    onConfirmed={(total, id) => {
                      confirmOrder(total, id, oncitem.commissionRate, oncitem);
                    }}
                    acceptedLoading={acceptedLoading}
                    canceledLoading={loadingCanceled}
                    confirmedLoading={confirmedLoading}
                    key={oncitem.orderedBy + oncindex}
                    {...oncitem}
                    flinfo={freelancer && freelancer[0]}
                    customer={profile.customer}
                  />
                );
              })
          ) : (
            <View>
              <Title h4 bold center>
                There is no order
              </Title>
            </View>
          )}
        </View>
      )}
      {active === 2 && (
        <View style={{ flex: 1 }}>
          {!isLoaded(ordersCompleted) ? (
            <View>
              <Title h4 bold center>
                Loading ...
              </Title>
            </View>
          ) : isEmpty(ordersCompleted) ? (
            <View>
              <Title h4 bold center>
                There is no order
              </Title>
            </View>
          ) : ordersCompleted.length > 0 ? (
            ordersCompleted
              .filter((item) => item.orderedBy === auth.uid)
              .sort(
                (a, b) =>
                  moment(b.createdAt).unix() - moment(a.createdAt).unix()
              )
              .map((ocitem, ocindex) => {
                let freelancer = users.filter(
                  (fli) => fli.id === ocitem.acceptedBy
                );
                return (
                  <AppoinmentCard
                    key={ocitem.orderedBy + ocindex}
                    {...ocitem}
                    customer={profile.customer}
                    flinfo={
                      freelancer &&
                      freelancer[0] && {
                        firstName: freelancer[0].firstName,
                        lastName: freelancer[0].lastName,
                      }
                    }
                    onStarRatingPress={(rate) => {
                      onStarRating(rate, ocitem);
                    }}
                  />
                );
              })
          ) : (
            <View>
              <Title h4 bold center>
                There is no order
              </Title>
            </View>
          )}
        </View>
      )}
    </PlainLayout>
  );
};

const appointmentscreenStyles = StyleSheet.create({
  tabsContainerStyle: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 17,
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
        elevation: 4,
      },
    }),
  },
  tabStyle: {
    borderWidth: 0,
    height: 40,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  tabTextStyle: {
    fontSize: 16,
    color: colors.btnTextDark,
  },
  activeTabStyle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  activeTabTextStyle: {
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
