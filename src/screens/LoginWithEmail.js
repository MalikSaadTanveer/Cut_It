import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import { Button, Input, Title, FlatButton } from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
// import { useFirebase, useFirestore } from 'react-redux-firebase';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
// import messaging from '@react-native-firebase/messaging';
import RNLocation from 'react-native-location';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const LoginWithEmail = (props) => {
  const [loading, setLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState('');
  const [location, setLocation] = useState({});
  const firebase = useFirebase();
  const firestore = useFirestore();

  useEffect(() => {
    requestUserPermission();
    handleLocation();
    return () => requestUserPermission();
  }, [location]);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      let token = await messaging().getToken();
      setDeviceToken(token);
    }
  };

  const loginUser = async (values) => {
    setLoading(true);
    firebase
      .login(values)
      .then(async (resp) => {
        // console.log('log-profile', resp.user.user.uid);
        await firestore.collection('users').doc(resp.user.user.uid).set(
          {
            pushToken: deviceToken,
            coords: location,
          },
          { merge: true }
        );
        props.navigation.navigate('Profile');
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Sorry!',
          text2: err.message,
          autoHide: true,
          bottomOffset: 20,
        });
      });
  };

  const handleLocation = () => {
    RNLocation.getLatestLocation({ timeout: 60000 }).then((latestLocation) => {
      setLocation((prev) => ({
        ...prev,
        longitude: latestLocation ? latestLocation.longitude : -123.1207,
        latitude: latestLocation ? latestLocation.latitude : 49.2827,
      }));
    });
  };

  return (
    <PrimaryLayout leftContainer title='Login with Email'>
      <View style={loginStyles.loginContainer}>
        <View>
          <Title h1 bold center primary>
            EMAIL AND PASSWORD
          </Title>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={loginUser}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <Input
                  name='email'
                  label='Email Address'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                  error={errors.email}
                />
                <Input
                  name='password'
                  label='Password'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  error={errors.password}
                />
                <Button
                  primary
                  block
                  large
                  loading={loading}
                  onPress={handleSubmit}
                >
                  Sign In
                </Button>
                <View style={{ marginTop: -10 }}>
                  <FlatButton
                    small
                    onPress={() => {
                      props.navigation.navigate('ForgotScreen');
                    }}
                  >
                    Forgot Password?
                  </FlatButton>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </PrimaryLayout>
  );
};

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});

export default LoginWithEmail;
