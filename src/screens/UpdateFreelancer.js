import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import AuthenticatedLayout from '../components/AuthenticatedLayout';
import {
  Button,
  HorizontalLine,
  ImageUploader,
  InputDateTime,
  InputFlat,
  Title,
} from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
import colors from '../utils/colors';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
// import firebase2 from '../utils/fbConfig';

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
  issuedId: yup.string().required('You must select issued ID'),
  sinCard: yup.string().required('You must select SIN Card'),
  bankAccountNumber: yup
    .number()
    .required('You must type your bank account number.'),
  bankAccountName: yup
    .string()
    .required('You must type your bank account name.'),
  bankTransitNumber: yup
    .string()
    .required('You must type your bank account name.'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  picOfEquipment: yup
    .string()
    .required('You must upload Picture of equipment.'),
});

const UpdateFreelancer = (props) => {
  const profile = useSelector(({ firebase: { profile } }) => profile);
  const appData = useSelector((state) => state.appStore);
  const [loading, setLoading] = useState(false);

  const updateFreelancerProfile = (values) => {
    setLoading(true);

    firebase
      .updateProfile(values)
      .then((resp) => {
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
  };

  const resetPassword = () => {
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
  };

  const pauseAccount = (paused) => {
    Alert.alert(
      'Are you sure?',
      'You cannot get the bookings and the orders when you deactivate your account.',
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Yes',
          onPress: () => {
            firebase
              .updateProfile({ active: !paused })
              .then((resp) => {
                Toast.show({
                  type: 'success',
                  position: 'bottom',
                  text1: 'Congratulations!',
                  text2: `You profile has been ${
                    paused ? 'paused' : 'activated'
                  }.`,
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
      ]
    );
  };

  const deleteAccount = () => {
    firestore
      .collection('users')
      .doc(appData.uid)
      .delete()
      .then((r) => {
        firebase2
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
            console.log('log-error', error);
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
      title='Freelancer'
      pagename='Edit Account'
    >
      <View style={freelancerregisterStyles.loginContainer}>
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
          onSubmit={updateFreelancerProfile}
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
              <View style={freelancerregisterStyles.row}>
                <View style={freelancerregisterStyles.checkBoxRow}>
                  <ImageUploader
                    onValidateForm={() => {
                      validateField('firstName');
                      validateField('lastName');
                    }}
                    name='issuedId'
                    label='Government ID'
                    initialPath='userdocs/'
                    filepath={
                      values.firstName &&
                      values.lastName &&
                      `${values.firstName.toLowerCase()}${values.lastName.toLowerCase()}`
                    }
                    onChangeText={handleChange('issuedId')}
                    value={values.issuedId}
                    error={errors.issuedId}
                  />
                </View>
                <HorizontalLine vertical />
                <View style={freelancerregisterStyles.checkBoxRow}>
                  <ImageUploader
                    onValidateForm={() => {
                      validateField('firstName');
                      validateField('lastName');
                    }}
                    name='sinCard'
                    label='SIN Card'
                    initialPath='userdocs/'
                    filepath={
                      values.firstName &&
                      values.lastName &&
                      `${values.firstName.toLowerCase()}${values.lastName.toLowerCase()}`
                    }
                    onChangeText={handleChange('sinCard')}
                    value={values.sinCard}
                    error={errors.sinCard}
                  />
                </View>
              </View>
              <View>
                <Title center style={{ color: colors.lightGrey }}>
                  National ID, passport, driving license
                </Title>
              </View>
              <HorizontalLine block mb mt />
              <InputFlat
                name='pastExperiences'
                label='Past Experiences'
                onChangeText={handleChange('pastExperiences')}
                onBlur={handleBlur('pastExperiences')}
                value={values.pastExperiences}
                error={errors.pastExperiences}
                numberOfLines={9}
                editable
                multiline
              />
              <HorizontalLine block mt mb style={{ marginTop: 10 }} />
              <InputFlat
                name='bankAccountNumber'
                label='Bank Account number'
                onChangeText={handleChange('bankAccountNumber')}
                onBlur={handleBlur('bankAccountNumber')}
                value={values.bankAccountNumber}
                error={errors.bankAccountNumber}
                keyboardType='numeric'
              />
              <InputFlat
                name='bankAccountName'
                label='Bank Account Name or Institution Number'
                onChangeText={handleChange('bankAccountName')}
                onBlur={handleBlur('bankAccountName')}
                value={values.bankAccountName}
                error={errors.bankAccountName}
              />
              <InputFlat
                name='bankTransitNumber'
                label='Bank Transit Number'
                onChangeText={handleChange('bankTransitNumber')}
                onBlur={handleBlur('bankTransitNumber')}
                value={values.bankTransitNumber}
                error={errors.bankTransitNumber}
              />
              <HorizontalLine block mb mt>
                Or
              </HorizontalLine>
              <View>
                <ImageUploader
                  horizontal
                  lightLabel
                  onValidateForm={() => {
                    validateField('firstName');
                    validateField('lastName');
                  }}
                  name='bankInfoDoc'
                  label='Upload photo of your Bank Info'
                  initialPath='userdocs/'
                  filepath={
                    values.firstName &&
                    values.lastName &&
                    `${values.firstName.toLowerCase()}${values.lastName.toLowerCase()}`
                  }
                  onChangeText={handleChange('bankInfoDoc')}
                  value={values.bankInfoDoc}
                  error={errors.bankInfoDoc}
                />
              </View>
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
              <HorizontalLine block mb mt />
              <View style={{ marginBottom: 20 }}>
                <ImageUploader
                  onValidateForm={() => {
                    validateField('firstName');
                    validateField('lastName');
                  }}
                  name='picOfEquipment'
                  label='Upload Picture of equipment'
                  initialPath='userdocs/'
                  filepath={
                    values.firstName &&
                    values.lastName &&
                    `${values.firstName.toLowerCase()}${values.lastName.toLowerCase()}`
                  }
                  onChangeText={handleChange('picOfEquipment')}
                  value={values.picOfEquipment}
                  error={errors.picOfEquipment}
                />
              </View>
              {!profile.provider && (
                <View style={{ marginTop: 20 }}>
                  <Button primary block medium onPress={resetPassword}>
                    Reset Password
                  </Button>
                </View>
              )}

              {profile.active && (
                <View style={freelancerregisterStyles.updateInfoRow}>
                  <View style={freelancerregisterStyles.settingsBtn}>
                    <Button
                      outlined
                      outlinedOrange
                      onPress={() => {
                        pauseAccount(!profile.paused);
                      }}
                    >
                      {!profile.paused
                        ? 'Pause account'
                        : 'Re Activate Account'}
                    </Button>
                  </View>
                  <View style={freelancerregisterStyles.settingsBtn}>
                    <Button
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
                            { text: 'Yes', onPress: () => deleteAccount() },
                          ]
                        );
                      }}
                    >
                      Delete account
                    </Button>
                  </View>
                </View>
              )}

              <Button
                primary
                block
                medium
                loading={loading}
                onPress={handleSubmit}
                style={{ paddingTop: -40 }}
              >
                Save Profile
              </Button>
            </>
          )}
        </Formik>
      </View>
    </AuthenticatedLayout>
  );
};

const freelancerregisterStyles = StyleSheet.create({
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
    marginBottom: 35,
  },
  updateInfoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  checkBoxRow: {
    width: '50%',
  },
  settingsBtn: {
    width: '49%',
  },
});

export default UpdateFreelancer;
