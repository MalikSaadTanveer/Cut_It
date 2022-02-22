import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import AuthenticatedLayout from '../components/AuthenticatedLayout';
import {
  Button,
  FlatCollapsible,
  HorizontalLine,
  ImageUploader,
  InputDateTime,
  InputFlat,
  Title,
} from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
// import firebase3 from '../utils/fbConfig';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const updateValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is Required.'),
  lastName: yup.string().required('Last name is Required.'),
  dob: yup.string().required('Date of birth is required'),
  phone: yup
    .string()
    .typeError('Phone number you have typed is not valid.')
    .matches(phoneRegExp, 'Please type valid phone number')
    .required('Phone is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

const UpdateCustomer = (props) => {
  const appData = useSelector((state) => state.appStore);
  const [loading, setLoading] = useState(false);

  const updateCustomerProfile = (values) => {
    setLoading(true);

    Alert.alert('Are you sure?', 'You are going to update your profile.', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          firebase
            .updateProfile(values)
            .then(() => {
              Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Congratulations!',
                text2: 'You profile has been updated successfully.',
                autoHide: true,
                bottomOffset: 20,
              });
              setLoading(false);
            })
            .catch((err) => {
              Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Sorry!',
                text2: err.message,
                autoHide: true,
                bottomOffset: 20,
              });
              setLoading(false);
            });
        },
      },
    ]);
  };

  const resetPassword = () => {
    Alert.alert('Are you sure?', 'Are you sure to reset your password?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          firebase
            .resetPassword(profile.email)
            .then(function () {
              Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Success!',
                text2: 'Please check your email for the password reset link.',
                autoHide: true,
                bottomOffset: 20,
              });
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
        },
      },
    ]);
  };

  const deleteAccount = () => {
    const storageRef = firebase.storage().ref();
    const theFolder =
      profile.firstName.toLowerCase() + profile.lastName.toLowerCase();
    firestore
      .collection('users')
      .doc(auth.uid)
      .delete()
      .then((r) => {
        firebase3
          .auth()
          .currentUser.delete()
          .then(() => {
            Toast.show({
              type: 'success',
              position: 'bottom',
              text1: 'Ops!',
              text2: `Your account has been deleted.`,
              autoHide: true,
              bottomOffset: 20,
            });
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
      });
  };

  return (
    <AuthenticatedLayout
      title='Customer'
      pagename='Edit Account'
      showLoader={false}
      showBack
    >
      <View style={updatecustomerStyles.loginContainer}>
        <Formik
          validationSchema={updateValidationSchema}
          initialValues={{
            firstName: "XYZ",
            lastName: "RAza",
            dob: "",
            phone: "profile.phone ? profile.phone : ''",
            email: "xyz@gmail.com",
            street: "xyz",
            unit: "dsd",
            city: "asas",
            state: "USA",
            zip: "644433",
            country: "ADHHSH",
          }}
          onSubmit={updateCustomerProfile}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            validateField,
          }) => (
            <>
              <InputFlat
                name='firstName'
                label='First Name'
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                error={errors.firstName}
              />
              <HorizontalLine block mb mt />
              <InputFlat
                name='lastName'
                label='Last Name'
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                error={errors.lastName}
              />
              <HorizontalLine block mb mt />
              <InputDateTime
                name='dob'
                label='Date of birth'
                mode='date'
                onChangeText={handleChange('dob')}
                onBlur={handleBlur('dob')}
                value={values.dob}
                error={errors.dob}
              />
              <HorizontalLine block mb mt style={{ marginTop: 10 }} />
              <InputFlat
                name='phone'
                label='Phone Number'
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                error={errors.phone}
                keyboardType='phone-pad'
              />
              <HorizontalLine block mb mt />

              <InputFlat
                name='email'
                label='Email Address'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
                error={errors.email}
              />

              <HorizontalLine block mb20 mt20>
                Address
              </HorizontalLine>

              <View style={[updatecustomerStyles.formRow]}>
                <View style={updatecustomerStyles.formColumn70}>
                  <InputFlat
                    small
                    name='street'
                    label='Street'
                    onChangeText={handleChange('street')}
                    onBlur={handleBlur('street')}
                    value={values.street}
                    error={errors.street}
                  />
                </View>
                <View style={updatecustomerStyles.formColumn30}>
                  <InputFlat
                    small
                    name='unit'
                    label='Unit/Flat'
                    onChangeText={handleChange('unit')}
                    onBlur={handleBlur('unit')}
                    value={values.unit}
                    error={errors.unit}
                  />
                </View>
              </View>

              <View style={updatecustomerStyles.formRow}>
                <View style={updatecustomerStyles.formColumn}>
                  <InputFlat
                    small
                    name='city'
                    label='City'
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                    error={errors.city}
                  />
                </View>
                <View style={updatecustomerStyles.formColumn}>
                  <InputFlat
                    small
                    name='state'
                    label='Province'
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    value={values.state}
                    error={errors.state}
                  />
                </View>
              </View>

              <View style={updatecustomerStyles.formRow}>
                <View style={updatecustomerStyles.formColumn30}>
                  <InputFlat
                    small
                    name='zip'
                    label='Postal Code'
                    onChangeText={handleChange('zip')}
                    onBlur={handleBlur('zip')}
                    value={values.zip}
                    error={errors.zip}
                  />
                </View>
                <View style={updatecustomerStyles.formColumn70}>
                  <InputFlat
                    small
                    name='country'
                    label='Country'
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    value={values.country}
                    error={errors.country}
                  />
                </View>
              </View>
              {!profile.provider && (
                <View style={{ marginTop: 20 }}>
                  <Button primary block medium onPress={resetPassword}>
                    Reset Password
                  </Button>
                </View>
              )}

              <View>
                <Button
                  block
                  outlined
                  outlinedRed
                  onPress={() => {
                    Alert.alert(
                      'Are you sure?',
                      'Once you delete your account you cannot sign in again without re register.',
                      [
                        {
                          text: 'Cancel',
                          style: 'cancel',
                        },
                        {
                          text: 'Yes',
                          onPress: () => {
                            deleteAccount();
                          },
                        },
                      ]
                    );
                  }}
                >
                  Delete account
                </Button>
              </View>
              <Button
                primary
                block
                medium
                loading={loading}
                onPress={handleSubmit}
              >
                Update Profile
              </Button>
            </>
          )}
        </Formik>
      </View>
    </AuthenticatedLayout>
  );
};

const updatecustomerStyles = StyleSheet.create({
  loginContainer: {
    padding: 30,
  },
  logo: {
    marginTop: '5%',
    height: '40%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formRow: {
    flexDirection: 'row',
  },
  formRowPadding: {
    flexDirection: 'column',
    paddingLeft: 5,
    paddingRight: 5,
  },
  settingsBtn: {
    width: '49%',
  },
  formColumn: {
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
});

export default UpdateCustomer;
