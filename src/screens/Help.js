import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import { Title } from '../components/ComponentItems';
import Logo from '../../assets/logo.png';
import { colors } from 'react-native-elements';
import { openComposer } from 'react-native-email-link';

const Help = (props) => {
  return (
    <PrimaryLayout useScrollView leftContainer title='Help'>
      <View style={profileStyles.logoContainer}>
        <Image style={profileStyles.logo} source={Logo} />
      </View>

      <Title h2 m25 primary center>
        Customer Service
      </Title>

      <Text
        style={{
          fontSize: 22,
          color: 'black',
          textAlign: 'center',
          fontWeight: '400',
          margin: 15,
        }}
        onPress={() =>
          openComposer({
            to: 'support@nailzi.com',
            subject: 'I have a question',
            body: 'Hi, can you help me with...',
          })
        }
      >
        support@nailzi.com
      </Text>
    </PrimaryLayout>
  );
};

const profileStyles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  logo: {
    height: '100%',
    resizeMode: 'contain',
  },
});
export default Help;
