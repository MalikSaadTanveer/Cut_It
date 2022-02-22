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
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  SafeAreaView,
} from 'react-native';
import colors from '../utils/colors';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { useNavigation } from '@react-navigation/native';
import ServiceModal from '../components/ServiceModal';
import Toast from 'react-native-toast-message';

class RecipeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        paymentModalShow: false,
        bookingShow : false,
        redeemShow : false
          }; 
}

handle_modal = () => {
    this.setState({
        visible: !this.state.paymentModalShow
    });
    
}

render(){
  return (
    <View style={{width:'100%', height:'100%'}}>
        <ScrollView>
        <View style={{flexDirection:'row',  margin:3,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Recipt</Text>
            
          </View>
                <View >
                    <Text style={{marginHorizontal:14, fontSize:16, color:'#2e1505'}}>Wednesday, 11 October 2021 At 11:00Am with Thomas Robert</Text>
                    
                <View style={{flexDirection:'row'}}>
                <View style={{marginTop:10,marginLeft:14,backgroundColor:'#ffdd00',paddingLeft:26,paddingRight:16,paddingVertical:2 ,borderRadius:10,position:'relative',flexDirection:'row',}}>
                    {/* <Text style={{fontWeight:'bold', fontSize:12}}>Special Freelance Offer</Text> */}
                    <MaterialIcons
                        name='pending'
                        size={12}
                        color='white'
                        style={{position:'absolute',zIndex:1,top:2,left:3}}
                      />
                    <Text style={{color:'white',fontSize:10}}>Pending</Text>
                </View>
                <View style={{marginTop:10,marginHorizontal:14, flex:1,alignItems:'flex-end', width:'100%'}}>
                    <Text style={{fontSize:12, color:'black'}}><Text style={{color:'grey'}}> ORDER ID </Text>#BAT23456</Text>
                </View>
            </View>


                </View>


                <View style={{width:'100%', height:'100%',backgroundColor:'white',marginTop:26}} >
                {/* Start */}
                <View style={{ margin:14}}>
                <View style={{marginTop:5}}>
                    <Text style={{ fontSize:14, color:'#2e1505',marginVertical:14}}>Booking Location</Text>
                        <Image source={require('../../assets/mapview1.png')} resizeMode='cover'  style={{ width: '100%',height:130 ,borderRadius:6}} />
                        <Text style={{ marginVertical:10,fontSize:11, color:'grey',marginLeft:4}}>283 Upper Richmond Road, London</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'100%',justifyContent:'center'}}>
                        
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DirectionScreen')}
                        style={{alignItems:'center', margin:10}}>
                        <Image source={require('../../assets/direction.png')}/>
                            <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:5}}>
                                <Text style={{ fontSize:12, color:'black'}}>Direction</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ServiceBookingScreen')}}
                        style={{alignItems:'center', margin:10}}>
                        <Image source={require('../../assets/reschedule.png')}/>
                            <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:5}}>
                                <Text style={{ fontSize:12, color:'black'}}>Reschedule</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{alignItems:'center', margin:10}}>
                        {/* <Feather name='plus-circle' size={20} color='#000000' /> */}
                            <Image source={require('../../assets/cancel.png')}/>
                            {/* <FontAwesome5 name='cross' size={30} color='#e6b952' /> */}
                            <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:5}}>
                                <Text style={{ fontSize:12, color:'black'}}>Cancel</Text>
                            </View>
                        </View>

                    </View>
                </View>
            {/* Start Profile Related */}
            <View style={{flexDirection:'row', margin:5,alignItem:'center' , justifyContent:'space-between', margin:'4%',}}>
                <View style={{ justifyContent:'center'}}>
                    <Text style={{ fontSize:14, color:'#000000'}}>Robert Thomas</Text>
                    <Text style={{ fontSize:10, color:'grey'}}>Nail Specialist</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center',}}>
                        <Entypo name="star" color="#e6b952" size={12} />
                        <Entypo name="star" color="#e6b952" size={12} />
                        <Entypo name="star" color="#e6b952" size={12} />
                        <Entypo name="star" color="#e6b952" size={12} />
                        <Entypo name="star" color="#e6b952" size={12} />
                    <Text style={{ fontSize:10, color:'#000000',marginHorizontal:6}}>4.3 Good</Text>
                    <Image source={require('../../assets/avatar1.png')} style={{ width: 40, height:40, borderRadius: 25, borderWidth: 1, borderColor:'#f58742'}} />
                </View>
            </View>
            {/* End Profile Related */}
            {/* Start Add ons */}
            <View style={{ flexDirection:'row',paddingVertical:6,borderTopWidth:1,borderBottomWidth:1, borderTopColor:'#f8f8f8',borderBottomColor:'#f8f8f8' }}>
                        <View style={{ flexDirection:'row', paddingVertical:5,width:'30%',borderRightColor:'lightgrey', borderRightWidth:1,justifyContent:'center',}}>
                          <View style={{justifyContent:'center' }}>
                            <FontAwesome5 name='users' size={15} color='gray' />
                          </View>
                          <View style={{ justifyContent:'center' ,alignItems:'center' }}>
                            <View >
                                <Text style={{color:'#2e1505', fontSize:12}}>Nails</Text>
                            </View>
                            <View >
                              <Text style={{color:'grey', fontSize:10}}>in 10 mins</Text>
                          </View>
                          </View>
                        </View>
                        <View style={{width:'50%',justifyContent:'center', alignItems:'center',borderRightColor:'lightgrey', borderRightWidth:1, }}>
                          <Text style={{color:'#2e1505',fontSize:12}}>Adds-on</Text>
                          <Text style={{color:'grey',fontSize:9,marginRight:5}}>Nails Art, Cell Invem</Text>
                        </View>
                        <View style={{width:"20%",alignItems:"center",justifyContent:'center', alignItems:'center'}}>
                              <Text style={{color:'#2e1505',fontSize:12}}>Clients</Text>
                              <Text style={{color:'grey',fontSize:10}}>2</Text>
                          </View>
                    </View>
            {/* End Add ons */}
            {/* Start Total */}
            <View style={{flexDirection:'row', margin:14, justifyContent:'space-between', marginLeft:'4%'}}>
                <View >
                    <Text style={{ fontSize:10, color:'grey'}}>Taxes</Text>
                    <Text style={{ fontSize:16, fontWeight:'bold', color:'#e8bf62'}}>Total</Text>
                </View>
                <View style={{ alignItems:'center', }}>
                    <Text style={{ fontSize:10, color:'grey'}}>$2.00</Text>
                    <Text style={{ fontSize:16, fontWeight:'bold', color:'#e8bf62'}}>$25</Text>
                </View>
            </View>
            {/* End Total */}

            <View style={{margin:14,marginBottom:'5%'}}>
                <View style={{marginTop:14}} >
                    <Text style={{fontSize:14, color:'#2e1505'}}>What To Expect</Text>
                </View>
                <View style={{marginVertical:6}}>
                    <Text style={{color:'grey',fontSize:11}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Hello industry makers.    
                    </Text>
                </View>
                <View style={{marginTop:14}} >
                    <Text style={{fontSize:14, color:'#2e1505'}}>How to Prepare</Text>
                </View>
                <View style={{marginVertical:6}}>
                    <Text style={{color:'grey',fontSize:11}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Hello industry makers.    
                    </Text>
                </View>
            </View>
            {/* End */}
            <View>
                {/* Payment Modal */}
                <Modal
                visible={this.state.paymentModalShow}
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
                        borderRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                    }}
                    >
                    <View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#ffffff', margin:3, width:'75%', alignSelf:'center', borderRadius:10}}>
                            <View style={{ justifyContent:'center'}}> 
                                <Text style={{ fontWeight:'bold', fontSize:16, color:'#2e1505'}}>Select Payment Method</Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft: 160}}>
                                <FontAwesome5 onPress={()=>{
                        this.setState({
                            paymentModalShow:false
                        })
                    }} name='times-circle' size={30} color='#cfcfcf' />
                            </View>
                    </View>
                    
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <FontAwesome5 name='money' size={30} color='#e6b952' />
                        <View style={{flexDirection:'row', marginLeft:6, justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontSize:14, fontWeight:'bold', color:'#2e1505'}}>Payment with Debit/Credit card </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    </View>
                    </View>
                </View>
                </Modal>
                {/* Payment Modal End */}
                {/* Booking Model */}
                <Modal
                visible={this.state.bookingShow}
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
                        borderRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                    }}
                    >
                    <View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#ffffff', margin:3, width:'75%', alignSelf:'center', borderRadius:10}}>
                            <View style={{ justifyContent:'center'}}> 
                                <Text style={{ fontWeight:'bold', fontSize:16, color:'#2e1505'}}>Select Freelancer</Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft: 160}}>
                                <FontAwesome5 onPress={()=>{
                        this.setState({
                            paymentModalShow:false
                        })
                    }} name='times-circle' size={30} color='#cfcfcf' />
                            </View>
                    </View>
                    {/* Start */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#ffffff', margin:3, alignSelf:'center', borderRadius:10}}>
                        <TouchableOpacity style={{flexDirection: 'row'}}>    
                            <Image source={require('../../assets/avatar.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                            <View style={{  justifyContent:'center'}}> 
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>No Preference</Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Manicure Availabile</Text>
                            </View>
                        </TouchableOpacity>    
                        <View style={{ marginLeft:100, justifyContent:'center'}}>
                            <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            {/* </View> */}
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    </View>
                    </View>
                </View>
                </Modal>
                {/* Booking Modal End */}
                {/* Redeem Model */}
                <Modal
                visible={this.state.redeemShow}
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
                        borderRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                    }}
                    >
                    <View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#ffffff', margin:3, width:'75%', alignSelf:'center', borderRadius:10}}>
                            <View style={{ justifyContent:'center'}}> 
                                <Text style={{ fontWeight:'bold', fontSize:16, color:'#2e1505'}}>Select Freelancer</Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft: 160}}>
                                <FontAwesome5 onPress={()=>{
                        this.setState({
                            paymentModalShow:false
                        })
                    }} name='times-circle' size={30} color='#cfcfcf' />
                            </View>
                    </View>
                    {/* Start */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#ffffff', margin:3, alignSelf:'center', borderRadius:10}}>
                        <TouchableOpacity style={{flexDirection: 'row'}}>    
                            <Image source={require('../../assets/avatar.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                            <View style={{  justifyContent:'center'}}> 
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>No Preference</Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Manicure Availabile</Text>
                            </View>
                        </TouchableOpacity>    
                        <View style={{ marginLeft:100, justifyContent:'center'}}>
                            <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            {/* </View> */}
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff', margin:3, width:'90%', alignSelf:'center', borderRadius:10}}>
                        <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        <View style={{flexDirection:'row',  justifyContent:'space-between'}}>
                            <View style={{justifyContent:'center'}}>  
                                <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                                <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end', marginLeft:'10%'}}>
                                <FontAwesome5 name='angle-right' size={30} color='#e6b952' />
                            </View>
                        </View>
                    </View>
                    {/* End  */}
                    </View>
                    </View>
                </View>
                </Modal>
                {/* Redeem End */}
            </View>
            </View>
        </ScrollView>
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

export default RecipeScreen;
