import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import { Button, Input, Title } from '../components/ComponentItems';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
// import { useFirebase } from 'react-redux-firebase';
import Toast from 'react-native-toast-message';
// import messaging from '@react-native-firebase/messaging';
import { CheckBox } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import colors from '../utils/colors';
import moment from 'moment';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .typeError('Phone number you have typed is not valid.')
    .matches(phoneRegExp, 'Please type valid phone number'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  terms: yup
    .bool()
    .oneOf([true], 'You must read and agree with our terms of services.'),
});

const CCAccContactScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState('');
  const rform = useSelector((state) => state.formStore);
  const firebase = useFirebase();
  const modalizeRef = useRef(null);

  useEffect(() => {
    requestUserPermission();
  }, []);

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

  const randomString = (length = 20) => {
    let chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  const registerCustomer = (values) => {
    setLoading(true);
    firebase
      .createUser(
        {
          email: values.email,
          password: values.password,
        },
        {
          ...rform.customerRegisterForm,
          userId: randomString(10),
          phone: values.phone,
          email: values.email,
          usedCoupons: [],
          provider: false,
          customer: true,
          createdAt: moment().toISOString(),
          active: true,
          pushToken: deviceToken, // this will be the device token
          profilePic:
            'https://firebasestorage.googleapis.com/v0/b/nailzy-app.appspot.com/o/static%2FdefaultApp.png?alt=media&token=0cb4ff72-699d-4176-b079-49f9b08b8a24',
        }
      )
      .then((resp) => {
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
    <PrimaryLayout leftContainer title='REGISTER'>
      <View style={ccacccontactscreenStyles.loginContainer}>
        <View>
          <Title h1 bold center primary>
            Contact Info
          </Title>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{ phone: '', email: '', password: '', terms: false }}
            onSubmit={registerCustomer}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
              errors,
              isValid,
            }) => (
              <>
                <Input
                  name='phone'
                  label='Phone'
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone.toString()}
                  error={errors.phone}
                  keyboardType='phone-pad'
                />
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
                <CheckBox
                  title='I agree to Nailzi Terms of Service and Privacy Policy '
                  checked={values.terms}
                  containerStyle={ccacccontactscreenStyles.CheckBoxContainer}
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
                  large
                  loading={loading}
                  onPress={handleSubmit}
                >
                  Create
                </Button>
              </>
            )}
          </Formik>
        </View>
      </View>
      <Portal>
        <Modalize modalTopOffset={50} ref={modalizeRef}>
          <View style={{ padding: 10, flex: 1 }}>
            <Title h2 m25 center bold>
              Terms of Conditions
            </Title>
            <Title h4 m25 bold>
              1. Introduction
            </Title>
            <Title h4 m25 justify>
              Welcome to Nailzi (“Company”, “we”, “our”, “us”)! As you have just
              clicked our Terms of Service, please pause, grab a cup of coffee
              and carefully read the following pages. It will take you
              approximately 20 minutes. These Terms of Service (“Terms”, “Terms
              of Service”) govern your use of our web pages located at
              Nailzi.com and our mobile application Nailzi (together or
              individually “Service”) operated by Nailzi Your agreement with us
              includes these Terms (“Agreements”). You acknowledge that you have
              read and understood Agreements, and agree to be bound of them. If
              you do not agree with (or cannot comply with) Agreements, then you
              may not use the Service, but please let us know by emailing at
              Nailzi.services@gmail.com so we can try to find a solution. These
              Terms apply to all visitors, users and others who wish to access
              or use Service. Thank you for being responsible.
            </Title>
            <Title h4 m25 bold>
              2. Communications
            </Title>
            <Title h4 m25 justify>
              By creating an Account on our Service, you agree to subscribe to
              newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving
              any, or all, of these communications from us by following the
              unsubscribe link or by emailing at.
            </Title>
            <Title h4 m25 bold>
              3. Purchases
            </Title>
            <Title h4 m25 justify>
              If you wish to purchase any product or service made available
              through Service (“Purchase”), you may be asked to supply certain
              information relevant to your Purchase including, without
              limitation, your credit card number, the expiration date of your
              credit card, your billing address, and your shipping information.
              You represent and warrant that: (i) you have the legal right to
              use any credit card(s) or other payment method(s) in connection
              with any Purchase; and that (ii) the information you supply to us
              is true, correct and complete. We may employ the use of third
              party services for the purpose of facilitating payment and the
              completion of Purchases. By submitting your information, you grant
              us the right to provide the information to these third parties. We
              reserve the right to refuse or cancel your order at any time for
              reasons including but not limited to: product or service
              availability, errors in the description or price of the product or
              service, error in your order or other reasons. We reserve the
              right to refuse or cancel your order if fraud or an unauthorized
              or illegal transaction is suspected.
            </Title>
            <Title h4 m25 bold>
              4. Contests, Sweepstakes and Promotions
            </Title>
            <Title h4 m25 justify>
              Any contests, sweepstakes or other promotions (collectively,
              “Promotions”) made available through Service may be governed by
              rules that are separate from these Terms of Service. If you
              participate in any Promotions, please review the applicable rules.
              If the rules for a Promotion conflict with these Terms of Service,
              Promotion rules will apply.
            </Title>
            <Title h4 m25 bold>
              5. Fee Changes
            </Title>
            <Title h4 m25 justify>
              Nailzi, in its sole discretion and at any time, may modify
              Subscription fees for the Subscriptions. Any Subscription fee
              change will become effective at the end of the then-current
              Billing Cycle. Nailzi will provide you with a reasonable prior
              notice of any change in Subscription fees to give you an
              opportunity to terminate your Subscription before such change
              becomes effective. Your continued use of Service after
              Subscription fee change comes into effect constitutes your
              agreement to pay the modified Subscription fee amount.
            </Title>
            <Title h4 m25 bold>
              6. Refunds
            </Title>
            <Title h4 m25 justify>
              We issue refunds for Contracts within fifteen (15) days of the
              original purchase of the Contract.
            </Title>
            <Title h4 m25 bold>
              7. Content
            </Title>
            <Title h4 m25 justify>
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material (“Content”). You are responsible for Content that
              you post on or through Service, including its legality,
              reliability, and appropriateness. By posting Content on or through
              Service, You represent and warrant that: (i) Content is yours (you
              own it) and/or you have the right to use it and the right to grant
              us the rights and license as provided in these Terms, and (ii)
              that the posting of your Content on or through Service does not
              violate the privacy rights, publicity rights, copyrights, contract
              rights or any other rights of any person or entity. We reserve the
              right to terminate the account of anyone found to be infringing on
              a copyright. You retain any and all of your rights to any Content
              you submit, post or display on or through Service and you are
              responsible for protecting those rights. We take no responsibility
              and assume no liability for Content you or any third party posts
              on or through Service. However, by posting Content using Service
              you grant us the right and license to use, modify, publicly
              perform, publicly display, reproduce, and distribute such Content
              on and through Service. You agree that this license includes the
              right for us to make your Content available to other users of
              Service, who may also use your Content subject to these Terms.
              Nailzi has the right but not the obligation to monitor and edit
              all Content provided by users. In addition, Content found on or
              through this Service are the property of Nailzi or used with
              permission. You may not distribute, modify, transmit, reuse,
              download, repost, copy, or use said Content, whether in whole or
              in part, for commercial purposes or for personal gain, without
              express advance written permission from us.
            </Title>
            <Title h4 m25 bold>
              8. Prohibited Uses
            </Title>
            <Title h4 m25 justify>
              You may use Service only for lawful purposes and in accordance
              with Terms. You agree not to use Service: (a) In any way that
              violates any applicable national or international law or
              regulation. (b) For the purpose of exploiting, harming, or
              attempting to exploit or harm minors in any way by exposing them
              to inappropriate content or otherwise. (c) To transmit, or procure
              the sending of, any advertising or promotional material, including
              any “junk mail”, “chain letter,” “spam,” or any other similar
              solicitation. (d) To impersonate or attempt to impersonate
              Company, a Company employee, another user, or any other person or
              entity. (e) In any way that infringes upon the rights of others,
              or in any way is illegal, threatening, fraudulent, or harmful, or
              in connection with any unlawful, illegal, fraudulent, or harmful
              purpose or activity. (f) To engage in any other conduct that
              restricts or inhibits anyone’s use or enjoyment of Service, or
              which, as determined by us, may harm or offend Company or users of
              Service or expose them to liability. Additionally, you agree not
              to: (a) Use Service in any manner that could disable, overburden,
              damage, or impair Service or interfere with any other party’s use
              of Service, including their ability to engage in real time
              activities through Service. (b) Use any robot, spider, or other
              automatic device, process, or means to access Service for any
              purpose, including monitoring or copying any of the material on
              Service. (c) Use any manual process to monitor or copy any of the
              material on Service or for any other unauthorized purpose without
              our prior written consent. (d) Use any device, software, or
              routine that interferes with the proper working of Service. (e)
              Introduce any viruses, trojan horses, worms, logic bombs, or other
              material which is malicious or technologically harmful. (f)
              Attempt to gain unauthorized access to, interfere with, damage, or
              disrupt any parts of Service, the server on which Service is
              stored, or any server, computer, or database connected to Service.
              (g) Attack Service via a denial-of-service attack or a distributed
              denial-of-service attack. (h) Take any action that may damage or
              falsify Company rating. (i) Otherwise attempt to interfere with
              the proper working of Service.
            </Title>
            <Title h4 m25 bold>
              9. Analytics
            </Title>
            <Title h4 m25 justify>
              We may use third-party Service Providers to monitor and analyze
              the use of our Service. Google Analytics Google Analytics is a web
              analytics service offered by Google that tracks and reports
              website traffic. Google uses the data collected to track and
              monitor the use of our Service. This data is shared with other
              Google services. Google may use the collected data to
              contextualise and personalise the ads of its own advertising
              network. For more information on the privacy practices of Google,
              please visit the Google Privacy Terms web page:
              https://policies.google.com/privacy?hl=en We also encourage you to
              review the Google's policy for safeguarding your data:
              https://support.google.com/analytics/answer/6004245. Firebase
              Firebase is analytics service provided by Google Inc. You may
              opt-out of certain Firebase features through your mobile device
              settings, such as your device advertising settings or by following
              the instructions provided by Google in their Privacy Policy:
              https://policies.google.com/privacy?hl=en For more information on
              what type of information Firebase collects, please visit the
              Google Privacy Terms web page:
              https://policies.google.com/privacy?hl=en Fathom Analytics Fathom
              Analytics is analytics service provided by Conva Ventures Inc. You
              can find their Privacy Policy here: https://usefathom.com/privacy/
              Piwik / Matomo Piwik or Matomo is a web analytics service. You can
              visit their Privacy Policy page here:
              https://matomo.org/privacy-policy Clicky Clicky is a web analytics
              service. Read the Privacy Policy for Clicky here:
              https://clicky.com/terms Cloudflare analytics Cloudflare analytics
              is a web analytics service operated by Cloudflare Inc. Read the
              Privacy Policy here: https://www.cloudflare.com/privacypolicy/
              Statcounter Statcounter is a web traffic analysis tool. You can
              read the Privacy Policy for Statcounter here:
              https://statcounter.com/about/legal/ Flurry Analytics Flurry
              Analytics service is provided by Yahoo! Inc. You can opt-out from
              Flurry Analytics service to prevent Flurry Analytics from using
              and sharing your information by visiting the Flurry's Opt-out
              page: https://dev.flurry.com/secure/optOut.do For more information
              on the privacy practices and policies of Yahoo!, please visit
              their Privacy Policy page:
              https://policies.yahoo.com/us/en/yahoo/privacy/policy/index.htm
              Mixpanel Mixpanel is provided by Mixpanel Inc. You can prevent
              Mixpanel from using your information for analytics purposes by
              opting-out. To opt-out of Mixpanel service, please visit this
              page: https://mixpanel.com/optout/ For more information on what
              type of information Mixpanel collects, please visit the Terms of
              Use page of Mixpanel: https://mixpanel.com/terms/ Unity Analytics
              Unity Analytics is provided by Unity Technologies. For more
              information on what type of information Unity Analytics collects,
              please visit their Privacy Policy page:
              hhttps://unity3d.com/legal/privacy-policy Azure DevOps Azure
              DevOps is a Software as a service (SaaS) platform from Microsoft
              that provides an end-to-end DevOps toolchain for developing and
              deploying software. You can find Microsoft Privacy Statement here:
              https://privacy.microsoft.com/en-gb/privacystatement
            </Title>
            <Title h4 m25 bold>
              10. No Use By Minors
            </Title>
            <Title h4 m25 justify>
              Service is intended only for access and use by individuals at
              least eighteen (18) years old. By accessing or using any of
              Company, you warrant and represent that you are at least eighteen
              (18) years of age and with the full authority, right, and capacity
              to enter into this agreement and abide by all of the terms and
              conditions of Terms. If you are not at least eighteen (18) years
              old, you are prohibited from both the access and usage of Service.
            </Title>
            <Title h4 m25 bold>
              11. Accounts
            </Title>
            <Title h4 m25 justify>
              When you create an account with us, you guarantee that you are
              above the age of 18, and that the information you provide us is
              accurate, complete, and current at all times. Inaccurate,
              incomplete, or obsolete information may result in the immediate
              termination of your account on Service. You are responsible for
              maintaining the confidentiality of your account and password,
              including but not limited to the restriction of access to your
              computer and/or account. You agree to accept responsibility for
              any and all activities or actions that occur under your account
              and/or password, whether your password is with our Service or a
              third-party service. You must notify us immediately upon becoming
              aware of any breach of security or unauthorized use of your
              account. You may not use as a username the name of another person
              or entity or that is not lawfully available for use, a name or
              trademark that is subject to any rights of another person or
              entity other than you, without appropriate authorization. You may
              not use as a username any name that is offensive, vulgar or
              obscene. We reserve the right to refuse service, terminate
              accounts, remove or edit content, or cancel orders in our sole
              discretion.
            </Title>
            <Title h4 m25 bold>
              12. Intellectual Property
            </Title>
            <Title h4 m25 justify>
              Service and its original content (excluding Content provided by
              users), features and functionality are and will remain the
              exclusive property of Nailzi and its licensors. Service is
              protected by copyright, trademark, and other laws of the United
              States and foreign countries. Our trademarks and trade dress may
              not be used in connection with any product or service without the
              prior written consent of Nailzi.
            </Title>
            <Title h4 m25 bold>
              13. Error Reporting and Feedback
            </Title>
            <Title h4 m25 justify>
              You may provide us either directly at Nailzi.services@gmail.com or
              via third party sites and tools with information and feedback
              concerning errors, suggestions for improvements, ideas, problems,
              complaints, and other matters related to our Service (“Feedback”).
              You acknowledge and agree that: (i) you shall not retain, acquire
              or assert any intellectual property right or other right, title or
              interest in or to the Feedback; (ii) Company may have development
              ideas similar to the Feedback; (iii) Feedback does not contain
              confidential information or proprietary information from you or
              any third party; and (iv) Company is not under any obligation of
              confidentiality with respect to the Feedback. In the event the
              transfer of the ownership to the Feedback is not possible due to
              applicable mandatory laws, you grant Company and its affiliates an
              exclusive, transferable, irrevocable, free-of-charge,
              sub-licensable, unlimited and perpetual right to use (including
              copy, modify, create derivative works, publish, distribute and
              commercialize) Feedback in any manner and for any purpose. The
              third party sites and tools mentioned above include the following:
              Bugsnag Bugsnag is a platform for monitoring and logging stability
              of applications provided by Bugsnag Inc. Please read their Privacy
              Policy here: https://docs.bugsnag.com/legal/privacy-policy/ ACRA
              ACRA or Application Crash Reports for Android is monitoring
              platform. Please find more information here:
              https://github.com/ACRA/acra Rollbar Rollbar is error tracking
              service provided by Rollbar Inc. Find out more here:
              https://docs.rollbar.com/docs/privacy-policy Sentry Sentry is
              open-source error tracking solution provided by Functional
              Software Inc. More information is available here:
              https://sentry.io/privacy/ Raygun Raygun is automated error
              monitoring software provided by Raygun Limited. Privacy Policy is
              accessible at https://raygun.com/privacy/ Firebase Crashlytics
              Firebase Crashlytics is bug reporting service provided by Google
              Inc. You may opt-out of certain Firebase features through your
              mobile device settings, such as your device advertising settings
              or by following the instructions provided by Google in their
              Privacy Policy: https://policies.google.com/privacy?hl=en For more
              information on what type of information Firebase collects, please
              visit the Google Privacy Terms web page:
              https://policies.google.com/privacy?hl=en
            </Title>
            <Title h4 m25 bold>
              14. Links To Other Web Sites
            </Title>
            <Title h4 m25 justify>
              Our Service may contain links to third party web sites or services
              that are not owned or controlled by Nailzi Nailzi has no control
              over, and assumes no responsibility for the content, privacy
              policies, or practices of any third party web sites or services.
              We do not warrant the offerings of any of these
              entities/individuals or their websites. YOU ACKNOWLEDGE AND AGREE
              THAT NAILZI SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR
              INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED
              BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT,
              GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB
              SITES OR SERVICES. WE STRONGLY ADVISE YOU TO READ THE TERMS OF
              SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR
              SERVICES THAT YOU VISIT.
            </Title>
            <Title h4 m25 bold>
              15. Disclaimer Of Warranty
            </Title>
            <Title h4 m25 justify>
              THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
              AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR
              SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED
              THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES,
              THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT
              YOUR SOLE RISK. NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH
              COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE
              COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR
              AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING,
              NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR
              WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR
              ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE,
              ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT
              THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF
              VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY
              SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE
              MEET YOUR NEEDS OR EXPECTATIONS. COMPANY HEREBY DISCLAIMS ALL
              WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR
              OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
              MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR
              PURPOSE. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT
              BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </Title>
            <Title h4 m25 bold>
              16. Limitation Of Liability
            </Title>
            <Title h4 m25 justify>
              EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
              PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
              ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND
              EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
              IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED),
              WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS
              ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT,
              INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR
              PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY
              YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR
              REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE
              IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO
              THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO
              CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.
              SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE,
              INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR
              EXCLUSION MAY NOT APPLY TO YOU.
            </Title>
            <Title h4 m25 bold>
              17. Termination
            </Title>
            <Title h4 m25 justify>
              We may terminate or suspend your account and bar access to Service
              immediately, without prior notice or liability, under our sole
              discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of Terms. If you wish to
              terminate your account, you may simply discontinue using Service.
              All provisions of Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </Title>
            <Title h4 m25 bold>
              18. Governing Law
            </Title>
            <Title h4 m25 justify>
              These Terms shall be governed and construed in accordance with the
              laws of Ontario Canada without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights. If any
              provision of these Terms is held to be invalid or unenforceable by
              a court, the remaining provisions of these Terms will remain in
              effect. These Terms constitute the entire agreement between us
              regarding our Service and supersede and replace any prior
              agreements we might have had between us regarding Service.
            </Title>
            <Title h4 m25 bold>
              19. Changes To Service
            </Title>
            <Title h4 m25 justify>
              We reserve the right to withdraw or amend our Service, and any
              service or material we provide via Service, in our sole discretion
              without notice. We will not be liable if for any reason all or any
              part of Service is unavailable at any time or for any period. From
              time to time, we may restrict access to some parts of Service, or
              the entire Service, to users, including registered users.
            </Title>
            <Title h4 m25 bold>
              20. Amendments To Terms
            </Title>
            <Title h4 m25 justify>
              We may amend Terms at any time by posting the amended terms on
              this site. It is your responsibility to review these Terms
              periodically. Your continued use of the Platform following the
              posting of revised Terms means that you accept and agree to the
              changes. You are expected to check this page frequently so you are
              aware of any changes, as they are binding on you. By continuing to
              access or use our Service after any revisions become effective,
              you agree to be bound by the revised terms. If you do not agree to
              the new terms, you are no longer authorized to use Service.
            </Title>
            <Title h4 m25 bold>
              21. Waiver And Severability
            </Title>
            <Title h4 m25 justify>
              No waiver by Company of any term or condition set forth in Terms
              shall be deemed a further or continuing waiver of such term or
              condition or a waiver of any other term or condition, and any
              failure of Company to assert a right or provision under Terms
              shall not constitute a waiver of such right or provision. If any
              provision of Terms is held by a court or other tribunal of
              competent jurisdiction to be invalid, illegal or unenforceable for
              any reason, such provision shall be eliminated or limited to the
              minimum extent such that the remaining provisions of Terms will
              continue in full force and effect.
            </Title>
            <Title h4 m25 bold>
              22. Acknowledgement
            </Title>
            <Title h4 m25 justify>
              BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
              THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
              THEM.
            </Title>
            <Title h4 m25 bold>
              23. Contact Us
            </Title>
            <Title h4 m25 justify>
              Please send your feedback, comments, requests for technical
              support: By email: Nailzi.services@gmail.com.
            </Title>
          </View>
        </Modalize>
      </Portal>
    </PrimaryLayout>
  );
};

const ccacccontactscreenStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  CheckBoxContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
});

export default CCAccContactScreen;
