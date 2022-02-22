// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Button, Text, TouchableOpacity, View, StyleSheet, Image,Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable';
import {
  Avatar,
  HorizontalLine,
  IconButton,
  ImageButton,
  Title,
} from '../components/ComponentItems';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../utils/colors';

const Deals = ({navigation}) => {

    
  useEffect(() => {
    setTimeout(() => {
      //setAnimating(false);
      
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
        <View style={{marginLeft:30, marginVertical:20,}}>
            <Text style={{fontSize:22, color:'#2e1505',}}>Offers</Text>
        </View>

        <View style={{height:"100%",backgroundColor:'#ffffff'}}>


        <View style={[styles.firstRowStyle,styles.Shadow]}  >
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:12}}>
                <View style={{marginTop:6}}>
                    <Text style={{ fontSize:11, color:'#2e1505'}}>Special Freelancer Offer</Text>
                </View>
                <View style={{marginTop:6}}>
                    <Text style={{ fontSize:11, color:'#2e1505'}}>Expiry Date: 24-10-2021</Text>
                </View>
            </View>
            <View style={{margin:10, flexDirection:'row', backgroundColor:'#f8f8f8',}}>
                <View style={{width:'35%', flexDirection:'row',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View style={{margin:10}}>
                        <FontAwesome5 name='users' size={23} color='lightgrey' />
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:12,marginTop:8}}>Nails</Text>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'#2e1505',fontSize:8}}>in 10 min</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width:'35%',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Add-ons</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>Nail Art, Hair Removal</Text>
                    </View>
                </View>
                <View style={{ width:'30%', flexDirection:'row'}}>
                    
                    <View style={{marginTop:10,marginLeft:8,marginRight:2}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:10,marginLeft:8}}>4.3 Good</Text>
                        </View>
                        <View style={{width:'90%',flexDirection:'row'}}>
                        
                         <Entypo
                            name='star'
                            size={10}
                            color={colors.primary}
                        />
                         <Entypo
                            name='star'
                            size={10}
                            color={colors.primary}
                        />
                         <Entypo
                            name='star'
                            size={10}
                            color={colors.primary}
                        />
                         <Entypo
                            name='star'
                            size={10}
                            color={colors.primary}
                        />
                         <Entypo
                            name='star'
                            size={10}
                            color={colors.primary}
                        />
                        </View>

                    </View>
                    <View style={{marginRight:10,marginTop:10}}>
                        <FontAwesome5 name='users' size={23} color='lightgrey' />
                    </View>
                </View>
            </View>
            <View>
                <Text style={{color:'#2e1505',fontSize:12,color:'grey'}}>What's Inside Offer: Lorem Ipsum Date Test Here, New Testing Data is there</Text>
            </View>

                            <View style={{borderColor:'lightgrey',borderBottomWidth:1,height:10,width:'90%',}}><Text></Text></View>



            <View style={{ flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:4}}>
                
                <View style={{alignSelf:'flex-start', marginTop:10}}>
                    <Text style={{color:'#e4b343', fontSize:14, fontWeight:'bold'}}>Discount-45%</Text>
                </View>
                <View style={{backgroundColor:'white', marginTop:4,marginBottom:10}}>
                <Pressable
                        onPress={()=>{navigation.navigate('FreelancerScreen')}}
                        style={styles.buttons}
                    >
                    <Text style={{color:'white'}} >Get Offer</Text>
                    </Pressable>
                </View>
            </View>   
        </View>
      
        <View style={[styles.secondRowStyle,styles.Shadow]}>
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',paddingHorizontal:12}}>
                <View style={{marginTop:6}}>
                    <Text style={{ fontSize:11, color:'#2e1505'}}>Special Freelancer Offer</Text>
                </View>
                <View style={{marginTop:6}}>
                    <Text style={{ fontSize:11, color:'#2e1505'}}>Expiry Date: 24-10-2021</Text>
                </View>
            </View>

            <View style={{marginTop:10, flexDirection:'row', width:'90%', justifyContent:'space-between',backgroundColor:'#f8f8f8'}}>
                <View style={{margin:10, width:'45%', alignItems:'center',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <Text style={{color:'#e4b343', fontSize:18,  color:'#e4b343'}}>SEP1234</Text>
                </View>
                <View style={{margin:10, flexDirection:'row', width:'45%'}}>
                    <FontAwesome5 name='users' size={23} color='gray' />
                    <Text style={{fontSize:14,marginTop:2, left:'35%', color:'#2e1505'}}>Nails</Text>
                </View>
            </View>


            <View style={{ flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:4}}>
                
                <View style={{alignSelf:'flex-start', marginTop:10}}>
                    <Text style={{color:'#e4b343', fontSize:14, fontWeight:'bold'}}>Discount-45%</Text>
                </View>
                <View style={{backgroundColor:'white', marginTop:4,marginBottom:10}}>
                <Pressable
                        onPress={()=>{navigation.navigate('FreelancerScreen')}}
                        style={styles.buttons}
                    >
                    <Text style={{color:'white'}} >Copy</Text>
                    </Pressable>
                </View>
            </View>
            
        </View>
        </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f0f0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  firstRowStyle: {
    borderWidth:2, 
    borderRadius:10,
    borderColor: 'white', 
    shadowColor:'#ffffff',
    width:'90%', 
    alignSelf:'center', 
    alignItems:'center',
    marginTop:20, 
    elevation:14,
    borderShadow:'black',
    backgroundColor: '#ffffff'
  },
  secondRowStyle: {
    borderWidth:2, 
    borderRadius:10,
    borderColor: 'white', 
    shadowColor:'#ffffff',
    elevation:14,
    width:'90%', 
    alignSelf:'center', 
    alignItems:'center',
    marginTop:10, 
    backgroundColor: '#ffffff'
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },

  Shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  buttons:{
      paddingVertical:5,
      borderWidth:1,
      borderRadius:5,
      width:100,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black'
  }
});