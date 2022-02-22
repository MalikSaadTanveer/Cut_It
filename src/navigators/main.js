import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfessionalsScreen from '../screens/ProfessionalsScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import Deals from '../screens/Deals';
import AppointmentScreen from '../screens/AppointmentScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import colors from '../utils/colors';
import AuthenticatedProfile from '../screens/AuthenticatedProfile';
import ProfileScreen from '../screens/ProfileScreen';

import { useDispatch, useSelector } from 'react-redux';
import UpdateFreelancer from '../screens/UpdateFreelancer';
import BookingsScreen from '../screens/BookingsScreen';
import CustomersScreens from '../screens/CustomersScreens';
import CreateAppointmentScreen from '../screens/CreateAppointmentScreen';
import DrawerNavigator from './drawer';

import UpdateCustomer from '../screens/UpdateCustomer';
import SplashScreen from '../screens/SplashScreen';
import SplashScreenSecond from '../screens/SplashScreenSecond';
import SplashScreenThird from '../screens/SplashScreenThird';
import BookingScreen from '../screens/BookingsScreen';
import PastScreen1 from '../screens/PastScreen1';
import PastScreen2 from '../screens/PastScreen2';
import FavouritesScreen from '../screens/FavouritesScreen';
import FreelancerReviews from '../screens/FreelancerReviews';
import MoreScreen from '../screens/MoreScreen';
import ProfileFormScreen from '../screens/ProfileFormScreen';
import DirectionScreen from '../screens/DirectionScreen';
import ServiceScreen from '../screens/ServicesScreen';
import ServiceTypeScreen from '../screens/ServiceTypeScreen';
import ServiceBookingScreen from '../screens/ServiceBookingScreen';
import ConfirmBookingScreen from '../screens/ConfirmBookingScreen';
import Notifications from '../screens/Notifications';
import ViewProfileFreelancer from '../screens/ViewProfileFreelancer';
import RecipeScreen from '../screens/RecipeScreen';
import BeautyPayScreen from '../screens/BeautyPayScreen';
import PaymentScreen from '../screens/PaymentScreen';
import DebitCardScreen from '../screens/DebitCardScreen';
import ShoopingBag from '../screens/ShoopingBag';
import LocationScreen from '../screens/LocationScreen';
import SelectLocationScreen from '../screens/SelectLocationScreen';
import FreelancerScreen from '../screens/FreelancerScreen';
import {Image} from 'react-native'
import BeforeSplash from '../screens/BeforeSplash'



const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SplashStack = createStackNavigator();
const PromotionsStack = createStackNavigator();
const AppointmentStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MoreDrawerStack = createStackNavigator();
const NewDrawerScreen = createStackNavigator();
const MainStackNavigator = createStackNavigator();
const FavouriteStackNavigator = createStackNavigator();


const FavouriteScreenStack = (props) => {
  return (
    <FavouriteStackNavigator.Navigator initialRouteName='FavouritesScreen'>
      <FavouriteStackNavigator.Screen
        name='FavouritesScreen'
        component={FavouritesScreen}
        options={{
          headerShown: false
        }} />
      <FavouriteStackNavigator.Screen
        name='FreelancerScreen'
        component={FreelancerScreen}
        options={{
          headerShown: false
        }} />
    </FavouriteStackNavigator.Navigator>
  )
}

const MoreStackScreen = (props) => {
  return (
    <NewDrawerScreen.Navigator initialRouteName=''>
      <NewDrawerScreen.Screen
        name='MoreScreen'
        component={MoreScreen}
        options={{
          headerShown: false
        }} />
      <NewDrawerScreen.Screen 
      name='ProfileScreen'
      component={ProfileAuthStackNavigator}
      options={{
        headerShown: false
      }} /> 
      <NewDrawerScreen.Screen
        name='ProfileFormScreen'
        component={ProfileFormScreen}
        options={{
          headerShown: false
        }} />
      <NewDrawerScreen.Screen
        name='BeautyPay'
        component={MoreDrawerStackNavigator}
        options={{
          headerShown:false
        }}  />
      <NewDrawerScreen.Screen
        name='PaymentScreen'
        component={PaymentScreen}
        options={{
          headerShown: false
        }}  />
      <NewDrawerScreen.Screen
      name='DebitCardScreen'
      component={DebitCardScreen}
      options={{
        headerShown: false
      }}  />
      <NewDrawerScreen.Screen
        name='LocationScreen'
        component={LocationScreen}
        options={{
          headerShown: false
        }} 
      />
      <NewDrawerScreen.Screen
        name='SelectLocationScreen'
        component={SelectLocationScreen}
        options={{
          headerShown: false
        }} />
    </NewDrawerScreen.Navigator>
  )
}

