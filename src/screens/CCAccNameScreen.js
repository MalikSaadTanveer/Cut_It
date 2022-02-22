import React, { useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import { Button, Input, Title } from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

const registerValidationSchema = yup.object().shape({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Last Name is Required'),
});

const CCAccNameScreen = (props) => {
  const rform = useSelector((state) => state.formStore);
  const dispatch = useDispatch();

  const registerFreelancer = (values) => {
    // console.log('log-values', values);
    updateFormData('ADDTO', {
      customerRegisterForm: values,
    }).then(() => {
      props.navigation.navigate('CCAccAgeScreen');
    });
  };

  const updateFormData = (action, payload) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: action,
        payload: payload,
      });
      resolve();
    });
  };

  return (
    <PrimaryLayout leftContainer title='REGISTER'>
      <View style={ccaccnamescreenStyles.loginContainer}>
        <View>
          <Title h1 bold center primary>
            FULL NAME
          </Title>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{ firstName: '', lastName: '' }}
            onSubmit={registerFreelancer}
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
                  name='firstName'
                  label='First Name'
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  error={errors.firstName}
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  error={errors.lastName}
                />
                <Button primary block large onPress={handleSubmit}>
                  Next
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

export default CCAccNameScreen;
