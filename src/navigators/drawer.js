import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginWithEmail from '../screens/LoginWithEmail';
import DrawerComponent from '../components/DrawerComponent';
import ProfileScreen from '../screens/ProfileScreen';
import CCAccNameScreen from '../screens/CCAccNameScreen';
import CCAccAgeScreen from '../screens/CCAccAgeScreen';
import CCAccContactScreen from '../screens/CCAccContactScreen';
import FreelancerRegister from '../screens/FreelancerRegister';
import { createStackNavigator } from '@react-navigation/native-stack';
import ForgotScreen from '../screens/ForgotScreen';
import Terms from '../screens/Terms';
import About from '../screens/About';
import Help from '../screens/Help';

const Drawer = createDrawerNavigator();

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = (props) => {
  return (
    <ProfileStack.Navigator initialRouteName='ProfileScreen'  >
      <ProfileStack.Screen
        name='ProfileScreen'
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name='LoginWithEmail'
        component={LoginWithEmail}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='CCAccNameScreen'
        component={CCAccNameScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='CCAccAgeScreen'
        component={CCAccAgeScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='CCAccContactScreen'
        component={CCAccContactScreen}
        options={{
          headerShown: false,
        }}
      />

      {/*Freelancer screens*/}
      <ProfileStack.Screen
        name='FreelancerRegister'
        component={FreelancerRegister}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='ForgotScreen'
        component={ForgotScreen}
        options={{
          headerShown: false,
        }}
      />

      <ProfileStack.Screen
        name='Terms'
        component={Terms}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='About'
        component={About}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='Help'
        component={Help}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

const DrawerNavigator = (props) => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName='DrawerComponent'
        drawerStyle={{
          width: '50%',
        }}
        overlayColor='transparent'
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Drawer.Screen name='ProfileStack' component={ProfileStackNavigator} />
        <Drawer.Screen name='LoginWithEmail' component={LoginWithEmail} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