const MoreDrawerStackNavigator = (props) => {
  return (
    <MoreDrawerStack.Navigator initialRouteName='BeautyPayScreen'>
    <MoreDrawerStack.Screen
      name='BeautyPayScreen'
      component={BeautyPayScreen}
      options={{
        headerShown: false,
      }}
    />
  </MoreDrawerStack.Navigator>
  )}

const SplashStackkNavigator = (props) => {
  return (
    <SplashStack.Navigator initialRouteName='BeforeSplash'>
      <SplashStack.Screen
        name='BeforeSplash'
        component={BeforeSplash}
        options={{
          headerShown: false,
        }}
      />
      <SplashStack.Screen
        name='SplashScreenMain'
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <SplashStack.Screen
        name='SplashScreenSecond'
        component={SplashScreenSecond}
        options={{
          headerShown: false,
        }}
      />
      <SplashStack.Screen
        name='SplashScreenThird'
        component={SplashScreenThird}
        options={{
          headerShown: false,
        }}
      />
    </SplashStack.Navigator>
  );
};

const HomeStackNavigator = (props) => {
  return (
    <HomeStack.Navigator initialRouteName='HomeScreen'>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name='CreateAppointmentScreen'
        component={CreateAppointmentScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name='ServiceScreen'
        component={ServiceScreen}
        options={{
          headerShown: false
        }} />
      <HomeStack.Screen
        name='ServiceTypeScreen'
        component={ServiceTypeScreen}
        options={{
          headerShown: false
        }}  />
      <HomeStack.Screen
        name='ServiceBookingScreen'
        component={ServiceBookingScreen}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarButton: (props) => null,
        }}  />
      <HomeStack.Screen
        name='ConfirmBookingScreen'
        component={ConfirmBookingScreen}
        options={{
          headerShown: false
        }}  />
      <HomeStack.Screen
       name='RecipeScreen'
       component={RecipeScreen}
       options={{
         headerShown:false,
         tabBarVisible: false,
       }}  />
       <HomeStack.Screen
        name='ProfessionalsScreen'
        component={ProfessionalsScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ProfileScreen"
        component={ProfileAuthStackNavigator}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="SelectLocationScreen"
        component={SelectLocationScreen}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="ViewProfileFreelancer"
        component={ViewProfileFreelancer}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="ShoopingBag"
        component={ShoopingBag}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="FreelancerScreen"
        component={FreelancerScreen}
        options={{
          headerShown: false,
        }} />
      <HomeStack.Screen
        name="FreelancerReviews"
        component={FreelancerReviews}
        options={{
          headerShown: false,
        }} />
    </HomeStack.Navigator>
  );
};

const PromotionsStackNavigator = (props) => {
  return (
    <PromotionsStack.Navigator initialRouteName='Deals'>
      <PromotionsStack.Screen
        name='Deals'
        component={Deals}
        options={{
          headerShown: false,
        }}
      />
      <PromotionsStack.Screen
        name='FreelancerScreen'
        component={FreelancerScreen}
        options={{
          headerShown: false
        }} />
      <PromotionsStack.Screen
        name='FreelancerReviews'
        component={FreelancerReviews}
        options={{
          headerShown: false
        }} />
    </PromotionsStack.Navigator>
  );
};

