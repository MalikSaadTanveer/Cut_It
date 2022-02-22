import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Alert,
} from 'react-native';
import AuthenticatedLayout from '../components/AuthenticatedLayout';
import { Button, Title } from '../components/ComponentItems';
import Logo from '../../assets/ProfilePic.jpg';
import { useSelector } from 'react-redux';
// import {
//   isEmpty,
//   isLoaded,
//   useFirebase,
//   useFirestoreConnect,
// } from 'react-redux-firebase';

import colors from '../utils/colors';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'react-native-image-picker';
import { Col, Grid, Row } from 'react-native-easy-grid';
import useLocation from '../utils/useLocation';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const AuthenticatedProfile = (props) => {
  const appData = useSelector((state) => state.appStore);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(props.value ? props.value : null);
  const [loadingImage, setLoadingImage] = useState(false);
  useFirestoreConnect([
    {
      collection: 'settings',
      doc: 'xyqAFk9BFdmmFYRqtiUQ',
    },
    {
      collection: 'orders',
      where: [
        ['acceptedBy', '==', appData.uid],
        ['status', '==', 'confirmed'],
      ],
      storeAs: 'freelancerOrders',
    },
  ]);
  const profile = useSelector(({ firebase: { profile } }) => profile);
  const settings = useSelector((state) => state.firestore.ordered.settings);
  const freelancerOrders = useSelector(
    (state) => state.firestore.ordered.freelancerOrders
  );
  //console.log('log-freelancerOrders', freelancerOrders);
  const modalizeRef = useRef(null);

  useEffect(() => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  }, []);

  const pickImage = async () => {
    const storageRef = firebase.storage().ref();

    ImagePicker.launchImageLibrary(
      {
        title: 'Select Image',
        type: 'library',
        options: {
          mediaType: 'photo',
          includeBase64: false,
        },
        quality: 0.4,
      },
      async (result) => {
        if (!result.didCancel) {
          setLoading(true);
          let imageext = result.uri.split('.').pop();
          let uploadpath =
            'userdocs/' +
            `${profile.firstName.toLowerCase()}${profile.lastName.toLowerCase()}` +
            '/';
          let imagename = profile.uid + '.' + imageext;
          const response = await fetch(result.uri);
          const blob = await response.blob();
          blob._data.name = imagename;
          let uploadTask = storageRef.child(uploadpath + imagename).put(blob);

          uploadTask.on(
            'state_changed',
            (snapshot) => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              if (progress === 100) {
                setLoading(false);
              }
            },
            (error) => {
              Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Ops!',
                text2: error.message,
                autoHide: true,
                bottomOffset: 20,
              });
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                setImage(downloadURL);
                firebase.updateProfile({
                  profilePic: downloadURL,
                });
              });
            }
          );
        }
      }
    );
  };

  const calculateFreelancerWeeklyBalance = (orders) => {
    const today = moment();
    let weekStart = today.clone().startOf('isoWeek');
    let weekEnd = today.clone().endOf('isoWeek');

    let weekly = orders.reduce((results, oritem) => {
      if (moment(oritem.createdAt).isBetween(weekStart, weekEnd)) {
        results.push(oritem);
      }
      return results;
    }, []);

    let total = weekly.reduce(
      (accumulator, current) => accumulator + current.freelancerBalance,
      0
    );
    return total;
  };
  return (
    <AuthenticatedLayout pagename={`profile`}>
      <View style={authenticatedprofileStyles.mainProfileContainer}>
        <View style={authenticatedprofileStyles.profileContainer}>
          <Grid>
            <Row>
              <Col size={35}>
                <TouchableOpacity onPress={pickImage}>
                  <View style={authenticatedprofileStyles.imageContainer}>
                    {loading ? (
                      <View
                        style={{
                          top: '40%',
                          left: '40%',
                          position: 'absolute',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <ActivityIndicator color={colors.primary} />
                      </View>
                    ) : (
                      <Image
                        source={
                          profile.profilePic
                            ? { uri: profile.profilePic }
                            : Logo
                        }
                        style={authenticatedprofileStyles.logo}
                        borderRadius={30}
                        borderBottomRightRadius={0}
                        borderTopLeftRadius={0}
                      />
                    )}
                    {!profile.profilePic && (
                      <Title bold primary center>
                        +
                      </Title>
                    )}
                  </View>
                </TouchableOpacity>
              </Col>
              <Col size={55}>
                <Title xlFont>
                  {profile.firstName
                    ? profile.firstName + ' ' + profile.lastName
                    : ' '}
                </Title>

                {profile.email && <Title xlFont>{profile.email}</Title>}
                {profile.phone !== '' && <Title xlFont>{profile.phone}</Title>}
                {profile.dob && (
                  <Title xlFont>
                    {moment(profile.dob, 'MM-DD-YYYY HH:mm:ss a').format(
                      'DD-MM-YYYY'
                    )}
                  </Title>
                )}
                {profile.freelancer && (
                  <Title xlFont>
                    Account Status: {profile.active ? 'Active' : 'Not Active'}
                  </Title>
                )}
                <Title xlFont>
                  Created At: {moment(profile.createdAt).format('DD-MM-YYYY')}
                </Title>
              </Col>
            </Row>
          </Grid>
        </View>
      </View>

      <View style={authenticatedprofileStyles.loginContainer}>
        {profile.freelancer && !profile.active && profile.deactivatedReason && (
          <View style={{ marginBottom: 10, marginTop: -100, padding: 10 }}>
            <Title center canceled h4>
              {profile.deactivatedReason}
            </Title>
          </View>
        )}

        <Button
          outlined
          block
          medium
          onPress={() => {
            props.navigation.navigate(
              profile.customer ? 'UpdateCustomer' : 'UpdateFreelancer'
            );
          }}
        >
          Edit Account
        </Button>
        <Button
          primary
          medium
          block
          onPress={() => {
            Alert.alert('Are you Sure?', 'You want to logout?', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              { text: 'Yes', onPress: () => firebase.logout() },
            ]);
          }}
        >
          Logout
        </Button>
      </View>
      {isLoaded(profile) && !isEmpty(profile) && profile.freelancer && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.veryLightGrey,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Title h3>Total balance</Title>
            <Title h3>
              {isLoaded(freelancerOrders) &&
              !isEmpty(freelancerOrders) &&
              calculateFreelancerWeeklyBalance(freelancerOrders) > 0
                ? calculateFreelancerWeeklyBalance(freelancerOrders)
                : 0}{' '}
              CAD
            </Title>
          </View>
          <Title h5 darkGray>
            {isLoaded(settings) && settings[0] ? settings[0].paymentCycle : 0}{' '}
            days
          </Title>
        </View>
      )}
    </AuthenticatedLayout>
  );
};

const authenticatedprofileStyles = StyleSheet.create({
  loginContainer: {
    flex: 2,
    padding: 20,

    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  mainProfileContainer: {
    alignSelf: 'flex-start',
    margin: 20,
    backgroundColor: '#fff7f8',
    width: '90%',
    padding: 15,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,

    ...Platform.select({
      ios: {
        shadowColor: colors.veryDarkGrey,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
      },
    }),
  },
  profileContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: colors.backgroundWhite,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,

    ...Platform.select({
      ios: {
        shadowColor: colors.veryDarkGrey,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        borderWidth: 0.5,
        borderColor: colors.lightGrey,
      },
    }),

    width: screenWidth / 3.5,
    height: screenWidth / 3.5,
  },
  titleContainer: {
    paddingLeft: 20,
  },
});

export default AuthenticatedProfile;
