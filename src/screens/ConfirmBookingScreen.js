import React, { useEffect, useRef, useState } from 'react';
import PlainLayout from '../components/PlainLayout';
import {
  HorizontalSwiper,
  ImageSlider,
  ProfAreaContainerHome,
  ServiceCollapsible,
  Title,
} from '../components/ComponentItems';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
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
  Alert ,
  Button,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';
import colors from '../utils/colors';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { useNavigation } from '@react-navigation/native';
import ServiceModal from '../components/ServiceModal';
import Toast from 'react-native-toast-message';

class ConfirmBookingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        paymentModalShow: false,
        bookingShow : false,
        paymentCheck: 'first',
        alertShow: false,
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
    <View style={{width:'100%', height:'100%',position:'relative'}}>
        <ScrollView>
        <View style={{flexDirection:'row',  margin:3,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Nalis</Text>
            
          </View>


            <View style={{margin:14}}>
                    <Text style={{ fontSize:18, color:'#2e1505'}}>Review & Confirm</Text>
                </View>

                <View style={{backgroundColor:'white'}} >

                {/* Start */}
                <View style={{ margin:10}}>
                    <View style={{marginTop:5}}>
                    <Text style={{ fontSize:14, color:'#2e1505',marginVertical:14}}>Booking Location</Text>
                        <Image source={require('../../assets/mapview1.png')} resizeMode='cover'  style={{ width: '100%',height:130 ,borderRadius:6}} />
                        <Text style={{ marginVertical:10,fontSize:11, color:'grey',marginLeft:4}}>283 Upper Richmond Road, London</Text>
                    </View>
                    <View style={{ marginHorizontal:4}}>
                        <Text style={{fontSize:16, color:'#2e1505'}}>11 October 2021 At 11:00 Am</Text>
                        {this.state.locationShow ?
                        <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:5}}>
                            <Text style={{ fontSize:11, color:'grey'}}>45min duration ends at 11:45Am</Text>
                        </View>
                        :
                        <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:5}}>
                            <Text style={{ fontSize:11, color:'grey'}}>45min duration ends at 11:45Am</Text>
                        </View>
                        }
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

            {/* Start Payment Methods */}
            <TouchableOpacity onPress={()=>{
                this.setState({
                    paymentModalShow: true
                })
            }} style={{padding:14,paddingVertical:10,justifyContent:'center',borderColor:'#f8f8f8',borderWidth:1 }}
            >
            <View style={{flexDirection:'row', margin:5, justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems: 'center',}}>
                    
                    <View style={{width:40}}>
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                <Image source={require('../../assets/card.png')}/>
                            </View> 
                        </View>
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Choose payment method</Text>
                            </View> 
                        </View>
                        {/* start second row */}
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
            </View>
            </TouchableOpacity>
            {/* End Payment Methods */}
            {/* Start Booking Notes */}
            <TouchableOpacity onPress={()=>{
                this.setState({
                    bookingShow: true
                })
            }} style={{padding:14,paddingVertical:10,justifyContent:'center',borderColor:'#f8f8f8',borderWidth:1 }}
            >
            <View style={{flexDirection:'row', margin:5, justifyContent:'space-between', alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems: 'center',}}>
                    <View style={{width:40}} >

                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                <Image source={require('../../assets/bookingNotes.png')}/>
                            </View> 
                            </View>
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Add booking notes</Text>
                            </View> 
                        </View>
                        {/* start second row */}
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
            </View>
            </TouchableOpacity>
            {/* End Booking Notes */}
            {/* Start Redeem */}
            <TouchableOpacity onPress={()=>{
                this.setState({
                    redeemShow: true
                })
            }} style={{padding:14,paddingVertical:10,justifyContent:'center',borderColor:'#f8f8f8',borderWidth:1 }}
            >
            <View style={{flexDirection:'row', margin:5, justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems: 'center',}}>
                        <View style={{width:40}} >
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                <Image source={require('../../assets/reedem.png')}/>
                            </View>
                        </View> 
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Redeem Code</Text>
                            </View> 
                        </View>
                        {/* start second row */}
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
            </View>
            </TouchableOpacity>
            {/* End Redeem */}
            <View style={{margin:14,marginBottom:'20%'}}>
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
            {/* Start Footer */}

            {/* <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:'5%', marginLeft:22}}> 
                            <View>
                                <Text style={{ fontSize:10, color:'#2e1505' }}>1 hour 15 mins</Text> 
                                <Text style={{ fontWeight:'bold', alignItems:'center', fontSize:20, color:'#2e1505' }}> $25 </Text> 
                            </View>
                            <TouchableOpacity onPress={()=>{
                                this.setState({
                                    alertShow:true
                                })
                            }} style={{ backgroundColor:'#000000', width:'50%', alignItems:'center', justifyContent:'center', margin:4, borderRadius:5  }}>
                                <Text style={{ fontWeight:'bold', justifyContent:'center', fontSize:16, color:'#fff'}}>Confirm Booking</Text>
                            </TouchableOpacity>
                    </View> */}

                    {/* End Footer */}
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
                        height: '30%',
                        alignItems: 'center',
                        // borderRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        justifyContent: 'flex-start',
                    }}
                    >
                    <View>
                    
                    {/* <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor:'#ffffff', paddingVertical:4, backgroundColor:'red' , alignSelf:'center',}}>
                            <View style={{ justifyContent:'center',}}> 
                                <Text style={{ fontWeight:'bold', fontSize:16, color:'#2e1505'}}>Select Payment Method</Text>
                            </View>
                            <View style={{justifyContent:'center', alignItems:'flex-end',}}>
                            <FontAwesome5 onPress={()=>{this.setState({paymentModalShow:false})}} name='times-circle' size={30} color='#cfcfcf' />
                            </View>
                    </View> */}

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',position:'relative',height:50 }} >
                        <Text style={{color:'black',fontSize:18,width:'100%'}} >Select Payment Method</Text>
                        <Feather onPress={()=>{this.setState({paymentModalShow:false})}} name='x-circle' size={30} color='#cfcfcf' style={{position: 'absolute',top:4,right:0}}/>

                    </View>
                    
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff',  width:'100%', alignSelf:'center', borderRadius:10,borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                    <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between',padding:10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}} >
                        <View style={{width:40}} >
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                <Image source={require('../../assets/card.png')}/>
                            </View>
                        </View> 
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Pay with Debit/Credit card</Text>
                            </View> 
                        </View>    
                            <View style={{justifyContent:'center', justifyContent:'flex-end'}}>
                                <RadioButton
                                    value="first"
                                    status={ this.state.paymentCheck === 'first' ? 'checked' : 'unchecked' }
                                    onPress={() => {this.setState({
                                        paymentCheck:'first'
                                    })}}
                                    
                                />
                            </View>
                           
                        </View>
                    </View>
                    {/* End  */}
                    {/* Start */}
                    <View style={{flexDirection: 'row', backgroundColor:'#ffffff',  width:'100%', alignSelf:'center', borderRadius:10,borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                    <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between',padding:10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}} >
                        <View style={{width:40}} >
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                <Image source={require('../../assets/applePay.png')}/>
                            </View>
                        </View> 
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Pay with Apple pay</Text>
                            </View> 
                        </View>    
                            <View style={{justifyContent:'center', justifyContent:'flex-end'}}>
                                <RadioButton
                                    value="second"
                                    status={ this.state.paymentCheck === 'second' ? 'checked' : 'unchecked' }
                                    onPress={() => {this.setState({
                                        paymentCheck:'second'
                                    })}}
                                    
                                />
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
                        height: '45%',
                        alignItems: 'center',
                        // borderRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        paddingVertical:10,
                        justifyContent: 'flex-start',
                    }}
                    >
                    <View style={{width:'100%'}} >
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',position:'relative',height:50 }} >
                        <Text style={{color:'black',fontSize:18,width:'100%'}} >Add Booking Notes</Text>
                        <Feather onPress={()=>{this.setState({bookingShow:false})}} name='x-circle' size={30} color='#cfcfcf' style={{position: 'absolute',top:4,right:0}}/>

                    </View>
                   {/* Start */}
                   <View style={{ backgroundColor:'#ffffff',  width:'100%', borderRadius:10,}}>
                        <View style={{ width:'100%'}}> 
                            <Text style={{ fontSize:14,  color:'#2e1505',width:'100%',marginBottom:10}}>Enter Notes </Text>
                            <TextInput multiline={true}  style={{padding: 10, backgroundColor:'#f8f8f8' ,width:'100%',height:150, textAlignVertical:'top'}} placeholder="Give me Notes" />
                        </View>
                        <TouchableOpacity style={{alignItems:'center', margin:5}}>
                        <Text style={{color:'white',backgroundColor:'black',marginVertical:6,borderRadius:4,fontSize:16,paddingHorizontal:26,paddingVertical:4}}>Submit</Text>
                        </TouchableOpacity>
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
                        height: '45%',
                        alignItems: 'center',
                        // borderRadius: 10,
                        elevation: 4,
                        flexDirection: 'column',
                        paddingHorizontal: 10,
                        paddingVertical:10,
                        justifyContent: 'flex-start',
                    }}
                    >
                    <View style={{width:'100%'}} >
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',position:'relative',height:50 }} >
                        <Text style={{color:'black',fontSize:18,width:'100%'}} >Redeem Code</Text>
                        <Feather onPress={()=>{this.setState({redeemShow:false})}} name='x-circle' size={30} color='#cfcfcf' style={{position: 'absolute',top:4,right:0}}/>

                    </View>
                   {/* Start */}
                   <View style={{ backgroundColor:'#ffffff',  width:'100%', borderRadius:10,}}>
                        <View style={{ width:'100%'}}> 
                            <Text style={{ fontSize:14,  color:'#2e1505',width:'100%',marginBottom:10}}>Enter Redeem Code </Text>
                            <TextInput multiline={true}  style={{padding: 10, backgroundColor:'#f8f8f8' ,width:'100%', textAlignVertical:'top'}} placeholder="Redeem Code" />
                        </View>
                        <TouchableOpacity style={{alignItems:'center', margin:5}}>
                        <Text style={{color:'white',backgroundColor:'black',marginVertical:6,borderRadius:4,fontSize:16,paddingHorizontal:26,paddingVertical:4}}>Check Code</Text>
                        </TouchableOpacity>
                    </View>
                    {/* End  */}
                    
                    </View>
                    </View>
                </View>
                </Modal>
                {/* Redeem End */}

        <Modal
            visible={this.state.alertShow}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => {
            // dialogVisible;
            }}
                >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}
      >
        
        <TouchableOpacity style={{
            backgroundColor: '#fff',
            width: '90%',
            height: '45%',
            alignItems: 'center',
            borderRadius: 6,
            elevation: 4,
            flexDirection: 'column',
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}
          onPress={()=>{
            this.setState({alertShow:false})
              this.props.navigation.navigate('RecipeScreen')
          }}
        >  
          <Image
            style={{ marginVertical: 20, width: 120, height: 120 }}
            source={require('../../assets/checked1.png')}
          />
          <Text style={{color:'black',fontSize:18}}>Your Booking is Confirmed</Text>
          </TouchableOpacity>
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
                            <TouchableOpacity onPress={()=>{
                                this.setState({alertShow:true})}}
                            style={{width:160, height:35, justifyContent:'center', alignItems:'center', backgroundColor:'#000000', borderWidth:3, borderRadius:4}}>
                                <Text style={{color:'#f8f8f8', fontWeight:'bold',}}>Confirm Booking</Text>
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

export default ConfirmBookingScreen;
