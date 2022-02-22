import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
// import { useFirebase, useFirestore } from 'react-redux-firebase';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import Logo from '../../assets/avatar.png';
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
import { Button, Input, Title, FlatButton,
    HorizontalLine } from '../components/ComponentItems';
// import { Formik } from 'formik';
import PrimaryLayout from '../components/PrimaryLayout';
import RNLocation from 'react-native-location';
// import * as yup from 'yup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// GoogleSignin.configure({
//   webClientId:
//     '116034601653-t6j9pd0usfta62tcnip09gtdpt5l2fr1.apps.googleusercontent.com',
// });

const ProfileFormScreen = (props) => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [deviceToken, setDeviceToken] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // const navigation = useNavigation();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });


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
        <View style={{ backgroundColor:'#f8f8f8', paddingVertical:10 }}>
        <View style={{flexDirection:'row',  margin:2,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ props.navigation.goBack()}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Profile</Text>
          </View>
          <View style={{ alignItems:'center',marginVertical:15,}}>
          <View style={{position:'relative'}}>
            
              <Feather name='camera' size={16} color='white' style={{position:'absolute',zIndex:1,bottom:0,right:0,backgroundColor:'#e4b343'
              ,padding:6,borderRadius:50,borderColor:'white',textAlign:'center',}} />
              <Image style={{width:80, height:80, borderColor:'#e4b343', borderWidth:3, borderRadius:40, marginTop:15}} source={require('../../assets/avatar.png')}/>
            </View>
            <Text style={{ fontSize:18, color:'#2e1505',marginTop:15}}>Annie Duffy</Text>
            <Text style={{ fontSize:12, color:'#e7be61',marginTop:6}}>Female, 25 Years</Text>
          </View>
        </View>
        
        <ScrollView style={{backgroundColor:'white',}}>
        <SafeAreaView style={{marginTop:20,}}>
            <Text style={{ fontSize:10, marginLeft:20, fontSize:12, color:'black', marginTop:5}}>First Name</Text>
            <TextInput
                style={profileStyles.input}
                value=''
                placeholder="Annie"
                placeholderTextColor='grey'
                style={{border:'none',backgroundColor:'#f8f8f8',marginHorizontal:20,paddingHorizontal:10,padding:5,marginTop:5,color:'black'}}
            />
            <Text style={{ fontSize:10, marginLeft:20, fontSize:12, color:'black', marginTop:5}}>Last Name</Text>
            <TextInput
                style={profileStyles.input}
                value=''
                placeholder="Duffy"
                placeholderTextColor='grey'
                style={{border:'none',backgroundColor:'#f8f8f8',marginHorizontal:20,paddingHorizontal:10,padding:5,marginTop:5,color:'black'}}
            />
            <View style={{flexDirection:'row',width:'100%'}}>
                <View style={{width:'50%'}}>
                <Text style={{ fontSize:10, marginLeft:20, fontSize:12, color:'black', marginTop:5}}>Gender</Text>
                <TextInput
                style={profileStyles.input}
                value=''
                placeholder="Female"
                placeholderTextColor='grey'
                style={{border:'none',backgroundColor:'#f8f8f8',marginLeft:20,paddingHorizontal:10,padding:5,marginTop:5,color:'black'}}
            />
                </View>
                <View style={{width:'50%'}}>
                <Text style={{ fontSize:10, marginLeft:10, fontSize:12, color:'black', marginTop:5}}>Date of Birth</Text>
                <TextInput
                style={profileStyles.input}
                value=''
                placeholder="24 March 1997"
                placeholderTextColor='grey'
                style={{border:'none',backgroundColor:'#f8f8f8',marginLeft:10,marginRight:20,paddingHorizontal:10,padding:5,marginTop:5,color:'black'}}
            />
                </View>
            </View>
            <Text style={{ fontSize:10, marginLeft:20, fontSize:12, color:'black', marginTop:5}}>Mobile Number</Text>
            <TextInput
                style={profileStyles.input}
                value=''
                placeholder="+48 44555666595"
                placeholderTextColor='grey'
                style={{border:'none',backgroundColor:'#f8f8f8',marginHorizontal:20,paddingHorizontal:10,padding:5,marginTop:5,color:'black'}}
            />
            <Text style={{ fontSize:10, marginLeft:20, fontSize:12, color:'black', marginTop:5}}>Email Address</Text>
            <TextInput
                style={profileStyles.input}
                value=''
                placeholder="annieduffy24@gmail.com"
                placeholderTextColor='grey'
                style={{border:'none',backgroundColor:'#f8f8f8',marginHorizontal:20,paddingHorizontal:10,padding:5,marginTop:5,color:'black'}}
            />
            <TouchableOpacity style={{alignItems:'center',backgroundColor:'black', marginVertical:20, width:'30%', paddingVertical:6, alignSelf:'center',borderRadius:8 }}>
                <Text style={{color:'white',fontSize:16}}>Save</Text>
            </TouchableOpacity>
            </SafeAreaView>
            </ScrollView>
      </View>
    );
  }
};

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#ffffff',
    // backgroundColor:'#f8f8f8'
    backgroundColor:'#f8f8f8'
    // alignItems:'center'
  },
  loginContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    backgroundColor:'#f8f8f8'
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

export default ProfileFormScreen;
