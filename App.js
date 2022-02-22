import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar, SafeAreaView, AppState } from 'react-native';
import Toast from 'react-native-toast-message';
import { CustomerNavigator, FreelancerNavigator } from './src/navigators/main';
import { StripeProvider } from '@stripe/stripe-react-native';
// import SplashScreen from 'react-native-lottie-splash-screen';
import colors from './src/utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { Host } from 'react-native-portalize';
import RNLocation from 'react-native-location';
import NetInfo from '@react-native-community/netinfo';
import NoInternetDialog from './src/components/NoInternetDialog';
import SplashScreen from './src/screens/SplashScreen';

const RootStack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const [appState, setAppState] = useState(AppState.currentState);
  const [isInternetAvailable, setInternetAvailable] = useState(false);
  // const uselocation = useLocation();

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setInternetAvailable(!state.isConnected);
    });
  }, [isInternetAvailable]);

  // useEffect(() => {
  //   handleLocation();
  //   AppState.addEventListener('change', _handleAppStateChange);
  //   setTimeout(() => {
  //     // if (SplashScreen) {
  //     //   SplashScreen.hide();
  //     // }
  //     navigation.replace('FreelancerNavigator');
  //   }, 2000);
  //   return () => {
  //     AppState.removeEventListener('change', _handleAppStateChange);
  //   };
  // }, [appState]);

  const _handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      // console.log('App has come to the foreground!');
      handleLocation();
    }
    setAppState(nextAppState);
  };

  const handleLocation = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse', // or 'whenInUse'
      android: {
        detail: 'fine', // or 'fine'
        rationale: {
          title: 'Beauty Club wants to get your current location',
          message: 'We use your location to show where you are.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then((granted) => {
      RNLocation.getLatestLocation({ timeout: 60000 }).then(
        (latestLocation) => {
          console.log('log-latestLocation', latestLocation);
          

          getAddress({
            latitude: latestLocation ? latestLocation.latitude : 49.2827,
            longitude: latestLocation ? latestLocation.longitude : -123.1207,
          });
        }
      );
    });
  };

  const getAddress = (locationdata) => {
    fetch(
      `https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/${locationdata.longitude},${locationdata.latitude}.json?access_token=pk.eyJ1IjoibmFpbHppYXBwIiwiYSI6ImNrcW1hdTZ5czBnbjEyd3F3MGx3dmRzemUifQ.ecpUetqEY2fayrduMdxbww`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: 'ADDLOCATION',
          payload: {
            location: locationdata,
            address: result.features[0].text,
          },
        });
      })
      .catch((error) => console.log('error', error));
  };

  return (
    // pk_test_Y5tVOV6aaaGUw88QgULo9iqy
    // pk_live_51IyVEMJLd92jeqR3Wd7M0OYYWmAd9zXeBg9N3BE9U0B648UtQUWlz5wGeWvt8akBmXCnMCYvtOlCQPWraYa8ts7K00UFTRPRCF
    <StripeProvider publishableKey='pk_live_51IyVEMJLd92jeqR3Wd7M0OYYWmAd9zXeBg9N3BE9U0B648UtQUWlz5wGeWvt8akBmXCnMCYvtOlCQPWraYa8ts7K00UFTRPRCF'>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: 'white',
        }}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Host>
          <NavigationContainer>
            <RootStack.Navigator initialRouteName='Customer'>
              {/* {profile && profile.freelancer ? ( */}
               <RootStack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name='Freelancer'
                  component={CustomerNavigator}
                /> 
                 {/* <RootStack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name='Freelancer'
                  component={FreelancerNavigator}
                />  */}
              {/* //  ) : ( 
              //   <RootStack.Screen
              //     options={{
              //       headerShown: false,
              //     }}
              //     name='Customer'
              //     component={CustomerNavigator}
              //   />
              //  )}  */}
            </RootStack.Navigator>
          </NavigationContainer>
        </Host>
        <NoInternetDialog dialogVisible={isInternetAvailable} />
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      {/* <StatusBar
        barStyle={
          profile && profile.freelancer
            ? 'light-content'
            : 'dark-content'
        }
      /> */}
       <StatusBar
        barStyle={ 'dark-content'
        }
      />
    </StripeProvider>
  );
};

export default App;
