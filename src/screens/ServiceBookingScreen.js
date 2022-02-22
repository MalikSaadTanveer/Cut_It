import React, { useEffect, useRef, useState } from 'react';
import PlainLayout from '../components/PlainLayout';
import {
  Button,
  HorizontalSwiper,
  ImageSlider,
  ProfAreaContainerHome,
  ServiceCollapsible,
  Title,
} from '../components/ComponentItems';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import RnIncrementDecrementBtn from './RnIncrementDecrementBtn';
import {
  Platform,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import colors from '../utils/colors';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { useNavigation } from '@react-navigation/native';
import ServiceModal from '../components/ServiceModal';
import Toast from 'react-native-toast-message';

class ServiceBookingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        freelancerShow : false,
        locationShow : false
          }; 
}

handle_modal = () => {
    this.setState({
        visible: !this.state.visible
    });
    
}

render(){
  return (
    <View style={{width:'98%', height:'100%',position:'relative'}}>
        <ScrollView>
        <View style={{flexDirection:'row',  margin:3,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Nails</Text>
            
          </View>

            
            <View style={{marginBottom:'3%'}}>
                    <Text style={{fontWeight:'bold', fontSize:10, color:'#2e1505',marginLeft:14}}>Step 3 of 4</Text>
                    <Text style={{fontSize:20, color:'#2e1505',marginLeft:14}}>Select Date & Time</Text>
                </View>

            <View style={{backgroundColor:'white',height:'100%',width:'100%'}}>    
                {/* Start */}
                <View style={{flexDirection:'row', margin:10}}>
                    <View style={{width:40}}>
                    <Entypo style={{ marginTop:0,
                    backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:2,borderRadius:5,height:36,marginRight:6}} 
                    name='location-pin' size={30} color='#e4b343' />
                    </View>
                    <View>
                        <Text style={{ color:'#2e1505', fontSize:14}}> Uppar Richmond Road, London </Text>
                         <TouchableOpacity onPress={()=>{this.setState({locationShow:!this.state.locationShow })}} >
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color:'#e6b952', fontSize:12,margin:4}}> Edit Location </Text>
                            
                            {!this.state.locationShow ?
                            <FontAwesome5 name='angle-down' size={18} color='#e6b952' style= {{marginTop:3}} /> :
                            <FontAwesome5 name='angle-up' size={18} color='#e6b952' style= {{marginTop:3}} /> }
                        </View>
                        </TouchableOpacity>
                        </View>
                </View>
            {this.state.locationShow ?
                <View style={{marginLeft:14}}>      
                <View style={{position:'relative',width:'95%',marginBottom:10}}>
              <View style={{position:'absolute',zIndex:1,top:6,left:15}}>
              <Feather
                  name='search'
                  size={20}
                  color='#cbced4'

                />
                </View>
              <TextInput
              style={{backgroundColor:'#f8f8f8',color:'black', width:'100%',marginLeft:7,padding:4,borderRadius:6,paddingLeft:35,fontSize:13,}}
              placeholder="Search for hair, makeup and more"
              placeholderTextColor='#cbced4'
              />
              </View>
              
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('SelectLocationScreen')}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="my-location" color='#e6b952' size={14} style={{marginLeft:10}}/>
                    <Text style={{color:'#e6b952',fontSize:12,marginLeft:10}}>Use Current Location</Text>
                </View>
            </TouchableOpacity>



            <Text style={{fontSize:16, color:'#2e1505',alignSelf:'flex-start',marginLeft:10,marginTop:'6%',marginBottom:'2%'}}>Saved Address</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
                        <TouchableOpacity style={{flexDirection:'row'}} >
                    <View style={{width:35}}>
                            <Entypo style={{ marginTop:0,
                            backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:2,borderRadius:5,height:30,marginRight:6}} 
                            name='location-pin' size={22} color='black' />
                    </View>
                            <View>
                                <Text style={{fontSize:14, marginLeft:10, color:'#2e1505'}}>Home Town</Text>
                                <Text style={{fontSize:10, marginLeft:10, color:'grey'}}>283 Uppar Richmond Road, London, SW15 6SP, England</Text>
                            </View> 
                        </TouchableOpacity> 
                    </View>


                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
                    <TouchableOpacity style={{flexDirection:'row'}} 
                        >
                    <View style={{width:35}}>
                            <Entypo style={{ marginTop:0,
                            backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:2,borderRadius:5,height:30,marginRight:6}} 
                            name='location-pin' size={22} color='black' />
                    </View>
                            <View>
                                <Text style={{fontSize:14, marginLeft:10, color:'#2e1505'}}>Home Town</Text>
                                <Text style={{fontSize:10, marginLeft:10, color:'grey'}}>283 Uppar Richmond Road, London, SW15 6SP, England</Text>
                            </View> 
                        </TouchableOpacity> 
                    </View>


                    <Text style={{fontSize:16, color:'#2e1505',alignSelf:'flex-start',marginLeft:10,marginTop:'6%',marginBottom:'2%'}}>Recent Locations</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,marginBottom:30}}>
                        <TouchableOpacity style={{flexDirection:'row'}} >
                            <View style={{width:35,marginTop:2}}>
                                <Fontisto style={{ marginTop:0,
                                backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:2,borderRadius:5,height:30,marginRight:6}} 
                                name='clock' size={22} color='black' />
                            </View>
                            <View>
                                <Text style={{fontSize:14, marginLeft:10, color:'#2e1505'}}>Home Town</Text>
                                <Text style={{fontSize:10, marginLeft:10, color:'grey'}}>283 Uppar Richmond Road, London, SW15 6SP, England</Text>
                            </View> 
                        </TouchableOpacity> 
                    </View>   
                </View>      
                :
                <></>} 
                <View style={{flexDirection:'row', marginLeft:'4%'}}>
                         <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%',marginBottom:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:18,  color:'#2e1505'}}>October</Text>
                                    <Text style={{fontSize:10, marginTop:10,marginLeft:15, color:'#2e1505'}}>Now</Text>
                                </View>
                                {/* <FontAwesome5 name='arrow-right' size={20} color='#e6b952' /> */}
                                <Image source={require('../../assets/arrow-right.png')} resizeMode='contain' style={{width:20,height:20}} />

                            </View>
                </View>   
                <View style={{flexDirection:'row', marginLeft:'2%'}}>
                   <ScrollView horizontal>
                       <TouchableOpacity style={{backgroundColor:'black', alignItems:'center',paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6 }}>
                           <Text style={{color:'#fff'}}>MON</Text>
                           <Text style={{color:'#fff'}}>1</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center',paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>TUE</Text>
                           <Text style={{color:'#000000'}}>2</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>WED</Text>
                           <Text style={{color:'#000000'}}>3</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>THU</Text>
                           <Text style={{color:'#000000'}}>4</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>FRI</Text>
                           <Text style={{color:'#000000'}}>5</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>SAT</Text>
                           <Text style={{color:'#000000'}}>6</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>SUN</Text>
                           <Text style={{color:'#000000'}}>7</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>MON</Text>
                           <Text style={{color:'#000000'}}>8</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center',paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>TUE</Text>
                           <Text style={{color:'#000000'}}>9</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>WED</Text>
                           <Text style={{color:'#000000'}}>10</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>THU</Text>
                           <Text style={{color:'#000000'}}>11</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>FRI</Text>
                           <Text style={{color:'#000000'}}>12</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'#f8f8f8', alignItems:'center', paddingHorizontal:6, paddingVertical:10,margin:10,borderRadius:6}}>
                           <Text style={{color:'#000000'}}>SAT</Text>
                           <Text style={{color:'#000000'}}>13</Text>
                       </TouchableOpacity>
                   </ScrollView>
                </View>  
                <View>
                    <Text style={{ fontSize:14, color:'#2e1505', marginLeft:'4%',marginTop:'8%',marginBottom:'2%'}}>Time</Text>
                </View>

                <View style={{flexDirection:'row', marginLeft:'4%',alignItems:'center',justifyContent:'center'}}>
                   <ScrollView>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#e4b343', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#fff'}}>10:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>10:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>10:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>10:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>11:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>11:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>11:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>11:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>12:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>12:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>12:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>12:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>13:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>13:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>13:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>13:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>14:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>14:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>14:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>14:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>15:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>15:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>15:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>15:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>16:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>16:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>16:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>16:45</Text>
                            </TouchableOpacity>
                       </View>
                       <View style={{flexDirection:'row',marginBottom:'18%'}}>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>17:00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>17:15</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>17:30</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'#f8f8f8', justifyContent:'center', width:70, height:40, alignItems:'center', margin:6,borderRadius:6}}>
                                <Text style={{color:'#000000'}}>17:45</Text>
                            </TouchableOpacity>
                       </View>
                   </ScrollView>
                </View>    
            {/* End */}
            {/* Start Footer */}
            {/* <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:'5%'}}> 
                            <View>
                                <Text style={{ fontSize:10, color:'#2e1505' }}>1 hour 15 mins</Text> 
                                <Text style={{ fontWeight:'bold', alignItems:'center', fontSize:20, color:'#2e1505' }}> $25 </Text> 
                            </View>
                            <TouchableOpacity onPress={()=>{
                                this.setState({
                                    visible:true
                                })
                            }} style={{ backgroundColor:'#000000', width:'50%', alignItems:'center', justifyContent:'center', margin:4, borderRadius:5  }}>
                                <Text style={{ fontWeight:'bold', justifyContent:'center', fontSize:16, color:'#fff'}}>Check Availability</Text>
                            </TouchableOpacity>
                    </View> */}
                    {/* End Footer */}
            <View>
                
                <Modal
                visible={this.state.visible}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => {
                    this.handle_modal();
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
                        height: '50%',
                        alignItems: 'center',
                        // borderRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        // paddingHorizontal: 10,
                        justifyContent: 'flex-start',
                    }}
                    >
                    <View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',position:'relative',height:50,marginTop:10,paddingHorizontal:10 }} >
                        <Text style={{color:'black',fontSize:18,width:'100%'}} >Select Freelancer</Text>
                        <Feather onPress={()=>{this.setState({visible:false})}} name='x-circle' size={30} color='#cfcfcf' style={{position: 'absolute',top:1,right:6}}/>

                    </View>


                    <ScrollView style={{width:'100%',paddingHorizontal:10}}>
                    {/* Start */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'white',width:'95%', margin:3, alignSelf:'center', borderRadius:10,elevation:1}}>
                        <TouchableOpacity style={{flexDirection: 'row',width:'90%'}} onPress={()=>{
                            this.setState({visible:false})
                            this.props.navigation.navigate('ConfirmBookingScreen')
                        }}>    
                            <Image source={require('../../assets/noPreference.png')} style={{ width: 50, height: 50, margin: 6 }} />
                            <View style={{  justifyContent:'center'}}> 
                                <Text style={{  fontSize:14, color:'#2e1505'}}>No Preference</Text>
                                <Text style={{ fontSize:10, color:'grey'}}>Manicure Availabile</Text>
                            </View>
                        </TouchableOpacity>    
                        <View style={{ justifyContent:'center',marginRight:14}}>
                            <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            {/* </View> */}
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}

                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'white',width:'95%', margin:3, alignSelf:'center', borderRadius:10,elevation:1}}>
                         <View style={{width:'80%', flexDirection:'row'}}>
                            <Image source={require('../../assets/avatar1.png')} style={{ width: 60, height: 60, margin: 6,borderWidth:2,borderColor:'pink',borderRadius:50 }} />
                            <View style={{  justifyContent:'center'}}> 
                                <Text style={{  fontSize:12, color:'#2e1505'}}>Robert</Text>
                                <Text style={{ fontSize:10, color:'grey'}}>Nail Specialist</Text>
                                <View style={{flexDirection:'row', alignItems:'center',}}>
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Text style={{ fontSize:10, color:'grey',marginHorizontal:6}}>4.3 Good</Text>
                                </View>
                            </View>
                        </View>    
                        <View style={{ display:'flex', justifyContent:'center',alignItems:'center',paddingRight:10}}>
                            
                        <TouchableOpacity onPress={()=>{
                            this.setState({visible:false})
                            this.props.navigation.navigate('ViewProfileFreelancer')}}>
                            <Text style={{fontSize:11,color:'#e8be60',textDecorationLine:'underline'}}>View Profile</Text>
                            </TouchableOpacity>    

                            <TouchableOpacity onPress={()=>{
                            this.setState({visible:false})
                            this.props.navigation.navigate('ConfirmBookingScreen')}}>    
                            <FontAwesome5 name='angle-right' size={16} color='white' style={{ backgroundColor:'black',paddingVertical:6,justifyContent:'center',alignItems:'center',paddingHorizontal:12,borderRadius:4,marginVertical:10}}/>
                            </TouchableOpacity>    

                            
                            {/* </View> */}
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'white',width:'95%', margin:3, alignSelf:'center', borderRadius:10,elevation:1}}>
                         <View style={{width:'80%', flexDirection:'row'}}>
                            <Image source={require('../../assets/avatar1.png')} style={{ width: 60, height: 60, margin: 6,borderWidth:2,borderColor:'pink',borderRadius:50 }} />
                            <View style={{  justifyContent:'center'}}> 
                                <Text style={{  fontSize:12, color:'#2e1505'}}>Robert</Text>
                                <Text style={{ fontSize:10, color:'grey'}}>Nail Specialist</Text>
                                <View style={{flexDirection:'row', alignItems:'center',}}>
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Text style={{ fontSize:10, color:'grey',marginHorizontal:6}}>4.3 Good</Text>
                                </View>
                            </View>
                        </View>    
                        <View style={{ display:'flex', justifyContent:'center',alignItems:'center',paddingRight:10}}>
                            
                            <TouchableOpacity onPress={()=>{
                                this.setState({visible:false})
                            this.props.navigation.navigate('ViewProfileFreelancer')}}>
                            <Text style={{fontSize:11,color:'#e8be60',textDecorationLine:'underline'}}>View Profile</Text>
                            </TouchableOpacity>  

                            <TouchableOpacity onPress={()=>{
                                this.setState({visible:false})
                            this.props.navigation.navigate('ConfirmBookingScreen')}}>    
                            <FontAwesome5 name='angle-right' size={16} color='white' style={{ backgroundColor:'black',paddingVertical:6,justifyContent:'center',alignItems:'center',paddingHorizontal:12,borderRadius:4,marginVertical:10}}/>
                            </TouchableOpacity>    

                            
                            {/* </View> */}
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'white',width:'95%', margin:3, alignSelf:'center', borderRadius:10,elevation:1}}>
                         <View style={{width:'80%', flexDirection:'row'}}>
                            <Image source={require('../../assets/avatar1.png')} style={{ width: 60, height: 60, margin: 6,borderWidth:2,borderColor:'pink',borderRadius:50 }} />
                            <View style={{  justifyContent:'center'}}> 
                                <Text style={{  fontSize:12, color:'#2e1505'}}>Robert</Text>
                                <Text style={{ fontSize:10, color:'grey'}}>Nail Specialist</Text>
                                <View style={{flexDirection:'row', alignItems:'center',}}>
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Entypo name="star" color="#e6b952" size={12} />
                                    <Text style={{ fontSize:10, color:'grey',marginHorizontal:6}}>4.3 Good</Text>
                                </View>
                            </View>
                        </View>    
                        <View style={{ display:'flex', justifyContent:'center',alignItems:'center',paddingRight:10}}>
                            
                            <TouchableOpacity onPress={()=>{
                                this.setState({visible:false})
                            this.props.navigation.navigate('ViewProfileFreelancer')}}>
                            <Text style={{fontSize:11,color:'#e8be60',textDecorationLine:'underline'}}>View Profile</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>{
                                this.setState({visible:false})
                            this.props.navigation.navigate('ConfirmBookingScreen')}}>    
                            <FontAwesome5 name='angle-right' size={16} color='white' style={{ backgroundColor:'black',paddingVertical:6,justifyContent:'center',alignItems:'center',paddingHorizontal:12,borderRadius:4,marginVertical:10}}/>
                            </TouchableOpacity>    

                            
                            {/* </View> */}
                        </View>
                    </View>
                    </ScrollView>
                    {/* End  */}
                    </View>
                    </View>
                </View>
                </Modal>
            </View>

            </View>    
        </ScrollView>

        <View style={{flexDirection:'row', justifyContent:'space-between',padding:10,position:'absolute',bottom:0,backgroundColor:'white',width:'100%'}}>
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'grey',fontSize:11}}>1 hour 15 mins</Text>
                                <Text style={{fontSize:15, color:'#2e1505',}}>$25.00</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{this.setState({visible:true})}}
                            style={{width:160, height:35, justifyContent:'center', alignItems:'center', backgroundColor:'#000000', borderWidth:3, borderRadius:4}}>
                                <Text style={{color:'#f8f8f8', fontWeight:'bold',}}>Check Availability</Text>
                            </TouchableOpacity>
                        </View>



      </View>
  );
}
};

const homescreenStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
      },
  view: {
    height: 50,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  collapseView: {
    padding: 20,
  },
  iconView: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatContainerFooter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        backgroundColor: colors.backgroundWhite,
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        backgroundColor: colors.backgroundWhite,
        shadowColor: colors.btnTextDark,
        // borderTopWidth: 1,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        elevation: 4,
      },
    }),
    paddingTop: 10,
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },
});

export default ServiceBookingScreen;
