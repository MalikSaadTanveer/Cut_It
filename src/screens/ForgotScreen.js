import React, { useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import { Button, Input, Title } from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
// import { useFirebase } from 'react-redux-firebase';

const forgotValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

const ForgotScreen = (props) => {
  const firebase = useFirebase();

  const sendResetPasswordLink = (values) => {
    console.log('log-values', values);
    firebase
      .resetPassword(values.email)
      .then(function () {
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success!',
          text2: 'Please check your email for the password reset link.',
          autoHide: true,
          bottomOffset: 20,
        });
        props.navigation.goBack();
      })
      .catch(function (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Sorry!',
          text2: error.message,
          autoHide: true,
          bottomOffset: 20,
        });
      });
  };

  return (
    <PrimaryLayout leftContainer title='FORGOT PASSWORD'>
      <View style={ccaccnamescreenStyles.loginContainer}>
        <View>
          <Title h1 bold center primary>
            Your Email
          </Title>
          <Formik
            validationSchema={forgotValidationSchema}
            initialValues={{ email: '' }}
            onSubmit={sendResetPasswordLink}
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
                  label='Type your email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email}
                  keyboardType='email-address'
                />
                <Button primary block medium onPress={handleSubmit}>
                  Send Reset Email
                </Button>
              </>
            )}
          </Formik>
        </View>
      </View>
    </PrimaryLayout>
  );
};

const ccaccnamescreenStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});

export default ForgotScreen;
