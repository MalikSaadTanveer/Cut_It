import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthenticatedLayout from '../components/AuthenticatedLayout';
import {
  Button,
  HorizontalLine,
  ImageUploader,
  InputDateTime,
  InputFlat,
  Title,
} from '../components/ComponentItems';
// import { useFirebase } from 'react-redux-firebase';
import { Formik } from 'formik';
import * as yup from 'yup';
import colors from '../utils/colors';
import Toast from 'react-native-toast-message';
// import messaging from '@react-native-firebase/messaging';
import { CheckBox } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import moment from 'moment';
import mail from '../utils/mail';
import RNLocation from 'react-native-location';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerValidationSchema = yup.object().shape({
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
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  picOfEquipment: yup
    .string()
    .required('You must upload Picture of equipment.'),
  terms: yup
    .bool()
    .oneOf([true], 'You must read and agree with our terms of services.'),
});

const FreelancerRegister = (props) => {
  const [loading, setLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState('');
  const [location, setLocation] = useState({});
  const firebase = useFirebase();

  const modalizeRef = useRef(null);

  useEffect(() => {
    requestUserPermission();
    handleLocation();
  }, []);

  const handleLocation = () => {
    RNLocation.getLatestLocation({ timeout: 60000 }).then((latestLocation) => {
      setLocation((prev) => ({
        ...prev,
        longitude: latestLocation ? latestLocation.longitude : -123.1207,
        latitude: latestLocation ? latestLocation.latitude : 49.2827,
      }));
    });
  };

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      let token = await messaging().getToken();
      console.log(token);
      setDeviceToken(token);
    }
  };

  const randomString = (length = 20) => {
    let chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  const registerFreelancer = (values) => {
    setLoading(true);

    let profileData = (object, keys) =>
        keys.reduce((o, k) => {
          const { [k]: _, ...p } = o;
          return p;
        }, object),
      keys = ['password', 'passwordConfirmation'],
      profileDataresult = profileData(values, keys);

    profileDataresult.userId = randomString(10);
    profileDataresult.freelancer = true;
    profileDataresult.provider = false;
    profileDataresult.balance = 0;
    profileDataresult.usedCoupons = [];
    profileDataresult.coords = location;
    profileDataresult.active = false;
    profileDataresult.createdAt = moment().toISOString();
    profileDataresult.profilePic =
      'https://firebasestorage.googleapis.com/v0/b/nailzy-app.appspot.com/o/static%2FdefaultApp.png?alt=media&token=0cb4ff72-699d-4176-b079-49f9b08b8a24';
    profileDataresult.pushToken = deviceToken; // this will be the device token
    console.log('log-profileDataresult', profileDataresult);
    firebase
      .createUser(
        {
          email: values.email,
          password: values.password,
        },
        profileDataresult
      )
      .then((resp) => {
        mail(
          // 'andress0065@gmail.com', // dev
          'nailzi.services@gmail.com', // live
          'Admin',
          'Nailzi - A new freelancer has sent a new request.',
          '<div><strong>Hi Admin</strong>, <br/><br/> Please login into your Admin console in order to activate the new Freelancers account.<br/><br/><a href="www.nailzi.com/admin">Click here to login in to admin.</a> <br/><br/>Best Regards.</div>'
        );
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

  return (
    <AuthenticatedLayout title='Freelancer' pagename='Register' showBack>
      <View style={freelancerregisterStyles.loginContainer}>
        <Title h3 bold center primary>
          Fill all fields down below
        </Title>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            dob: '',
            phone: '',
            issuedId: '',
            sinCard: '',
            pastExperiences: '',
            bankAccountNumber: '',
            bankAccountName: '',
            bankTransitNumber: '',
            bankInfoDoc: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            picOfEquipment: '',
            nail: false,
            eyebrows: false,
            eyelash: false,
            waxing: false,
            terms: false,
          }}
          onSubmit={registerFreelancer}
          validateOnBlur={false}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
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
              <HorizontalLine block mb style={{ marginTop: 10 }} />
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
              <View style={{ marginBottom: 10 }}>
                <InputFlat
                  name='pastExperiences'
                  label='Past Experiences'
                  onChangeText={handleChange('pastExperiences')}
                  onBlur={handleBlur('pastExperiences')}
                  value={values.pastExperiences}
                  error={errors.pastExperiences}
                  numberOfLines={4}
                  multiline
                />
              </View>
              <HorizontalLine block mb mt20 />
              <InputFlat
                name='bankAccountNumber'
                label='Bank Account Number'
                onChangeText={handleChange('bankAccountNumber')}
                onBlur={handleBlur('bankAccountNumber')}
                value={values.bankAccountNumber}
                error={errors.bankAccountNumber}
                keyboardType='numeric'
                maxLength={7}
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
                keyboardType='numeric'
                maxLength={5}
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
                  label='Upload photo of Void check'
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
              <InputFlat
                name='password'
                label='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                error={errors.password}
              />
              <InputFlat
                name='passwordConfirmation'
                label='Confirm Password'
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
                value={values.passwordConfirmation}
                secureTextEntry
                error={errors.passwordConfirmation}
              />
              <HorizontalLine block mb mt />

              <View style={freelancerregisterStyles.row}>
                <View style={freelancerregisterStyles.checkBoxRow}>
                  <CheckBox
                    name='nail'
                    title='Nail art'
                    checked={values.nail}
                    onPress={(nextValue) => {
                      setFieldValue('nail', !values.nail);
                    }}
                    containerStyle={freelancerregisterStyles.CheckBoxContainer}
                  />
                  <CheckBox
                    name='eyebrows'
                    title='Eyebrows'
                    checked={values.eyebrows}
                    onPress={(nextValue) => {
                      setFieldValue('eyebrows', !values.eyebrows);
                    }}
                    containerStyle={freelancerregisterStyles.CheckBoxContainer}
                  />
                </View>
                <HorizontalLine vertical />
                <View style={freelancerregisterStyles.checkBoxRow}>
                  <CheckBox
                    name='eyelash'
                    title='Eyelash'
                    checked={values.eyelash}
                    onPress={(nextValue) => {
                      setFieldValue('eyelash', !values.eyelash);
                    }}
                    containerStyle={freelancerregisterStyles.CheckBoxContainer}
                  />
                  <CheckBox
                    name='waxing'
                    title='Waxing'
                    checked={values.waxing}
                    onPress={(nextValue) => {
                      setFieldValue('waxing', !values.waxing);
                    }}
                    containerStyle={freelancerregisterStyles.CheckBoxContainer}
                  />
                </View>
              </View>
              <Title center style={{ color: colors.lightGrey }}>
                Which services can you provide ?
              </Title>
              <HorizontalLine block mb mt />
              <View>
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
              <CheckBox
                title='I agree to Nailzi Terms of Service and Privacy Policy '
                checked={values.terms}
                containerStyle={freelancerregisterStyles.lastCheckBoxContainer}
                onPress={() => {
                  setFieldValue('terms', !values.terms, true);
                  if (!values.terms) {
                    modalizeRef.current.open();
                  }
                }}
              />
              {errors.terms && (
                <Text
                  style={{
                    color: colors.canceled,
                    marginBottom: 15,
                    fontSize: 10,
                  }}
                >
                  {errors.terms}
                </Text>
              )}
              <Button
                primary
                block
                medium
                loading={loading}
                onPress={handleSubmit}
              >
                Freelancer Sign Up
              </Button>
            </>
          )}
        </Formik>
      </View>
      <Portal>
        <Modalize modalTopOffset={50} ref={modalizeRef}>
          <View style={{ padding: 10, flex: 1 }}>
            <Title h3 m25 center bold>
              Freelancer Terms of condition
            </Title>
            <Title h4 m25 justify>
              These Terms of Use (“Terms”) govern the access or use by you, an
              individual, from within any country in the world (excluding the
              United States and its territories and possessions and Mainland
              China) of applications, websites, content, products, and services
              (the “Services”) made available by Nailzi Inc. a private limited
              liability company established in Canada, having its office in
              Milton , ON , Canada. PLEASE READ THESE TERMS CAREFULLY BEFORE
              ACCESSING OR USING THE SERVICES. Your access and use of the
              Services constitutes your agreement to be bound by these Terms,
              which establishes a contractual relationship between you and
              Nailzi. If you do not agree to these Terms, you may not access or
              use the Services. These Terms expressly supersede prior agreements
              or arrangements with you. Nailzi may immediately terminate these
              Terms or any Services with respect to you, or generally cease
              offering or deny access to the Services or any portion thereof, at
              any time for any reason. Supplemental terms may apply to certain
              Services, such as policies for a particular event, activity or
              promotion, and such supplemental terms will be disclosed to you in
              connection with the applicable Services. Supplemental terms are in
              addition to, and shall be deemed a part of, the Terms for the
              purposes of the applicable Services. Supplemental terms shall
              prevail over these Terms in the event of a conflict with respect
              to the applicable Services. Nailzi may amend the Terms related to
              the Services from time to time. Amendments will be effective upon
              Nailzi’s posting of such updated Terms at this location or the
              amended policies or supplemental terms on the applicable Service.
              Your continued access or use of the Services after such posting
              constitutes your consent to be bound by the Terms, as amended. Our
              collection and use of personal information in connection with the
              Services is as provided in Nailzi’s Privacy Policy located at
              https://www.Nailzi.com/privacy/notice. Nailzi may provide to a
              claims processor or an insurer any necessary information
              (including your contact information) if there is a complaint,
              dispute or conflict, which may include an accident, involving you
              and a Third Party Provider (including a Beauty services network
              company driver) and such information or data is necessary to
              resolve the complaint, dispute or conflict.
            </Title>
            <Title h3 m25 bold>
              The Services:
            </Title>
            <Title h4 m25 justify>
              The Services constitute a technology platform that enables users
              of Nailzi’s mobile applications or websites provided as part of
              the Services (each, an “Application”) to arrange and schedule
              beauty services and/or health services with independent third
              party providers of such services, including independent third
              party beauty services providers and independent third party
              grooming providers under agreement with Nailzi or certain of
              Nailzi’s affiliates (“Third Party Providers”). Unless otherwise
              agreed by Nailzi in a separate written agreement with you, the
              Services are made available solely for your personal,
              noncommercial use. YOU ACKNOWLEDGE THAT NAILZI DOES NOT PROVIDE
              BEAUTY OR GROOMING SERVICES OR FUNCTION AS A BEAUTY SALON AND THAT
              ALL SUCH BEAUTY OR GROOMING SERVICES ARE PROVIDED BY INDEPENDENT
              THIRD PARTY CONTRACTORS WHO ARE NOT EMPLOYED BY NAILZI OR ANY OF
              ITS AFFILIATES. License. Subject to your compliance with these
              Terms, Nailzi grants you a limited, non-exclusive,
              non-sublicensable, revocable, non-transferrable license to: (i)
              access and use the Applications on your personal device solely in
              connection with your use of the Services; and (ii) access and use
              any content, information and related materials that may be made
              available through the Services, in each case solely for your
              personal, noncommercial use. Any rights not expressly granted
              herein are reserved by Nailzi and Nailzi’s licensors.
              Restrictions. You may not: (i) remove any copyright, trademark or
              other proprietary notices from any portion of the Services; (ii)
              reproduce, modify, prepare derivative works based upon,
              distribute, license, lease, sell, resell, transfer, publicly
              display, publicly perform, transmit, stream, broadcast or
              otherwise exploit the Services except as expressly permitted by
              Nailzi; (iii) decompile, reverse engineer or disassemble the
              Services except as may be permitted by applicable law; (iv) link
              to, mirror or frame any portion of the Services; (v) cause or
              launch any programs or scripts for the purpose of scraping,
              indexing, surveying, or otherwise data mining any portion of the
              Services or unduly burdening or hindering the operation and/or
              functionality of any aspect of the Services; or (vi) attempt to
              gain unauthorized access to or impair any aspect of the Services
              or its related systems or networks. Provision of the Services. You
              acknowledge that portions of the Services may be made available
              under Nailzi’s various brands or request options associated with
              Beauty services or grooming, including the Beauty services request
              brands currently referred to as “Nailzi,” “NailziPOP,” “NailziX,”
              “NailziXL,” “NailziBLACK,” “NailziSUV,” “NailziBERLINE,”
              “NailziVAN,” “NailziEXEC,” and “NailziLUX” and the GROOMING
              request brands currently referred to as “NailziRUSH,”
              “NailziFRESH” and “NailziEATS”. You also acknowledge that the
              Services may be made available under such brands or request
              options by or in connection with: (i) certain of Nailzi’s
              subsidiaries and affiliates; or (ii) independent Third Party
              Providers, including Beauty services network company drivers,
              Beauty services charter permit holders or holders of similar
              Beauty services permits, authorizations or licenses. Third Party
              Services and Content. The Services may be made available or
              accessed in connection with third party services and content
              (including advertising) that Nailzi does not control. You
              acknowledge that different terms of use and privacy policies may
              apply to your use of such third party services and content. Nailzi
              does not endorse such third party services and content and in no
              event shall Nailzi be responsible or liable for any products or
              services of such third party providers. Additionally, Apple Inc.,
              Google, Inc., Microsoft Corporation or BlackBerry Limited and/or
              their applicable international subsidiaries and affiliates will be
              third-party beneficiaries to this contract if you access the
              Services using Applications developed for Apple iOS, Android,
              Microsoft Windows, or Blackberry-powered mobile devices,
              respectively. These third party beneficiaries are not parties to
              this contract and are not responsible for the provision or support
              of the Services in any manner. Your access to the Services using
              these devices is subject to terms set forth in the applicable
              third party beneficiary’s terms of service. Ownership. The
              Services and all rights therein are and shall remain Nailzi’s
              property or the property of Nailzi’s licensors. Neither these
              Terms nor your use of the Services convey or grant to you any
              rights: (i) in or related to the Services except for the limited
              license granted above; or (ii) to use or reference in any manner
              Nailzi’s company names, logos, product and service names,
              trademarks or services marks or those of Nailzi’s licensors.
            </Title>
            <Title h3 m25 bold>
              Your Use of the Services:
            </Title>
            <Title h4 m25 justify>
              User Accounts. In order to use most aspects of the Services, you
              must register for and maintain an active personal user Services
              account (“Account”). You must be at least 18 years of age, or the
              age of legal majority in your jurisdiction (if different than 18),
              to obtain an Account. Account registration requires you to submit
              to Nailzi certain personal information, such as your name,
              address, mobile phone number and age, as well as at least one
              valid payment method (either a credit card or accepted payment
              partner). You agree to maintain accurate, complete, and up-to-date
              information in your Account. Your failure to maintain accurate,
              complete, and up-to-date Account information, including having an
              invalid or expired payment method on file, may result in your
              inability to access and use the Services or Nailzi’s termination
              of these Terms with you. You are responsible for all activity that
              occurs under your Account, and you agree to maintain the security
              and secrecy of your Account username and password at all times.
              Unless otherwise permitted by Nailzi in writing, you may only
              possess one Account. User Requirements and Conduct. The Service is
              not available for use by persons under the age of 18. You may not
              authorize third parties to use your Account, and you may not allow
              persons under the age of 18 to receive Beauty services or grooming
              services from Third Party Providers unless they are accompanied by
              you. You may not assign or otherwise transfer your Account to any
              other person or entity. You agree to comply with all applicable
              laws when using the Services, and you may only use the Services
              for lawful purposes (e.g., no transport of unlawful or hazardous
              materials). You will not, in your use of the Services, cause
              nuisance, annoyance, inconvenience, or property damage, whether to
              the Third Party Provider or any other party. In certain instances
              you may be asked to provide proof of identity to access or use the
              Services, and you agree that you may be denied access to or use of
              the Services if you refuse to provide proof of identity. Text
              Messaging. By creating an Account, you agree that the Services may
              send you text (SMS) messages as part of the normal business
              operation of your use of the Services. You may opt-out of
              receiving text (SMS) messages from Nailzi at any time by following
              the directions found at https://www.Nailzi.com/unsubscribe/. You
              acknowledge that opting out of receiving text (SMS) messages may
              impact your use of the Services. Promotional Codes. Nailzi may, in
              Nailzi’s sole discretion, create promotional codes that may be
              redeemed for Account credit, or other features or benefits related
              to the Services and/or a Third Party Provider’s services, subject
              to any additional terms that Nailzi establishes on a per
              promotional code basis (“Promo Codes”). You agree that Promo
              Codes: (i) must be used for the intended audience and purpose, and
              in a lawful manner; (ii) may not be duplicated, sold or
              transferred in any manner, or made available to the general public
              (whether posted to a public form or otherwise), unless expressly
              permitted by Nailzi; (iii) may be disabled by Nailzi at any time
              for any reason without liability to Nailzi; (iv) may only be used
              pursuant to the specific terms that Nailzi establishes for such
              Promo Code; (v) are not valid for cash; and (vi) may expire prior
              to your use. Nailzi reserves the right to withhold or deduct
              credits or other features or benefits obtained through the use of
              Promo Codes by you or any other user in the event that Nailzi
              determines or believes that the use or redemption of the Promo
              Code was in error, fraudulent, illegal, or in violation of the
              applicable Promo Code terms or these Terms. User Provided Content.
              Nailzi may, in Nailzi’s sole discretion, permit you from time to
              time to submit, upload, publish or otherwise make available to
              Nailzi through the Services textual, audio, and/or visual content
              and information, including commentary and feedback related to the
              Services, initiation of support requests, and submission of
              entries for competitions and promotions (“User Content”). Any User
              Content provided by you remains your property. However, by
              providing User Content to Nailzi, you grant Nailzi a worldwide,
              perpetual, irrevocable, transferrable, royalty-free license, with
              the right to sublicense, to use, copy, modify, create derivative
              works of, distribute, publicly display, publicly perform, and
              otherwise exploit in any manner such User Content in all formats
              and distribution channels now known or hereafter devised
              (including in connection with the Services and Nailzi’s business
              and on third-party sites and services), without further notice to
              or consent from you, and without the requirement of payment to you
              or any other person or entity. You represent and warrant that: (i)
              you either are the sole and exclusive owner of all User Content or
              you have all rights, licenses, consents and releases necessary to
              grant Nailzi the license to the User Content as set forth above;
              and (ii) neither the User Content nor your submission, uploading,
              publishing or otherwise making available of such User Content nor
              Nailzi’s use of the User Content as permitted herein will
              infringe, misappropriate or violate a third party’s intellectual
              property or proprietary rights, or rights of publicity or privacy,
              or result in the violation of any applicable law or regulation.
              You agree to not provide User Content that is defamatory,
              libelous, hateful, violent, obscene, pornographic, unlawful, or
              otherwise offensive, as determined by Nailzi in its sole
              discretion, whether or not such material may be protected by law.
              Nailzi may, but shall not be obligated to, review, monitor, or
              remove User Content, at Nailzi’s sole discretion and at any time
              and for any reason, without notice to you. Network Access and
              Devices. You are responsible for obtaining the data network access
              necessary to use the Services. Your mobile network’s data and
              messaging rates and fees may apply if you access or use the
              Services from a wireless-enabled device and you shall be
              responsible for such rates and fees. You are responsible for
              acquiring and updating compatible hardware or devices necessary to
              access and use the Services and Applications and any updates
              thereto. Nailzi does not guarantee that the Services, or any
              portion thereof, will function on any particular hardware or
              devices. In addition, the Services may be subject to malfunctions
              and delays inherent in the use of the Internet and electronic
              communications.
            </Title>
            <Title h3 m25 bold>
              Payment:
            </Title>
            <Title h4 m25 justify>
              You understand that use of the Services may result in charges to
              you for the services or goods you receive from a Third Party
              Provider (“Charges ”). After you have received services or goods
              obtained through your use of the Service, Nailzi will facilitate
              your payment of the applicable Charges on behalf of the Third
              Party Provider as such Third Party Provider’s limited payment
              collection agent. Payment of the Charges in such manner shall be
              considered the same as payment made directly by you to the Third
              Party Provider. Charges will be inclusive of applicable taxes
              where required by law. Charges paid by you are final and
              non-refundable, unless otherwise determined by Nailzi. You retain
              the right to request lower Charges from a Third Party Provider for
              services or goods received by you from such Third Party Provider
              at the time you receive such services or goods. Nailzi will
              respond accordingly to any request from a Third Party Provider to
              modify the Charges for a particular service or good. All Charges
              are due immediately and payment will be facilitated by Nailzi
              using the preferred payment method designated in your Account,
              after which Nailzi will send you a receipt by email. If your
              primary Account payment method is determined to be expired,
              invalid or otherwise not able to be charged, you agree that Nailzi
              may, as the Third Party Provider’s limited payment collection
              agent, use a secondary payment method in your Account, if
              available. As between you and Nailzi, Nailzi reserves the right to
              establish, remove and/or revise Charges for any or all services or
              goods obtained through the use of the Services at any time in
              Nailzi’s sole discretion. Further, you acknowledge and agree that
              Charges applicable in certain geographical areas may increase
              substantially during times of high demand. Nailzi will use
              reasonable efforts to inform you of Charges that may apply,
              provided that you will be responsible for Charges incurred under
              your Account regardless of your awareness of such Charges or the
              amounts thereof. Nailzi may from time to time provide certain
              users with promotional offers and discounts that may result in
              different amounts charged for the same or similar services or
              goods obtained through the use of the Services, and you agree that
              such promotional offers and discounts, unless also made available
              to you, shall have no bearing on your use of the Services or the
              Charges applied to you. You may elect to cancel your request for
              services or goods from a Third Party Provider at any time prior to
              such Third Party Provider’s arrival, in which case you may be
              charged a cancellation fee. This payment structure is intended to
              fully compensate the Third Party Provider for the services or
              goods provided. Except with respect to taxicab Beauty services
              services requested through the Application, Nailzi does not
              designate any portion of your payment as a tip or gratuity to the
              Third Party Provider. Any representation by Nailzi (on Nailzi’s
              website, in the Application, or in Nailzi’s marketing materials)
              to the effect that tipping is “voluntary,” “not required,” and/or
              “included” in the payments you make for services or goods provided
              is not intended to suggest that Nailzi provides any additional
              amounts, beyond those described above, to the Third Party
              Provider. You understand and agree that, while you are free to
              provide additional payment as a gratuity to any Third Party
              Provider who provides you with services or goods obtained through
              the Service, you are under no obligation to do so. Gratuities are
              voluntary. After you have received services or goods obtained
              through the Service, you will have the opportunity to rate your
              experience and leave additional feedback about your Third Party
              Provider. Repair or Cleaning Fees. You shall be responsible for
              the cost of repair for damage to, or necessary cleaning of, Third
              Party Provider vehicles and property resulting from use of the
              Services under your Account in excess of normal “wear and tear”
              damages and necessary cleaning (“Repair or Cleaning”). In the
              event that a Third Party Provider reports the need for Repair or
              Cleaning, and such Repair or Cleaning request is verified by
              Nailzi in Nailzi’s reasonable discretion, Nailzi reserves the
              right to facilitate payment for the reasonable cost of such Repair
              or Cleaning on behalf of the Third Party Provider using your
              payment method designated in your Account. Such amounts will be
              transferred by Nailzi to the applicable Third Party Provider and
              are non-refundable.
            </Title>
            <Title h3 m25 bold>
              Disclaimers; Limitation of Liability; Indemnity:
            </Title>
            <Title h4 m25 justify>
              DISCLAIMER. THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.”
              NAILZI DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS,
              IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS,
              INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN ADDITION, NAILZI MAKES
              NO REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE
              RELIABILITY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF
              THE SERVICES OR ANY SERVICES OR GOODS REQUESTED THROUGH THE USE OF
              THE SERVICES, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR
              ERROR-FREE. NAILZI DOES NOT GUARANTEE THE QUALITY, SUITABILITY,
              SAFETY OR ABILITY OF THIRD PARTY PROVIDERS. YOU AGREE THAT THE
              ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, AND ANY
              SERVICE OR GOOD REQUESTED IN CONNECTION THEREWITH, REMAINS SOLELY
              WITH YOU, TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
              LIMITATION OF LIABILITY. NAILZI SHALL NOT BE LIABLE FOR INDIRECT,
              INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES,
              INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY OR PROPERTY
              DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM
              ANY USE OF THE SERVICES, EVEN IF NAILZI HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES. NAILZI SHALL NOT BE LIABLE FOR ANY
              DAMAGES, LIABILITY OR LOSSES ARISING OUT OF: (i) YOUR USE OF OR
              RELIANCE ON THE SERVICES OR YOUR INABILITY TO ACCESS OR USE THE
              SERVICES; OR (ii) ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND
              ANY THIRD PARTY PROVIDER, EVEN IF NAILZI HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES. NAILZI SHALL NOT BE LIABLE FOR DELAY
              OR FAILURE IN PERFORMANCE RESULTING FROM CAUSES BEYOND NAILZI’S
              REASONABLE CONTROL. YOU ACKNOWLEDGE THAT THIRD PARTY BEAUTY
              SERVICES PROVIDERS PROVIDING BEAUTY SERVICES SERVICES REQUESTED
              THROUGH SOME REQUEST BRANDS MAY OFFER RIDESHARING OR PEER-TO-PEER
              BEAUTY SERVICES SERVICES AND MAY NOT BE PROFESSIONALLY LICENSED OR
              PERMITTED. IN NO EVENT SHALL NAILZI’S TOTAL LIABILITY TO YOU IN
              CONNECTION WITH THE SERVICES FOR ALL DAMAGES, LOSSES AND CAUSES OF
              ACTION EXCEED FIVE HUNDRED EUROS (€500). NAILZI’S SERVICES MAY BE
              USED BY YOU TO REQUEST AND SCHEDULE BEAUTY SERVICES, GOODS OR
              GROOMING SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU AGREE THAT
              NAILZI HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY
              BEAUTY SERVICES, GOODS OR GROOMING SERVICES PROVIDED TO YOU BY
              THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN THESE
              TERMS. THE LIMITATIONS AND DISCLAIMER IN THIS SECTION 5 DO NOT
              PURPORT TO LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER THAT
              CANNOT BE EXCLUDED UNDER APPLICABLE LAW. Indemnity. You agree to
              indemnify and hold Nailzi and its officers, directors, employees
              and agents harmless from any and all claims, demands, losses,
              liabilities, and expenses (including attorneys’ fees) arising out
              of or in connection with: (i) your use of the Services or services
              or goods obtained through your use of the Services; (ii) your
              breach or violation of any of these Terms; (iii) Nailzi’s use of
              your User Content; or (iv) your violation of the rights of any
              third party, including Third Party Providers.
            </Title>
            <Title h3 m25 bold>
              Governing Law; Arbitration:
            </Title>
            <Title h4 m25 justify>
              Except as otherwise set forth in these Terms, these Terms shall be
              exclusively governed by and construed in accordance with the laws
              of The Netherlands, excluding its rules on conflicts of laws. The
              Vienna Convention on the International Sale of Goods of 1980
              (CISG) shall not apply. Any dispute, conflict, claim or
              controversy arising out of or broadly in connection with or
              relating to the Services or these Terms, including those relating
              to its validity, its construction or its enforceability (any
              “Dispute”) shall be first mandatorily submitted to mediation
              proceedings under the International Chamber of Commerce Mediation
              Rules (“ICC Mediation Rules”). If such Dispute has not been
              settled within sixty (60) days after a request for mediation has
              been submitted under such ICC Mediation Rules, such Dispute can be
              referred to and shall be exclusively and finally resolved by
              arbitration under the Rules of Arbitration of the International
              Chamber of Commerce (“ICC Arbitration Rules”). The ICC Rules'
              Emergency Arbitrator provisions are excluded. The Dispute shall be
              resolved by one (1) arbitrator to be appointed in accordance with
              the ICC Rules. The place of both mediation and arbitration shall
              be Canada, The Netherlands, without prejudice to any rights you
              may have under Article 18 of the Brussels I bis Regulation (OJ EU
              2012 L351/1) and/or Article 6:236n of the Dutch Civil Code. The
              language of the mediation and/or arbitration shall be English,
              unless you do not speak English, in which case the mediation
              and/or arbitration shall be conducted in both English and your
              native language. The existence and content of the mediation and
              arbitration proceedings, including documents and briefs submitted
              by the parties, correspondence from and to the International
              Chamber of Commerce, correspondence from the mediator, and
              correspondence, orders and awards issued by the sole arbitrator,
              shall remain strictly confidential and shall not be disclosed to
              any third party without the express written consent from the other
              party unless: (i) the disclosure to the third party is reasonably
              required in the context of conducting the mediation or arbitration
              proceedings; and (ii) the third party agrees unconditionally in
              writing to be bound by the confidentiality obligation stipulated
              herein.
            </Title>
            <Title h3 m25 bold>
              Other Provisions:
            </Title>
            <Title h4 m25 justify>
              Claims of Copyright Infringement. Claims of copyright infringement
              should be sent to Nailzi’s designated agent. Please visit Nailzi’s
              web page at https://www.Nailzi.com/legal for the designated
              address and additional information. Notice. Nailzi may give notice
              by means of a general notice on the Services, electronic mail to
              your email address in your Account, or by written communication
              sent to your address as set forth in your Account. You may give
              notice to Nailzi by written communication to Nailzi's address at
              145-1000 Asleton Blvd Milton ON Canada. General. You may not
              assign or transfer these Terms in whole or in part without
              Nailzi’s prior written approval. You give your approval to Nailzi
              for it to assign or transfer these Terms in whole or in part,
              including to: (i) a subsidiary or affiliate; (ii) an acquirer of
              Nailzi’s equity, business or assets; or (iii) a successor by
              merger. No joint venture, partnership, employment or agency
              relationship exists between you, Nailzi or any Third Party
              Provider as a result of the contract between you and Nailzi or use
              of the Services. If any provision of these Terms is held to be
              illegal, invalid or unenforceable, in whole or in part, under any
              law, such provision or part thereof shall to that extent be deemed
              not to form part of these Terms but the legality, validity and
              enforceability of the other provisions in these Terms shall not be
              affected. In that event, the parties shall replace the illegal,
              invalid or unenforceable provision or part thereof with a
              provision or part thereof that is legal, valid and enforceable and
              that has, to the greatest extent possible, a similar effect as the
              illegal, invalid or unenforceable provision or part thereof, given
              the contents and purpose of these Terms. These Terms constitute
              the entire agreement and understanding of the parties with respect
              to its subject matter and replaces and supersedes all prior or
              contemporaneous agreements or undertakings regarding such subject
              matter. In these Terms, the words “including” and “include” mean
              “including, but not limited to.”
            </Title>
          </View>
        </Modalize>
      </Portal>
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
  checkBoxRow: {
    width: '50%',
  },
  CheckBoxContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  lastCheckBoxContainer: {
    marginTop: 30,
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
});

export default FreelancerRegister;
