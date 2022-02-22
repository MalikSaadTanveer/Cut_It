import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet, Image } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AuthenticatedLayout from '../components/AuthenticatedLayout';
import { AppoinmentCard, Button, Title } from '../components/ComponentItems';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';
import Toast from 'react-native-toast-message';
import * as turf from '@turf/turf';
import moment from 'moment';
import notify from '../utils/notify';

const CustomersScreens = (props) => {
  const navigation = useNavigation();
  const firestore = useFirestore();
  const appData = useSelector((state) => state.appStore);
  const profile = useSelector(({ firebase: { profile } }) => profile);
  const locationData = useSelector((state) => state.appStore);

  
  const users = useSelector((state) => state.firestore.ordered.Users);

  const ordersNotCompleted = useSelector(
    (state) =>
      state.firestore.ordered[`notCompletedFreelancerOrder${appData.uid}`]
  );
  const ordersUpcoming = useSelector(
    (state) => state.firestore.ordered[`upcomingFreelancerOrder${appData.uid}`]
  );
  const ordersCompleted = useSelector(
    (state) => state.firestore.ordered[`completedFreelancerOrder${appData.uid}`]
  );
  const settings = useSelector((state) => state.firestore.ordered.settings);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsubscribe = firestore.setListener({ collection: 'orders' });
    return unsubscribe();
  }, [ordersNotCompleted, ordersUpcoming, ordersCompleted]);

  const [loadingBtn, setLoadingBtn] = useState(false);
  const [loadingCanceled, setLoadingCanceled] = useState(false);
  const [acceptedLoading, setAcceptedLoading] = useState(false);

  const checkIfHaveCurrentOrderAtSameTime = (order) => {
    let currentStart = moment(order.orderDate, 'MM-DD-YYYY HH:mm:ss a');
    let currentEnd = moment(order.orderDate, 'MM-DD-YYYY HH:mm:ss a').add(
      order.totalTime,
      'minutes'
    );

    if (ordersNotCompleted && ordersNotCompleted.length > 0) {
      let checkCurrentOrders = ordersNotCompleted.filter(
        (ccod) => ccod.acceptedBy === appData.uid
      );

      let checkforCurrent = checkCurrentOrders.reduce((results, ccoditem) => {
        let start = moment(ccoditem.orderDate, 'MM-DD-YYYY HH:mm:ss a');
        let end = moment(ccoditem.orderDate, 'MM-DD-YYYY HH:mm:ss a').add(
          ccoditem.totalTime,
          'minutes'
        );

        if (
          moment(currentStart).isBetween(start, end, null, '[]') ||
          moment(currentEnd).isBetween(start, end, null, '[]')
        ) {
          results.push(ccoditem);
        }
        return results;
      }, []);
      if (checkforCurrent.length > 0) return true;
    }
    return false;
  };

  const acceptOrder = (id, order) => {
    setAcceptedLoading(true);

    // if (checkIfHaveCurrentOrderAtSameTime(order)) {
    //   Alert.alert('Sorry!', 'You cannot accept multiple order at same time.', [
    //     {
    //       text: 'Cancel',
    //       onPress: () => {},
    //     },
    //     {
    //       text: 'Ok',
    //       onPress: () => {},
    //     },
    //   ]);
    //   return false;
    // }

    Alert.alert(
      'Do you want to accept?',
      'Click confirm to accept the order.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            setAcceptedLoading(false);
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            let getTheCustomersPushToken = users.filter(
              (csitem) => csitem.id === order.orderedBy
            );
            if (
              getTheCustomersPushToken &&
              getTheCustomersPushToken[0] &&
              getTheCustomersPushToken[0].pushToken
            ) {
              notify(
                'Nailzi - Your order has been accepted.',
                'Our professional will arrive on time, we hope you will enjoy our service.',
                [getTheCustomersPushToken[0].pushToken]
              )
                .then((resp) => {
                  console.log(resp);
                })
                .catch((reason) => {
                  console.log(reason);
                });
            }

            firestore
              .collection('orders')
              .doc(id)
              .update({ status: 'accepted', acceptedBy: auth.uid });
            Toast.show({
              type: 'success',
              position: 'bottom',
              text1: 'Awesome!',
              text2: 'You have accepted this order.',
              autoHide: true,
              bottomOffset: 20,
            });
            setAcceptedLoading(false);
          },
        },
      ]
    );
  };

  const completeOrder = async (total, id, commissionRate, order) => {
    setLoadingBtn(true);

    Alert.alert(
      'Have you completed the job?',
      'Click confirm to complete the order.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            setLoadingBtn(false);
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            let getTheCustomersPushToken = users.filter(
              (csitem) => csitem.id === order.orderedBy
            );
            if (
              getTheCustomersPushToken &&
              getTheCustomersPushToken[0] &&
              getTheCustomersPushToken[0].pushToken
            ) {
              notify(
                'Nailzi - Great, your order has been completed',
                "Please login and confirm that your order is completed and don't forget to rate our professional",
                [getTheCustomersPushToken[0].pushToken]
              )
                .then((resp) => {
                  console.log(resp);
                })
                .catch((reason) => {
                  console.log(reason);
                });
            }
            firebase
              .updateProfile({
                lastOrder: order.id,
              })
              .then(() => {
                // update the order status to completed
                firestore.collection('orders').doc(id).set(
                  {
                    status: 'completed',
                  },
                  { merge: true }
                );

                // update the customer account with the last freelancer id
                firestore.collection('users').doc(order.orderedBy).set(
                  {
                    lastFreelancer: order.acceptedBy,
                  },
                  { merge: true }
                );

                Toast.show({
                  type: 'success',
                  position: 'bottom',
                  text1: 'Awesome!',
                  text2: 'You have completed this order.',
                  autoHide: true,
                  bottomOffset: 20,
                });
                setLoadingBtn(false);
              });
          },
        },
      ]
    );
  };

  const randomString = (length = 20) => {
    let chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  const cancelOrder = (id, order) => {
    if (order.status === 'canceled') return false;
    setLoadingCanceled(true);
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
    if (moment().isBetween(theStartTimeBefore, theEndTime)) {
      Alert.alert(
        'Are you sure?',
        'You are about to cancel an appointment with less than 90 min, your account will be deactivate for one week, please contact customer support for more info. Are you sure you want to cancel the order?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {
              setLoadingCanceled(false);
            },
          },
          {
            text: 'Yes',
            onPress: () => {
              let voucherData = {
                code: randomString(10),
                customers: [order.orderedBy],
                detail: 'Voucher',
                forAll: false,
                value: order.total,
                voucher: true,
              };

              // create new voucher
              firestore.collection('promos').add(voucherData);

              firestore.collection('orders').doc(id).update({
                adminBalance: 0,
                freelancerBalance: 0,
                status: 'canceled',
                canceledBy: auth.uid,
                total: 0,
              });

              firebase.updateProfile({
                active: false,
                coords: [],
                deactivatedReason:
                  'We have deactivated your account because you have canceled an appointment with less than 90 min before the start time. Please contact with support.',
              });
              let getTheCustomersPushToken = users.filter(
                (csitem) => csitem.id === order.orderedBy
              );
              if (
                getTheCustomersPushToken &&
                getTheCustomersPushToken[0] &&
                getTheCustomersPushToken[0].pushToken
              ) {
                notify(
                  'Nailzi - Your appointment has been canceled',
                  'Please make a new appointment using your voucher. Sorry for inconvenience!',
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
      Alert.alert('Are you sure?', 'You are about to cancel an appointment.', [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            setLoadingCanceled(false);
          },
        },
        {
          text: 'Yes',
          onPress: () => {
            let voucherData = {
              code: randomString(10),
              customers: [order.orderedBy],
              detail: 'Voucher',
              forAll: false,
              value: order.total,
              voucher: true,
            };

            // create new voucher
            const { id: newvoucherID } = firestore
              .collection('promos')
              .add(voucherData);

            firestore.collection('orders').doc(id).update({
              adminBalance: 0,
              freelancerBalance: 0,
              status: 'canceled',
              canceledBy: auth.uid,
              total: 0,
            });
            let getTheCustomersPushToken = users.filter(
              (csitem) => csitem.id === order.orderedBy
            );
            if (
              getTheCustomersPushToken &&
              getTheCustomersPushToken[0] &&
              getTheCustomersPushToken[0].pushToken
            ) {
              notify(
                'Nailzi - Your appointment has been canceled',
                'Please make a new appointment using your voucher. Sorry for inconvenience!',
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

  const filteredOrdersUpcoming = (ordersToFilter) => {
    let theOrderData = [];
    // ordersUpcoming
    // Note order: longitude, latitude.
    let ordersCoordsData = ordersToFilter.reduce((results, fritem) => {
      if (fritem.coord) {
        if (fritem.ignoreFreelancer !== appData.uid) {
          results.push(
            turf.point([fritem.coord.longitude, fritem.coord.latitude], {
              orderid: fritem.id,
            })
          );
        }
      }
      return results;
    }, []);

    if (ordersCoordsData.length > 0) {
      let ordersFeaturesCollections = turf.featureCollection(ordersCoordsData);

      if (locationData.location.longitude && locationData.location.latitude) {
        // Create circle with radius
        let center = [
          locationData.location.longitude,
          locationData.location.latitude,
        ];

        let circle = turf.circle(
          center,
          settings[0] ? settings[0].radius : 25,
          {
            steps: 10,
            units: 'kilometers',
          }
        );

        // Find freelancer point within circle
        let availableOrdersinRadius = turf.pointsWithinPolygon(
          ordersFeaturesCollections,
          circle
        );

        let gettheOrderData = availableOrdersinRadius.features.map((oditem) => {
          if (
            oditem.properties.orderid ===
            ordersUpcoming.filter(
              (ouitem) => ouitem.id === oditem.properties.orderid
            )[0].id
          ) {
            return ordersUpcoming.filter(
              (ouitem) => ouitem.id === oditem.properties.orderid
            )[0];
          }
        });

        theOrderData = gettheOrderData.reduce((results, orderitems) => {
          if (!checkIfHaveCurrentOrderAtSameTime(orderitems)) {
            results.push(orderitems);
          }
          return results;
        }, []);
      }
    }

    return theOrderData;
  };

  if (isLoaded(profile) && !isEmpty(profile) && !profile.active) {
    return (
      <AuthenticatedLayout pagename='Customers'>
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
          <Title h2 center>
            Your account is not activated.
          </Title>

          <Title h4 gray center>
            To access this feature you need to activate your account or contact
            to admin.
          </Title>
        </View>
      </AuthenticatedLayout>
    );
  }

  if (!isLoaded(profile) || isEmpty(profile)) {
    return (
      <AuthenticatedLayout pagename='Customers'>
        <View style={{ flex: 1 }}>
          <Button
            primary
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            Please login first
          </Button>
        </View>
      </AuthenticatedLayout>
    );
  }

  return (
    <AuthenticatedLayout
      pagename='Customers'
      subHeader={
        <SegmentedControlTab
          values={['Upcoming', 'Active', 'History']}
          selectedIndex={active}
          onTabPress={setActive}
          borderRadius={0}
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
          ) : filteredOrdersUpcoming(ordersUpcoming).length > 0 ? (
            filteredOrdersUpcoming(ordersUpcoming)
              .sort(
                (a, b) =>
                  moment(b.createdAt).unix() - moment(a.createdAt).unix()
              )
              .map((ocitem, ocindex) => {
                return (
                  <AppoinmentCard
                    onAccept={(id) => {
                      acceptOrder(id, ocitem);
                    }}
                    onCancel={(id) => {
                      cancelOrder(id, ocitem);
                    }}
                    acceptedLoading={acceptedLoading}
                    canceledLoading={loadingCanceled}
                    key={ocindex}
                    {...ocitem}
                    freelancer={profile.freelancer}
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
              .filter((oitem) => oitem)
              .sort(
                (a, b) =>
                  moment(b.createdAt).unix() - moment(a.createdAt).unix()
              )
              .map((oncitem, oncindex) => {
                let customerInfo = users.filter(
                  (csi) => csi.id === oncitem.orderedBy
                );
                if (
                  oncitem.acceptedBy === appData.uid &&
                  oncitem.ignoreFreelancer !== appData.uid
                ) {
                  return (
                    <AppoinmentCard
                      onAccept={(id) => {
                        acceptOrder(id);
                      }}
                      onDone={(total, id) => {
                        completeOrder(
                          total,
                          id,
                          oncitem.commissionRate,
                          oncitem
                        );
                      }}
                      onCancel={(id) => {
                        cancelOrder(id, oncitem);
                      }}
                      acceptedLoading={loadingBtn}
                      canceledLoading={loadingCanceled}
                      key={oncitem.orderedBy + oncindex}
                      {...oncitem}
                      csInfo={customerInfo && customerInfo[0]}
                      freelancer={profile.freelancer}
                    />
                  );
                }
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
          ) : (
            ordersCompleted
              .filter((item) => item.acceptedBy === appData.uid)
              .sort(
                (a, b) =>
                  moment(b.createdAt).unix() - moment(a.createdAt).unix()
              )
              .map((ocitem, ocindex) => {
                let customerInfo = users.filter(
                  (csi) => csi.id === ocitem.orderedBy
                );
                return (
                  <AppoinmentCard
                    onAccept={(id) => {
                      acceptOrder(id);
                    }}
                    loading={loadingBtn}
                    csInfo={
                      customerInfo &&
                      customerInfo[0] && {
                        firstName: customerInfo[0].firstName,
                        lastName: customerInfo[0].lastName,
                      }
                    }
                    key={ocitem.orderedBy + ocindex}
                    {...ocitem}
                  />
                );
              })
          )}
        </View>
      )}
    </AuthenticatedLayout>
  );
};

const appointmentscreenStyles = StyleSheet.create({
  tabsContainerStyle: {
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  tabStyle: {
    borderWidth: 0,
    height: 40,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: colors.primary,
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

export default CustomersScreens;
