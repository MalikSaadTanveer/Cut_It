import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryLayout from '../components/PrimaryLayout';
import { Title } from '../components/ComponentItems';
import Logo from '../../assets/logo.png';

const About = (props) => {
  return (
    <PrimaryLayout useScrollView leftContainer title='About Us'>
      <Title h2 m25 bold>
        About Nailzi
      </Title>
      <Title h4big m25 darkGrey>
        Nailzi Services is all about making your vision the reality! Our
        services provides you the luxury of staying at home and having our
        professionals come right to your doorstep to pamper you. From nail
        services to waxing and eyelashes, we provide top notch professionals
        with extensive experience to make sure you are satisfied! Kick back in
        your pyjamas and let our professionals do the magic by simply selecting
        the date and time that suits you through Nailzi Application. View and
        give reviews on professionals, and dont worry about missing an
        appointment we will make sure to remind you.
      </Title>
      <Title h4 m25 center>
        {'\n'}
        {'\n'}
        {'\n'}© 2021 Nailzi. All right reserved
      </Title>
      <Title h5 m25 center darkGrey>
        Developed by Kadritech
        {'\n'}Powered by Dataholic
      </Title>
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

export default About;
