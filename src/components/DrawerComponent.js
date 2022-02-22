import React from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import {
  Button,
  FlatButton,
  HorizontalLine,
  ImageButton,
  Title,
} from './ComponentItems';
import { useSelector } from 'react-redux';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const DrawerComponent = (props) => {

  return (
    <View style={drawerStyles.container}>
      <View style={drawerStyles.topBar}>
        <Text style={drawerStyles.topBarTitle}>Settings</Text>
        <ImageButton
          image={{
            source: require('../../assets/menu.png'),
          }}
          onPress={() => {
            props.navigation.closeDrawer();
          }}
        />
      </View>
      <HorizontalLine block style={{ marginBottom: 10 }} />
      <View style={drawerStyles.containerMain}>
        {/* Logout Button */}
          <Button
            block
            primary
            onPress={() => {
              props.navigation.closeDrawer();
              // firebase.logout();
            }}
          >
            Main 
          </Button>
          <>
            <Button
              block
              primary
              small
              onPress={() => {
                props.navigation.navigate('LoginWithEmail');
              }}
            >
              LOGIN WITH EMAIL
            </Button>
            <Button
              block
              outlined
              small
              onPress={() => {
                props.navigation.navigate('FreelancerRegister');
              }}
            >
              FREELANCER SIGN UP
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
      </View>
      <View style={drawerStyles.containerBottom}>
        <FlatButton
          block
          small
          onPress={() => {
            props.navigation.navigate('Help');
          }}
        >
          Help
        </FlatButton>
        <HorizontalLine block />
        <FlatButton
          block
          small
          onPress={() => {
            props.navigation.navigate('About');
          }}
        >
          About
        </FlatButton>
        <HorizontalLine block />
        <FlatButton
          block
          small
          onPress={() => {
            props.navigation.navigate('Terms');
          }}
        >
          Terms and conditions
        </FlatButton>
        <HorizontalLine block />
      </View>
    </View>
  );
};

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    shadowColor: '#000',
    paddingBottom:
      Platform.OS === 'ios'
        ? (screenHeight / 100) * 2
        : (screenHeight / 100) * 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,
    elevation: 5,
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  topBarTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerMain: {
    flex: 10,
    padding: 10,
  },
  containerBottom: {
    flex: 3,
  },
});

export default DrawerComponent;
