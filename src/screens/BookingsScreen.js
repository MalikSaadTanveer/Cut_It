// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Button, ScrollView, Text, TouchableOpacity, View, StyleSheet, Image,Pressable,Modal} from 'react-native';
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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';

const BookingsScreen = ({navigation}) => {

  const [freelancerBooking, setFreelancerBooking] = useState(false)
  const [weeklyBooking, setWeeklyBooking] = useState(false)
  let freelancerCards = [1,2,3]
    
  useEffect(() => {
    setTimeout(() => {
      //setAnimating(false);
      
    }, 5000);

    
  }, []);

  

  return (
    <View style={styles.container}>
      <ScrollView style={{height:'100%'}}>
        
        <View style={{marginLeft:12, marginTop:12, justifyContent:'space-between', flexDirection:'row',height:80,alignItems:'center'}}>
            <Text style={{fontSize:22, color:'#2e1505',marginLeft:5}}>My Booking</Text>
            <View style={{marginLeft:12, marginTop:0, flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>setFreelancerBooking(true)} 
              style={{marginRight:20 ,backgroundColor:'white',padding:8,borderRadius:10}}>
                <FontAwesome5 name='venus' size={18} color='gray' />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setWeeklyBooking(true)}
              style={{marginRight:20,backgroundColor:'white',padding:8,borderRadius:10}}>
                <FontAwesome5 name='calendar' size={18} color='gray' />
              </TouchableOpacity>
            </View>
        </View>
        



        <View style={[styles.firstRowStyle,styles.Shadow]}>
            
            <View style={{flexDirection:'row'}}>
                <View style={{margin:10}}>
                    {/* <Text style={{fontWeight:'bold', fontSize:12}}>Special Freelance Offer</Text> */}
                </View>
                <View style={{marginTop:10,marginHorizontal:10, flex:1,alignItems:'flex-end', width:'100%'}}>
                    <Text style={{fontSize:12, color:'black'}}><Text style={{color:'grey'}}> ORDER ID </Text>#BAT23456</Text>
                </View>
            </View>
            <View style={{margin:10, flexDirection:'row',}}>
                <View style={{width:'80%'}}>
                  {/* Row Start */}
                    <View style={{ flexDirection:'row',marginBottom:5,backgroundColor:'#f5f5f5'}}>
                        <View style={{width:'30%', borderRightColor:'lightgrey', borderRightWidth:1, alignItems:'center',paddingVertical:5 }}>
                          <View>
                              <Text style={{fontSize:13, color:'#2e1505'}}>10:15</Text>
                          </View>
                          <View >
                              <Text style={{fontSize:10, color:'#2e1505'}}>Fri 24 oct 2021</Text>
                          </View>
                        </View>
                        <View style={{width:'65%',display:'flex',justifyContent:'center', alignItems: 'center',}}>
                          <Text style={{  marginLeft:4, color:'#2e1505',fontSize:10}}>Lorem ipsum Data here Lorem ipsum dolor sit hello world </Text>
                        </View>
                    </View>
                    {/* Row End */}
                    {/* Row Start */}
                    <View style={{ flexDirection:'row',backgroundColor:'#f5f5f5'}}>
                        <View style={{ flexDirection:'row', paddingVertical:5,width:'30%',borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center',}}>
                          <View style={{justifyContent:'center' }}>
                            <FontAwesome5 name='users' size={15} color='gray' />
                          </View>
                          <View style={{ justifyContent:'center' ,alignItems:'center' }}>
                            <View >
                                <Text style={{color:'#2e1505', fontSize:12}}>Nails</Text>
                            </View>
                            <View >
                              <Text style={{color:'#2e1505', fontSize:10}}>in 10 mins</Text>
                          </View>
                          </View>
                        </View>
                        <View style={{width:"25%",alignItems:"center",borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center', alignItems:'center'}}>
                              <Text style={{color:'#2e1505',fontSize:12}}>Clients</Text>
                              <Text style={{color:'#2e1505',fontSize:10}}>3</Text>
                          </View>
                        <View style={{width:'40%',justifyContent:'center', alignItems:'center' }}>
                          <Text style={{color:'#2e1505',fontSize:12}}>Adds-on</Text>
                          <Text style={{color:'#2e1505',fontSize:9,marginRight:5}}>Nails Art, Cell Invem</Text>
                        </View>
                    </View>
                    {/* Row End */}
                </View>
                <View style={{ width:'20%', marginTop:4,paddingLeft:15}}>
                    <View >
                      <Image style={{width:45, height:45,borderRadius:5}} source={require('../../assets/avatar.png')}/>
                        {/* <FontAwesome5 name='users' size={18} color='gray' /> */}
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:10,textAlign:'center'}}>Robert Thomas</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingLeft:10}}>
                        <FontAwesome5 name='star' size={10} color='#e4b343' style={{marginTop:2}} />
                            <Text style={{color:'#2e1505',fontSize:10,marginLeft:5}}>4.3</Text>
                        </View>
                    </View>
                   
                </View>
            </View>
            <View style={{ flexDirection:'row', width:'93%', justifyContent:'space-between',paddingBottom:10}}>
                <View style={{alignSelf:'flex-start',}}>
                    <Text style={{color:'#e4b343', fontSize:16,marginTop:8}}>Total $45</Text>
                </View>
                <View >
                <Pressable
                 style={{backgroundColor:'#e4b343',paddingVertical:3,paddingHorizontal:12,borderRadius:4, marginTop:5}}
                  onPress={()=>{navigation.navigate('RecipeScreen')}}>
                 
                    <Text style={{color:'white',fontSize:12}}>View More</Text>
                  </Pressable>
                </View>
            </View>   
        </View>



         <View style={{height:"100%",backgroundColor:'#ffffff'}}>

        <View style={styles.secondRowStyle}>
            
            <View style={{margin:10, flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
                <View >
                    <Text style={{fontWeight:'bold', fontSize:18, color:'#2e1505'}}>Upcoming</Text>
                </View>
                <View >
                <Ionicons name='md-arrow-forward' size={23} color='gray' />
                </View>
            </View>
            <ScrollView horizontal>
              {/* Card Start */}
            <View style={[styles.newRowStyle,styles.Shadow]}>
            
            <View style={{flexDirection:'row'}}>
                <View style={{marginTop:10,marginLeft:10,backgroundColor:'#ffdd00',paddingLeft:20,paddingRight:10,paddingVertical:2 ,borderRadius:10,position:'relative',flexDirection:'row',}}>
                    {/* <Text style={{fontWeight:'bold', fontSize:12}}>Special Freelance Offer</Text> */}
                    <MaterialIcons
                        name='pending'
                        size={12}
                        color='white'
                        style={{position:'absolute',zIndex:1,top:2,left:3}}
                      />
                    <Text style={{color:'white',fontSize:10}}>Pending</Text>
                </View>
                <View style={{marginTop:10,marginHorizontal:8, flex:1,alignItems:'flex-end', width:'100%'}}>
                    <Text style={{fontSize:12, color:'black'}}><Text style={{color:'grey'}}> ORDER ID </Text>#BAT23456</Text>
                </View>
            </View>
            <View style={{margin:10, flexDirection:'row', }}>
                <View style={{width:'85%'}}>
                  {/* Row Start */}
                  <View style={{ flexDirection:'row',marginBottom:5,backgroundColor:'#f5f5f5'}}>
                        <View style={{width:'30%', borderRightColor:'lightgrey', borderRightWidth:1, alignItems:'center',paddingVertical:5 }}>
                          <View>
                              <Text style={{fontSize:13, color:'#2e1505'}}>10:15</Text>
                          </View>
                          <View >
                              <Text style={{fontSize:10, color:'#2e1505'}}>Fri 24 oct 2021</Text>
                          </View>
                        </View>
                        <View style={{width:'65%',display:'flex',justifyContent:'center', alignItems: 'center',}}>
                          <Text style={{  marginLeft:4, color:'#2e1505',fontSize:10}}>Lorem ipsum Data here Lorem ipsum dolor sit hello world </Text>
                        </View>
                    </View>
                    {/* Row End */}
                    {/* Row Start */}
                    <View style={{ flexDirection:'row',backgroundColor:'#f5f5f5'}}>
                        <View style={{ flexDirection:'row', paddingVertical:5,width:'30%',borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center',}}>
                          <View style={{justifyContent:'center' }}>
                            <FontAwesome5 name='users' size={15} color='gray' />
                          </View>
                          <View style={{ justifyContent:'center' ,alignItems:'center' }}>
                            <View >
                                <Text style={{color:'#2e1505', fontSize:12}}>Nails</Text>
                            </View>
                            <View >
                              <Text style={{color:'#2e1505', fontSize:10}}>in 10 mins</Text>
                          </View>
                          </View>
                        </View>
                        <View style={{width:"25%",alignItems:"center",borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center', alignItems:'center'}}>
                              <Text style={{color:'#2e1505',fontSize:12}}>Clients</Text>
                              <Text style={{color:'#2e1505',fontSize:10}}>3</Text>
                          </View>
                        <View style={{width:'40%',justifyContent:'center', alignItems:'center' }}>
                          <Text style={{color:'#2e1505',fontSize:12}}>Adds-on</Text>
                          <Text style={{color:'#2e1505',fontSize:9,marginRight:5}}>Nails Art, Cell Invem</Text>
                        </View>
                    </View>
                    {/* Row End */}
                </View>
                <View style={{ width:'20%', marginTop:4,paddingLeft:8}}>
                    <View >
                      <Image style={{width:45, height:45,borderRadius:5}} source={require('../../assets/avatar.png')}/>
                        {/* <FontAwesome5 name='users' size={18} color='gray' /> */}
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:10,textAlign:'center'}}>Robert Thomas</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingLeft:10}}>
                        <FontAwesome5 name='star' size={10} color='#e4b343' style={{marginTop:2}} />
                            <Text style={{color:'#2e1505',fontSize:10,marginLeft:5}}>4.3</Text>
                        </View>
                    </View>
                   
                </View>
            </View>
            <View style={{ flexDirection:'row', width:'93%', justifyContent:'space-between',paddingBottom:10}}>
                <View style={{alignSelf:'flex-start',}}>
                    <Text style={{color:'#e4b343', fontSize:16,marginTop:8}}>Total $45</Text>
                </View>
                <View>
                <Pressable
                 style={{backgroundColor:'#e4b343',paddingVertical:3,paddingHorizontal:12,borderRadius:4, marginTop:5}}
                  onPress={()=>{navigation.navigate('RecipeScreen')}}>
                 
                    <Text style={{color:'white',fontSize:12}}>View More</Text>
                  </Pressable>
                </View>
            </View>     
        </View>
        {/* Card Ends */}
          {/* Card Start */}
          <View style={[styles.newRowStyle,styles.Shadow]}>
            
            <View style={{flexDirection:'row'}}>
            <View style={{marginTop:10,marginLeft:10,backgroundColor:'#ffdd00',paddingLeft:20,paddingRight:10,paddingVertical:2 ,borderRadius:10,position:'relative',flexDirection:'row',}}>
                    {/* <Text style={{fontWeight:'bold', fontSize:12}}>Special Freelance Offer</Text> */}
                    <MaterialIcons
                        name='pending'
                        size={12}
                        color='white'
                        style={{position:'absolute',zIndex:1,top:2,left:3}}
                      />
                    <Text style={{color:'white',fontSize:10}}>Pending</Text>
                </View>
                <View style={{marginTop:10,marginHorizontal:8, flex:1,alignItems:'flex-end', width:'100%'}}>
                    <Text style={{fontSize:12, color:'black'}}><Text style={{color:'grey'}}> ORDER ID </Text>#BAT23456</Text>
                </View>
            </View>
            <View style={{margin:10, flexDirection:'row', }}>
                <View style={{width:'85%'}}>
                  {/* Row Start */}
                  <View style={{ flexDirection:'row',marginBottom:5,backgroundColor:'#f5f5f5'}}>
                        <View style={{width:'30%', borderRightColor:'lightgrey', borderRightWidth:1, alignItems:'center',paddingVertical:5 }}>
                          <View>
                              <Text style={{fontSize:13, color:'#2e1505'}}>10:15</Text>
                          </View>
                          <View >
                              <Text style={{fontSize:10, color:'#2e1505'}}>Fri 24 oct 2021</Text>
                          </View>
                        </View>
                        <View style={{width:'65%',display:'flex',justifyContent:'center', alignItems: 'center',}}>
                          <Text style={{  marginLeft:4, color:'#2e1505',fontSize:10}}>Lorem ipsum Data here Lorem ipsum dolor sit hello world </Text>
                        </View>
                    </View>
                    {/* Row End */}
                    {/* Row Start */}
                    <View style={{ flexDirection:'row',backgroundColor:'#f5f5f5'}}>
                        <View style={{ flexDirection:'row', paddingVertical:5,width:'30%',borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center',}}>
                          <View style={{justifyContent:'center' }}>
                            <FontAwesome5 name='users' size={15} color='gray' />
                          </View>
                          <View style={{ justifyContent:'center' ,alignItems:'center' }}>
                            <View >
                                <Text style={{color:'#2e1505', fontSize:12}}>Nails</Text>
                            </View>
                            <View >
                              <Text style={{color:'#2e1505', fontSize:10}}>in 10 mins</Text>
                          </View>
                          </View>
                        </View>
                        <View style={{width:"25%",alignItems:"center",borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center', alignItems:'center'}}>
                              <Text style={{color:'#2e1505',fontSize:12}}>Clients</Text>
                              <Text style={{color:'#2e1505',fontSize:10}}>3</Text>
                          </View>
                        <View style={{width:'40%',justifyContent:'center', alignItems:'center' }}>
                          <Text style={{color:'#2e1505',fontSize:12}}>Adds-on</Text>
                          <Text style={{color:'#2e1505',fontSize:9,marginRight:5}}>Nails Art, Cell Invem</Text>
                        </View>
                    </View>
                    {/* Row End */}
                </View>
                <View style={{ width:'20%', marginTop:4,paddingLeft:8}}>
                    <View >
                      <Image style={{width:45, height:45,borderRadius:5}} source={require('../../assets/avatar.png')}/>
                        {/* <FontAwesome5 name='users' size={18} color='gray' /> */}
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:10,textAlign:'center'}}>Robert Thomas</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingLeft:10}}>
                        <FontAwesome5 name='star' size={10} color='#e4b343' style={{marginTop:2}} />
                            <Text style={{color:'#2e1505',fontSize:10,marginLeft:5}}>4.3</Text>
                        </View>
                    </View>
                   
                </View>
            </View>
            <View style={{ flexDirection:'row', width:'93%', justifyContent:'space-between',paddingBottom:10}}>
                <View style={{alignSelf:'flex-start',}}>
                    <Text style={{color:'#e4b343', fontSize:16,marginTop:8}}>Total $45</Text>
                </View>
                <View>
                <Pressable
                 style={{backgroundColor:'#e4b343',paddingVertical:3,paddingHorizontal:12,borderRadius:4, marginTop:5}}
                  onPress={()=>{navigation.navigate('RecipeScreen')}}>
                 
                    <Text style={{color:'white',fontSize:12}}>View More</Text>
                  </Pressable>
                </View>
            </View>     
        </View>
        {/* Card Ends */}
            </ScrollView>
            
            
        </View>
        <View style={styles.thirdRowStyle}>
          <Text style={{ fontSize:18, color:'#2e1505', marginLeft:'4%', marginVertical:4 }}>Past</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('PastScreen1')}
             style={{margin:5, flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
                <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                    <View >
                      <Image style={{width:50, height:40}}  source={require('../../assets/sp1.png')}/>
                    </View>
                    <View>
                      <Text style={{ fontSize:13, color:'#2e1505'}}>5 oct 2021, 10:00 am with Robert</Text>
                      <Text style={{ fontSize:11, color:'grey'}}>Lisa Hair & Beauty 283 Uppar</Text>
                      <Text style={{ fontSize:12, color:'#2e1505'}}>Moucka Bangaal</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                  <FontAwesome5 name='chevron-right' size={15} color='gray' 
                    // onPress={()=>{navigation.navigate('RecipeScreen')}} 
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('PastScreen2')}}
            style={{margin:5, flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
                <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                      <Image style={{width:50, height:40}} source={require('../../assets/sp1.png')}/>
                    </View>
                    <View>
                      <Text style={{ fontSize:13, color:'#2e1505'}}>5 oct 2021, 10:00 am with Robert</Text>
                      <Text style={{ fontSize:11, color:'grey'}}>Lisa Hair & Beauty 283 Uppar</Text>
                      <Text style={{ fontSize:12, color:'#2e1505'}}>Moucka Bangaal</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                  <FontAwesome5 name='chevron-right' size={15} color='gray' 
                    // onPress={()=>{navigation.navigate('RecipeScreen')}}
                     />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('PastScreen2')}}
            style={{margin:5, flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
                <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                      <Image style={{width:50, height:40}} source={require('../../assets/sp1.png')}/>
                    </View>
                    <View>
                    <Text style={{ fontSize:13, color:'#2e1505'}}>5 oct 2021, 10:00 am with Robert</Text>
                      <Text style={{ fontSize:11, color:'grey'}}>Lisa Hair & Beauty 283 Uppar</Text>
                      <Text style={{ fontSize:12, color:'#2e1505'}}>Moucka Bangaal</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                  <FontAwesome5 name='chevron-right' size={15} color='gray' 
                    // onPress={()=>{navigation.navigate('RecipeScreen')}} 
                    />
                </View>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>

                
                {/* Select Freelancer Model */}
                <Modal
                visible={freelancerBooking}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => {
                  setFreelancerBooking(false)
                }}
                >
                <View
                    style={{
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    flex: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)',
                    }}
                >
                    <View
                    style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        height: '75%',
                        alignItems: 'center',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        // paddingHorizontal: 10,
                        justifyContent: 'flex-start',
                    }}
                    >
                    <View style={{paddingHorizontal:10}}>
                          <View style={{flexDirection: 'row', marginTop:'5%', justifyContent:'flex-start',  width:'100%', alignItems:'flex-start',position:'relative',height:35 }}>
                          <View style={{ justifyContent:'center',width:'92%'}}> 
                              <Text style={{ fontSize:14, color:'black',marginTop:'1%'}}>Freelancer Service Request </Text>
                          </View>
                                  <View style={{justifyContent:'center', position:'absolute',top:0,alignItems:'flex-end', right:0,zIndex:1}}>
                                      <Feather onPress={()=>setFreelancerBooking(false)} name='x-circle' size={30} color='grey' />
                                  </View>
                          </View>


                          <ScrollView>

                                {
                                  freelancerCards.map(item => (
                                              
                                            <View keyW={item} style={[styles.firstRowStyle,styles.Shadow,{marginBottom:"2%",marginTop:'2%'}]}>
                                              
                                            <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-end',paddingHorizontal:'2%'}}>
                                                  <View style={{marginTop:10,backgroundColor:'#ffdd00',paddingLeft:20,paddingRight:10,paddingVertical:2 ,borderRadius:10,position:'relative',flexDirection:'row',}}>
                                                      {/* <Text style={{fontWeight:'bold', fontSize:12}}>Special Freelance Offer</Text> */}
                                                      <MaterialIcons
                                                          name='pending'
                                                          size={12}
                                                          color='white'
                                                          style={{position:'absolute',zIndex:1,top:2,left:3}}
                                                        />
                                                      <Text style={{color:'white',fontSize:10}}>Pending</Text>
                                                  </View>
                                                  
                                              </View>
                                              <View style={{margin:10, flexDirection:'row',}}>
                                                  <View style={{width:'80%'}}>
                                                    {/* Row Start */}
                                                      <View style={{ flexDirection:'row',marginBottom:5,backgroundColor:'#f5f5f5'}}>
                                                          <View style={{width:'30%', borderRightColor:'lightgrey', borderRightWidth:1, alignItems:'center',paddingVertical:5 }}>
                                                            <View>
                                                                <Text style={{fontSize:13, color:'#2e1505'}}>10:15</Text>
                                                            </View>
                                                            <View >
                                                                <Text style={{fontSize:10, color:'#2e1505'}}>Fri 24 oct 2021</Text>
                                                            </View>
                                                          </View>
                                                          <View style={{width:'65%',display:'flex',justifyContent:'center', alignItems: 'center',}}>
                                                            <Text style={{  marginLeft:4, color:'#2e1505',fontSize:10}}>Lorem ipsum Data here Lorem ipsum dolor sit hello world </Text>
                                                          </View>
                                                      </View>
                                                      {/* Row End */}
                                                      {/* Row Start */}
                                                      <View style={{ flexDirection:'row',backgroundColor:'#f5f5f5'}}>
                                                          <View style={{ flexDirection:'row', paddingVertical:5,width:'30%',borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center',}}>
                                                            <View style={{justifyContent:'center' }}>
                                                              <FontAwesome5 name='users' size={15} color='gray' />
                                                            </View>
                                                            <View style={{ justifyContent:'center' ,alignItems:'center' }}>
                                                              <View >
                                                                  <Text style={{color:'#2e1505', fontSize:12}}>Nails</Text>
                                                              </View>
                                                              <View >
                                                                <Text style={{color:'#2e1505', fontSize:10}}>in 10 mins</Text>
                                                            </View>
                                                            </View>
                                                          </View>
                                                          <View style={{width:"25%",alignItems:"center",borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center', alignItems:'center'}}>
                                                                <Text style={{color:'#2e1505',fontSize:12}}>Clients</Text>
                                                                <Text style={{color:'#2e1505',fontSize:10}}>3</Text>
                                                            </View>
                                                          <View style={{width:'40%',justifyContent:'center', alignItems:'center' }}>
                                                            <Text style={{color:'#2e1505',fontSize:12}}>Adds-on</Text>
                                                            <Text style={{color:'#2e1505',fontSize:9,marginRight:5}}>Nails Art, Cell Invem</Text>
                                                          </View>
                                                      </View>
                                                      {/* Row End */}
                                                  </View>
                                                  <View style={{ width:'20%', marginTop:4,paddingLeft:15}}>
                                                      <View >
                                                        <Image style={{width:45, height:45,borderRadius:5}} source={require('../../assets/avatar.png')}/>
                                                          {/* <FontAwesome5 name='users' size={18} color='gray' /> */}
                                                      </View>
                                                      <View >
                                                          <View>
                                                              <Text style={{color:'#2e1505',fontSize:10,textAlign:'center'}}>Robert Thomas</Text>
                                                          </View>
                                                          <View style={{flexDirection:'row',paddingLeft:10}}>
                                                          <FontAwesome5 name='star' size={10} color='#e4b343' style={{marginTop:2}} />
                                                              <Text style={{color:'#2e1505',fontSize:10,marginLeft:5}}>4.3</Text>
                                                          </View>
                                                      </View>
                                                    
                                                  </View>
                                              </View>
                                              <View style={{ flexDirection:'row', width:'93%', justifyContent:'space-between',paddingBottom:10}}>
                                                  <View style={{alignSelf:'flex-start',}}>
                                                      <Text style={{color:'#e4b343', fontSize:14,marginTop:8}}>Total $45</Text>
                                                  </View>
                                                  <View style={{flexDirection:'row'}} >
                                                  <Pressable
                                                  style={{backgroundColor:'#e4576f',paddingVertical:2,paddingHorizontal:16,borderRadius:4, marginTop:5,marginRight:4}}
                                                    onPress={()=>{setFreelancerBooking(false)}}>
                                                  
                                                      <Text style={{color:'white',fontSize:11}}>Decline</Text>
                                                    </Pressable>
                                                  <Pressable
                                                  style={{backgroundColor:'#31df88',paddingVertical:2,paddingHorizontal:16,borderRadius:4, marginTop:5}}
                                                    onPress={()=>{
                                                      setFreelancerBooking(false)
                                                      navigation.navigate('ConfirmBookingScreen')}}>
                                                  
                                                      <Text style={{color:'white',fontSize:11}}>Accept</Text>
                                                    </Pressable>
                                                  </View>
                                              </View>   
                                          </View>

                                  ))
                                }
          


                          </ScrollView>
            
                  
                  
                  
                  
                  
                  
                  </View>


                    </View>
              </View>
          </Modal>    

          






          <Modal
                visible={weeklyBooking}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => {
                  setWeeklyBooking(false)
                }}
                >
                <View
                    style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    flex: 1,
                    backgroundColor: 'rgba(52, 52, 52, 0.6)',
                    paddingHorizontal:10,
                    }}
                >
                    <View
                    style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        height: '50%',
                        alignItems: 'center',
                        borderRadius:10,
                        elevation: 4,
                        flexDirection: 'column',
                        // paddingHorizontal: 10,
                        justifyContent: 'flex-start',
                        position:'relative'
                    }}
                    >
                                  <View style={{justifyContent:'center', position:'absolute',top:-40,alignItems:'flex-end',zIndex:1,backgroundColor:'white',borderRadius:15}}>
                                      <Feather onPress={()=>setWeeklyBooking(false)} name='x-circle' size={30} color='black' />
                                  </View>
                    
                    
                                  <Text style={{color:'black',paddingVertical:'2%'}} >Weekly Booking View</Text>

                                  <ScrollView style={{width:'100%',paddingBottom:10}}>
                                        

                                  <View style={{width:'100%', height:'90%',paddingLeft:'2%'}}>     
                                        <View style={{flexDirection:'row',justifyContent:'flex-start',width:'100%'}}>
                                              <View style={{width:'12%',marginHorizontal:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>2021</Text>
                                                <Text style={{color:'black',fontSize:11}} >OCT</Text>
                                              </View>

                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>MON</Text>
                                                <Text style={{color:'black',fontSize:11}} >1</Text>
                                              </View>
                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>TUE</Text>
                                                <Text style={{color:'black',fontSize:11}} >2</Text>
                                              </View>
                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>WED</Text>
                                                <Text style={{color:'black',fontSize:11}} >3</Text>
                                              </View>
                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>THU</Text>
                                                <Text style={{color:'black',fontSize:11}} >4</Text>
                                              </View>
                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>FRI</Text>
                                                <Text style={{color:'black',fontSize:11}} >5</Text>
                                              </View>
                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>SAT</Text>
                                                <Text style={{color:'black',fontSize:11}} >6</Text>
                                              </View>
                                              <View style={{width:'12%',marginRight:1,backgroundColor:'#ececec',paddingVertical:'2%',alignItems:'center',borderRadius:2}} >
                                                <Text style={{color:'grey',fontSize:10}}>SUN</Text>
                                                <Text style={{color:'black',fontSize:11}} >7</Text>
                                              </View>

                                        </View>



                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >10:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>



                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >11:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>






                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >12:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>








                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >13:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>







                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >14:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>





                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >15:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>







                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >16:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>






                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >17:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>






                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >18:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>





                                        <View style={{width:'100%',flexDirection:'row',}} >
                                            <View style={{backgroundColor:'#ececec',width:'12%',marginHorizontal:1,marginTop:1,alignItems:'center',justifyContent:'center'}} >
                                              <Text style={{fontSize:10}} >19:00</Text>
                                            </View>

                                            <View style={{width:'100%',}} >
                                                
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  


                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>    
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View> 
                                              
                                              <View style={{flexDirection:'row',width:'100%'}} >  
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                                <View style={{width:'12%',marginRight:1,marginTop:1,backgroundColor:'#f6f6f6',height:20,}} >
                                                </View>
                                              </View>  

                                            </View>

                                        </View>

                                      </View> 
                                  </ScrollView>



                    </View>
                </View>

             </Modal>       


    </View>






  );
};


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
    width:'93%', 
    alignSelf:'center', 
    alignItems:'center',
    marginTop:5, 
    elevation:14,
    marginBottom:20,
    backgroundColor: '#ffffff'
  },
  newRowStyle: {
    borderWidth:2, 
    borderRadius:10,
    borderColor: 'white', 
    shadowColor:'#ffffff',
    width:300,
    marginRight:10, 
    marginLeft:10, 
    marginBottom:10, 
    alignSelf:'center', 
    alignItems:'center',
    marginTop:5, 
    elevation:14,
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
    // alignItems:'center',
    marginTop:10, 
    backgroundColor: '#ffffff',
    marginBottom:'2%'
  },
  thirdRowStyle: {
    borderWidth:2, 
    borderRadius:10,
    borderColor: 'white', 
    shadowColor:'#ffffff',
    elevation:10,
    width:'90%', 
    alignSelf:'center', 
    // alignItems:'center',
    marginTop:5, 
    backgroundColor: '#ffffff',
    marginBottom:'2%'
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  Shadow: {
    elevation:14,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
});

export default BookingsScreen;
