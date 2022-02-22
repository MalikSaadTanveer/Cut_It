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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

class PastScreen1 extends React.Component {
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
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Recipt</Text>
            
          </View>


            <View style={{margin:14,marginVertical:4}}>
                    <Text style={{ fontSize:20, color:'#2e1505'}}>10:15</Text>
            </View>
            <View style={{marginHorizontal:14,flexDirection:'row',marginTop:4,marginBottom:8,justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color:'black'}}>Fri,25 Oct 2021</Text>
                        <View style={{marginVertical:4,backgroundColor:'#9ea5b0',paddingLeft:20,paddingRight:10,paddingVertical:2 ,borderRadius:10,position:'relative',flexDirection:'row',width:86}}>
                                <MaterialIcons
                                name='check-circle-outline'
                                size={12}
                                color='white'
                                style={{position:'absolute',zIndex:1,top:3,left:4}}
                                />
                              <Text style={{color:'white',fontSize:11}}>Completed</Text>
                        </View>

                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:17}}>Robert Thomans</Text>
                        <Text style={{fontSize:12, color:'black'}}><Text style={{color:'grey'}}> ORDER ID </Text>#BAT23456</Text>

                    </View>
            </View>

                <View style={{backgroundColor:'white'}} >

                {/* Start */}
                <View style={{ margin:10}}>
                    <View style={{marginTop:5}}>
                    <Text style={{ fontSize:14, color:'#2e1505',marginVertical:14}}>Booking Location</Text>
                        <Image source={require('../../assets/mapview1.png')} resizeMode='cover'  style={{ width: '100%',height:130 ,borderRadius:6}} />
                        <Text style={{ marginVertical:10,fontSize:11, color:'grey',marginLeft:4}}>283 Upper Richmond Road, London. SW15 6SP, England </Text>
                    </View>
                    
                    
            </View>
            {/* Start Profile Related */}
            <View style={{flexDirection:'row',alignItem:'center' , justifyContent:'space-between', margin:'4%',}}>
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


            {/* Start Fedback */}
            <View style={{width:'100%',alignItems:'center',marginVertical:14}}>
                
                <View style={{flexDirection:'row', alignItems:'center',marginBottom:6}}>
                        <Entypo name="star" color="#e6b952" size={14} />
                        <Entypo name="star" color="#e6b952" size={14} />
                        <Entypo name="star" color="#e6b952" size={14} />
                        <Entypo name="star" color="#e6b952" size={14} />
                        <Entypo name="star" color="#e6b952" size={14} />
                </View>
                <Text style={{color:'black',}} >Your feedback</Text>
                <Text style={{fontSize:12}} >He is a professional and very experienced</Text>
                <View style={{flexDirection:'row',marginTop:10}} >
                    <Image source={require('../../assets/avatar2.png')} />
                    <Image source={require('../../assets/avatar2.png')} />
                </View>

            </View>


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

            </View>
        </ScrollView>



        {/* <View style={{flexDirection:'row', justifyContent:'space-between',padding:10,position:'absolute',bottom:0,backgroundColor:'white',width:'100%'}}>
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'grey',fontSize:11}}>1 hour 15 mins</Text>
                                <Text style={{fontSize:15, color:'#2e1505',}}>$25.00</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{
                                console.warn(this.alertShow)
                                this.setState({
                                    alertShow:true
                                })
                                }}
                            style={{width:160, height:35, justifyContent:'center', alignItems:'center', backgroundColor:'#000000', borderWidth:3, borderRadius:4}}>
                                <Text style={{color:'#f8f8f8', fontWeight:'bold',}}>Confirm Booking</Text>
                            </TouchableOpacity>
                        </View> */}
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

export default PastScreen1;