const AppointmentStackNavigator = (props) => {
  return (
    <AppointmentStack.Navigator initialRouteName='BookingScreen'>
      <AppointmentStack.Screen
        name='BookingScreen'
        component={BookingScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppointmentStack.Screen
       name='RecipeScreen'
       component={RecipeScreen}
       options={{
         headerShown:false,
         tabBarVisible: false,
       }}  />
      <AppointmentStack.Screen
       name='ConfirmBookingScreen'
       component={ConfirmBookingScreen}
       options={{
         headerShown:false,
         tabBarVisible: false,
       }}  />
      <AppointmentStack.Screen
       name='PastScreen1'
       component={PastScreen1}
       options={{
         headerShown:false,
         tabBarVisible: false,
       }}  />
      <AppointmentStack.Screen
       name='PastScreen2'
       component={PastScreen2}
       options={{
         headerShown:false,
         tabBarVisible: false,
       }}  />
      <AppointmentStack.Screen
       name='DirectionScreen'
       component={DirectionScreen}
       options={{
         headerShown:false,
         tabBarVisible: false,
       }}  />
    </AppointmentStack.Navigator>
  );
};

const ProfileAuthStackNavigator = (props) => {
  return (
    <ProfileStack.Navigator initialRouteName='ProfileScreen'>
       <NewDrawerScreen.Screen 
      name='ProfileScreen'
      component={ProfileScreen}
      options={{
        headerShown: false
      }} /> 
      <NewDrawerScreen.Screen
        name='ProfileFormScreen'
        component={ProfileFormScreen}
        options={{
          headerShown: false
        }} />
      <ProfileStack.Screen
        name='AuthenticatedProfile'
        component={AuthenticatedProfile}
        options={{
          headerShown: false,
        }}
      />

      <ProfileStack.Screen
        name='UpdateFreelancer'
        component={UpdateFreelancer}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='UpdateCustomer'
        component={UpdateCustomer}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

const MainTabNavigator = (props) => {
  const [initialRoute, setInitialRoute] = useState('Home');
  return (
    <TabStack.Navigator
      initialRouteName={initialRoute}
      backBehavior='none'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = <FontAwesome5 name='home' size={23} color={color} />;
          } else if (route.name === 'Deals') {
            iconName = <FontAwesome5 name='tags' size={23} color={color} />;
          } else if (route.name === 'Booking') {
            iconName = <FontAwesome5 name='calendar' size={23} color={color} />;
          } else if (route.name === 'Favourite') {
            iconName = <FontAwesome5 name='heart' size={23} color={color} />;
          }else if(route.name === 'More') {
            iconName = <FontAwesome5 name='align-left' size={23} color={color} />;
          }

          // You can return any component that you like here!
          // @ts-ignore
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.veryDarkGrey,
        keyboardHidesTabBar: true,
        style: {
          height: 60,

        },
        tabStyle: {
          height: 50,
          backgroundColor: colors.backgroundWhite,
        },
      }}
      labelStyle={{
        fontsize: 25,
        fontWeight: 'bold',
      }}
    >
      {/* <TabStack.Screen name="SplashScreen" options={{
          headerShown: false,
        }} component={SplashScreen}/> */}
      <TabStack.Screen name='Home' options={{
          headerShown: false,
        }} component={HomeScreen} />
      <TabStack.Screen name='Deals'  component={PromotionsStackNavigator} options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarButton: (props) => null,
        }}/>
      <TabStack.Screen
        name='Booking'
        component={AppointmentStackNavigator}
        options={{
          headerShown: false,
        }}
      />

        {/* // <TabStack.Screen name='Profile' component={ProfileAuthStackNavigator} /> */}
        <TabStack.Screen name='Favourite' component={FavouritesScreen} 
         options={{
          headerShown: false,
        }} />
        <TabStack.Screen name='More' component={MoreStackScreen} 
        options={{
          headerShown: false,
        }} />
    </TabStack.Navigator>
  );
};

export const FreelancerNavigator = (props) => {
  const dispatch = useDispatch();
  const [initialRoute, setInitialRoute] = useState('Home');

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

  

  

  }, []);

  return (
    <TabStack.Navigator
      initialRouteName={initialRoute}
      backBehavior='none'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = <FontAwesome5 name='user' size={23} color={color} />;
          } else if (route.name === 'Home') {
            iconName = (
              <FontAwesome name='calendar-plus' size={23} color={color} />
            );
          } else if (route.name === 'Customers') {
            iconName = <FontAwesome name='users' size={23} color={color} />;
          } else if (route.name === 'Availability') {
            iconName = <AntDesign name='calendar' size={23} color={color} />;
          }

          // You can return any component that you like here!
          // @ts-ignore
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.veryDarkGrey,
        keyboardHidesTabBar: true,
        style: {
          height: 60,
        },
        tabStyle: {
          height: 50,
          backgroundColor: colors.backgroundWhite,
        },
      }}
      labelStyle={{
        fontsize: 25,
        fontWeight: 'bold',
      }}
    >
      <TabStack.Screen
        name='Home'
        options={{
          tabBarLabel: 'Bookings',
        }}
        component={BookingsScreen}
      />
      <TabStack.Screen name='Customers' component={CustomersScreens} />

        {/* <TabStack.Screen name='Profile' component={ProfileAuthStackNavigator} /> */}
    
        <TabStack.Screen name='Profile' component={DrawerNavigator} />
    </TabStack.Navigator>
  );
};

