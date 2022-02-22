// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator,ImageBackground, View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  HorizontalLine,
  IconButton,
  ImageButton,
  Title,
} from '../components/ComponentItems';
import colors from '../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SplashScreenSecond = ({navigation}) => {

  const dispatch = useDispatch();

  const [loginSession, setIsFetching] = useState(false);

  const total_counts = useSelector((state) => state.total_counts);
  const counter = useSelector((state) => state.counter);

  // const anotherLogin = useSelector((state) => state.anotherLogin);
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  // AsyncStorage.getItem('user_id').then((value) =>
      //   // navigation.replace(value === null ? 'Auth' : 'MainDrawer'),
      //   console.log(result)
      // );
  const fetchUserData = (userId) => {
    console.log("Console of Splsh Screen: "+ JSON.parse(userId));
    if(userId){
    //   navigation.replace('MainDrawer');
    // }
    fetch(BASE_URL+"/user-get", {
      method: 'POST',
      headers: {
          Accept: 'application/json; charset=UTF-8;',
          'Content-Type': 'application/json; charset=UTF-8;'
      },
      body: JSON.stringify({
          id: JSON.parse(userId)
      })
  })
      .then((response) => response.json())
      .then((json) => {
        console.log("json ka data: "+JSON.stringify(json))
          if(json.status == 200){
            // console.log("json ka data: "+JSON.stringify(json.data))
            // dispatch(anotherLogin(json.data));  
            navigation.replace('MainDrawer');
          }
      })
      .catch((error) => {
          console.error(error);
      });
    }else{
      navigation.replace('Auth');
    }
  }     
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
    //   const user_new_id = AsyncStorage.getItem('user_id');
      
    //   console.log("Async Data:  "+JSON.stringify(AsyncStorage.getItem('user_id')));
      
    //   AsyncStorage.getItem('user_id').then((value) =>
    //   fetchUserData(value)
    //   );
    }, 5000);
  }, []);

  return (
    <View  style={{flex:1,width:'100%',paddingHorizontal:1}}>
      <ImageBackground resizeMode='stretch'
      style={{flex:1,width:'100%',justifyContent:'center',alignItems: 'center',position:'relative',}}
      source={require('../../assets/s2bg.jpg')}
      >
      
      <Image 
       source={require('../../assets/s2img.png')} resizeMode='contain' style={{width:'85%',height:'55%'}}  />



      <View style={{width:'100%',alignItems:'center',marginTop:10}}>
        <Text style={{color:'black',fontSize:26,}}>Get Order</Text>
      </View>
      <View style={{width:'90%',alignItems:'center',justifyContent: 'center',paddingHorizontal:'8%'}}>
        <Text style={{color:'grey',fontSize:16,textAlign:'center'}}>After bookings get your services from our partners </Text>
      </View>

      <View style={{flexDirection:'row',width:'90%',alignItems:'center',justifyContent: 'center'}}>
            <View style={[styles.circle,{backgroundColor:'lightgrey'}]}></View>
            <View  style={styles.circle}></View>
            <View style={[styles.circle,{backgroundColor:'lightgrey'}]}></View>
      </View>




      <View style={{position:'absolute', bottom:20,right:20,flexDirection:'row'}}>
        <TouchableOpacity style={{ right:10,flexDirection:'row'}} onPress={()=>navigation.navigate('SplashScreenThird')} >
        <Text style={{color:'white',fontSize:18,marginHorizontal:10,}}>NEXT</Text>
      
      <View >
        <FontAwesome 
                  name='angle-right'
                  size={25}
                  color='white'
                  
                />
        </View>

        </TouchableOpacity>
      </View>



      </ImageBackground>

    </View>
  );
};

export default SplashScreenSecond;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ec1ea5',
  },
  infinity: {
    // flexDirection: 'row',
    width: 300,
    height: 120,
  },
  infinityBefore: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 200,
    width: 0,
    height: 0,
    borderWidth: 150,
    borderColor: "#ec1ea5",
    borderStyle: "solid",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{ rotate: "120deg" }],
  },
  infinityAfter: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderWidth: 20,
    borderColor: "#ec1ea5",
    borderStyle: "solid",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{ rotate: "135deg" }],
  },
  textView: {
    position: "absolute",
    top: 30,
    // borderColor: "#ec1ea5",
    right: 180,
    width: 100,
    height: 50,
    borderWidth: 0,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  circle:{
    width:10,
    height:10,
    backgroundColor: "#e4b343",
    margin:3,
    marginTop:20,
    borderRadius:10
  }
});