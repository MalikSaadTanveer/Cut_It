import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Platform } from 'react-native';
// import { useFirebase, useFirestore } from 'react-redux-firebase';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import PrimaryLayout from '../components/PrimaryLayout';
import Logo from '../../assets/avatar.png';
import {
  Button,
  FlatButton,
  HorizontalLine,
} from '../components/ComponentItems';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// import messaging from '@react-native-firebase/messaging';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import colors from '../utils/colors';
// import auth from '@react-native-firebase/auth';
import RNLocation from 'react-native-location';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

GoogleSignin.configure({
  webClientId:
    '116034601653-t6j9pd0usfta62tcnip09gtdpt5l2fr1.apps.googleusercontent.com',
});

const ProfileScreen = (props) => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [deviceToken, setDeviceToken] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // const navigation = useNavigation();


  if (Platform.OS == 'ios') {
    return (
      <PrimaryLayout showDrawer leftContainer title='My Account'>
        <Image style={profileStyles.logo} source={Logo} />
        <View style={profileStyles.buttonContainer}>
          <Button
            primary
            block
            onPress={() => {
              props.navigation.navigate('LoginWithEmail');
            }}
          >
            LOGIN WITH EMAIL
          </Button>
          <Button
            block
            outlined
            medium
            onPress={() => {
              props.navigation.navigate('CCAccNameScreen');
            }}
          >
            CREATE AN ACCOUNT
          </Button>
        </View>
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
        <HorizontalLine>OR</HorizontalLine>
        <View style={profileStyles.loginButtonContainer}>
          <Button
            loading={loadingGoogle}
            outlined
            block
            dark
            medium
            image={require('../../assets/glogo.png')}
            onPress={_googleSignIn}
          >
            CONTINUE WITH
          </Button>
        </View>
        {
          <View style={profileStyles.buttonContainer}>
            <AppleButton
              style={profileStyles.appleButton}
              buttonType={AppleButton.Type.SIGN_IN}
              buttonStyle={AppleButton.Style.BLACK}
              cornerRadius={8}
              onPress={() => onAppleButtonPress()}
            />
          </View>
        }
      </PrimaryLayout>
    );
  } else if (Platform.OS == 'android') {
    return (
      <View style={profileStyles.container}>
        <View style={{ backgroundColor:'#f8f8f8', height:'42%' }}>
          <View style={{flexDirection:'row',  margin:2,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Profile</Text>
          </View>
          <View style={{ alignItems:'center'}}>
          <Image style={{width:80, height:80, borderColor:'#ab814b', borderWidth:5, borderRadius:40, marginVertical:15}} source={require('../../assets/avatar.png')}/>
            {/* <Image style={profileStyles.logo} source={require('../../assets/avatar.png')} /> */}
            <Text style={{ fontSize:20, color:'#2e1505', marginBottom:4}}>Anny Deffiel</Text>
            <Text style={{ fontSize:13, color:'#2e1505', marginBottom:4}}>Female, 25 Years</Text>
            <TouchableOpacity onPress={()=>{
              props.navigation.navigate('ProfileFormScreen')
            }}>
              <Text style={{ fontSize:13, color:'#e6b952', textDecorationLine: 'underline', }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:12}}>
          <Text style={{ fontSize:18, marginHorizontal:"6%", color:'#2e1505',}}>Personal Detail</Text>
          <View style={{flexDirection:'row', marginLeft:'6%', marginTop:'3%'}}>
            <Ionicons style={{ marginTop:0,width:'10%' ,backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:'2%',borderRadius:10}} name='person-outline' size={20} color='#6d7582' />
            <View style={{marginLeft:'3%'}}>
              <Text style={{ fontSize:12, color:'grey'}}>Name</Text>
              <Text style={{ fontSize:12, color:'#2e1505', }}>Jenny Dieffy</Text>
            </View>  
          </View>
          <View style={{flexDirection:'row', marginLeft:'6%', marginTop:'3%'}}>
          <Feather style={{ marginTop:0,width:'10%' ,backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:'2%',borderRadius:10}} name='calendar' size={20} color='#6d7582' />
            <View style={{marginLeft:'3%'}}>
              <Text style={{ fontSize:12, color:'grey'}}>Date of Birth</Text>
              <Text style={{ fontSize:12,  color:'#2e1505'}}>24 March 1998</Text>
            </View>  
          </View>
          <View style={{flexDirection:'row', marginLeft:'6%', marginTop:'3%'}}>
          <MaterialCommunityIcons style={{ marginTop:0,width:'10%' ,backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:'2%',borderRadius:10}} name='email-outline' size={20} color='#6d7582' />
            <View style={{marginLeft:'3%'}}>
              <Text style={{ fontSize:12,  color:'grey'}}>Email</Text>
              <Text style={{ fontSize:12,  color:'#2e1505'}}>jenny123@gmila.com</Text>
            </View>  
          </View>
          <View style={{flexDirection:'row', marginLeft:'6%', marginTop:'3%'}}>
          <Feather style={{ marginTop:0,width:'10%' ,backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:'2%',borderRadius:10}} name='phone-call' size={20} color='#6d7582' />
            <View style={{marginLeft:'3%'}}>
              <Text style={{ fontSize:12, color:'grey'}}>Mobile Number</Text>
              <Text style={{ fontSize:12,  color:'#2e1505'}}>+253 700 1234567</Text>
            </View>  
          </View>
          <View style={{flexDirection:'row', marginLeft:'6%', marginTop:'3%'}}>
          <EvilIcons style={{ marginTop:0,width:'10%' ,backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:'2%',borderRadius:10}} name='location' size={25} color='#6d7582' />
            <View style={{marginLeft:'3%'}}>
              <Text style={{ fontSize:12, color:'grey'}}>Address</Text>
              <Text style={{ fontSize:12,  color:'#2e1505'}}>909 Barkely Ave, Trentorn, New Jersey, 08618</Text>
            </View>  
          </View>
        </View>
      </View>
    );
  }
};

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
    // alignItems:'center'
  },
  logo: {
    // marginBottom: -10,
    // width: '40%',
    // height: '40%',
    width:100,
    height:100,
    borderRadius: 120,
    borderColor:'gray',
    borderWidth:5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  buttonContainer: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginButtonContainer: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  appleButton: {
    width: null, // You must specify a width
    height: 55, // You must specify a height
    borderWidth: 1,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  applebuttonContainer: {
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderColor: 'black',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ProfileScreen;