export const CustomerNavigator = (props) => {
  const dispatch = useDispatch();
  const [splashLoader, setSplashLoader] = React.useState(true);
  const [initialRoute, setInitialRoute] = useState('Home');

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    setTimeout(async () => {
      setSplashLoader(false)
    }, 5000); 

    // <-- Set this to `5000` ms to hide it after 5 seconds

 
  }, []);

  return (
    <>
    {splashLoader ? <SplashStackkNavigator splashLoader={splashLoader} /> : 
    <TabStack.Navigator
      initialRouteName={initialRoute}
      backBehavior='none'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            // iconName = <FontAwesome5 name='home' size={23} color={color} />;
            iconName = <Image source={require("../../assets/icons/home.png")} size={23} tintColor={color} />;
          } else if (route.name === 'Deals') {
            // iconName = <FontAwesome5 name='tags' size={23} color={color} />;
            iconName = <Image source={require("../../assets/icons/deals.png")} size={23} tintColor={color} />;

          } else if (route.name === 'Booking') {
            // iconName = <FontAwesome5 name='calendar' size={23} color={color} />;
            iconName = <Image source={require("../../assets/icons/booking1.png")} size={23} tintColor={color}  />;

          } else if (route.name === 'Favourite') {
            // iconName = <FontAwesome5 name='heart' size={23} color={color} />;
            iconName = <Image source={require("../../assets/icons/favourite.png")} size={23} tintColor={color}  />;

          }else if(route.name === 'More') {
            iconName = <FontAwesome5 name='align-left' size={18} color={color} />;
            // iconName = <Image source={require("../../assets/icons/home.png")} size={23} tintColor={color}  />;

          }

          // You can return any component that you like here!
          // @ts-ignore
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'grey',
        keyboardHidesTabBar: true,
        style: {
          height: 60,
        },
        tabStyle: {
          height: 50,
          backgroundColor: colors.backgroundWhite,
        },
      }}
      labelStyle={{
        fontsize: 25,
        fontWeight: 'bold',
      }}
    >
      {/* <TabStack.Screen name="SplashScreen" options={{
          headerShown: false,
        }} component={SplashScreen}/> */}
      <TabStack.Screen name='Home' options={{
          headerShown: false,
        }} component={HomeStackNavigator} />
      <TabStack.Screen name='Deals'  component={PromotionsStackNavigator} options={{
          headerShown: false,
          // tabBarVisible: false,
          // tabBarButton: (props) => null,
        }}/>
      <TabStack.Screen
        name='Booking'
        component={AppointmentStackNavigator}
        options={{
          headerShown: false,
        }}
      />

        {/* // <TabStack.Screen name='Profile' component={ProfileAuthStackNavigator} /> */}
        <TabStack.Screen name='Favourite' component={FavouriteScreenStack} 
         options={{
          headerShown: false,
        }} />
        <TabStack.Screen name='More' component={MoreStackScreen} 
        options={{
          headerShown: false,
        }} />
    </TabStack.Navigator>
    }
    </>
  );
};


// export const CustomerNavigator = (props) => {
//   const dispatch = useDispatch();
//   const [splashLoader, setSplashLoader] = React.useState(true);
//   const [initialRoute, setInitialRoute] = useState('Home');

//   useEffect(() => {
//     // Assume a message-notification contains a "type" property in the data payload of the screen to open

//     setTimeout(async () => {
//       setSplashLoader(false)
//     }, 5000); // <-- Set this to `5000` ms to hide it after 5 seconds

 
//   }, []);

//   return (
//     <>
//     {splashLoader ? <SplashStackkNavigator splashLoader={splashLoader} /> : 
//       <MainStackNavigator.Navigator initialRouteName='BottomTab'>
//         <MainStackNavigator.Screen
//           name='BottomTab'
//           component={MainTabNavigator}
//           options={{
//             headerShown: false,
//           }}
//         />
//           <MainStackNavigator.Screen
//           name='Home'
//           component={HomeStackNavigator}
//           options={{
//             headerShown: false,
//           }}
//         />
//     </MainStackNavigator.Navigator>
//     }
//     </>
//   );
// };
