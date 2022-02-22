import React, { useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import {
  Button,
  Input,
  InputDateTime,
  Title,
} from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

const registerValidationSchema = yup.object().shape({
  dob: yup.string().required('Date of birth is Required'),
});

const CCAccAgeScreen = (props) => {
  const rform = useSelector((state) => state.formStore);
  const dispatch = useDispatch();

  const registerFreelancer = (values) => {
    // console.log('log-values', values);
    updateFormData('ADDTO', {
      customerRegisterForm: {
        ...rform.customerRegisterForm,
        ...values,
      },
    }).then(() => {
      props.navigation.navigate('CCAccContactScreen');
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
      <View style={ccaccagescreenStyles.loginContainer}>
        <View>
          <Title h1 bold center primary>
            Date of Birth
          </Title>

          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{ dob: '' }}
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
                <InputDateTime
                  name='dob'
                  mode='date'
                  //label='Date of birth'
                  onChangeText={handleChange('dob')}
                  onBlur={handleBlur('dob')}
                  value={values.dob}
                  error={errors.dob}
                />
                <Button margin primary block large onPress={handleSubmit}>
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

const ccaccagescreenStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
});

export default CCAccAgeScreen;
