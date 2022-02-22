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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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

class PaymentScreen extends React.Component {
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
    <View style={{width:'99%', height:'100%',}}>
        {/* <ScrollView > */}
        <View style={{flexDirection:'row',  margin:2,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Payments</Text>
          </View>
               
                {/* Start */}
                
                <View style={{ margin:15,}}>
                    <View>
                        <Text style={{ fontSize:18, color:'#2e1505',  }}>Payment Methods</Text>
                    </View> 
                </View>


                <View style={{width:"100%",height:'100%',backgroundColor:'white',paddingHorizontal:15}}>
                
                <View style={[homescreenStyles.secondRowStyle,{borderBottomColor:'#f8f8f8',borderBottomWidth:1}]}>
                    <Text style={{fontSize:16, color:'#2e1505', marginVertical:15}}>Cards</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,alignItems:'center'}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems: 'center',width:'100%',justifyContent:'space-between'}} onPress={()=>{
                            this.props.navigation.navigate('DebitCardScreen')
                        }}>
                        <View style={{flexDirection:'row',alignItems: 'center',}}>
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                <Image source={require('../../assets/card.png')}/>
                            </View> 
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Debit/Credit Card</Text>
                            </View> 
                        </View>
                        {/* start second row */}
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
                        </TouchableOpacity> 

                         {/* end second row */}
                    </View>
                    {/* End Record */}
            
                </View>
                <View style={homescreenStyles.secondRowStyle}>
                <Text style={{fontSize:16, color:'#2e1505', marginVertical:15}}>Wallets</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,alignItems:'center',borderBottomColor:'#f8f8f8',borderBottomWidth:1,paddingBottom:15}}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems: 'center',width:'100%',justifyContent:'space-between'}} onPress={()=>{
                            this.props.navigation.navigate('BeautyPay')
                        }}>

                        <View style={{flexDirection:'row',alignItems: 'center',}}>
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5}}>
                                {/* <MaterialIcons name='account-balance-wallet' size={20} color='#e6b952' /> */}
                                <Image source={require('../../assets/walletBlack.png')}/>
                            </View> 
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Beauty pay</Text>
                            </View> 
                        </View>
                        {/* start second row */}
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
                        </TouchableOpacity> 

                         {/* end second row */}
                    </View>
                    {/* End Record */}
                    {/* Start here record */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,alignItems:'center',borderBottomColor:'#f8f8f8',borderBottomWidth:1,paddingBottom:15}}>
                        <View style={{flexDirection:'row',alignItems: 'center'}} >
                            <View style={{backgroundColor:'#f8f8f8',padding:6,borderRadius:5,paddingVertical:10}}>
                                {/* <MaterialIcons name='account-balance-wallet' size={20} color='#e6b952' /> */}
                                <Image source={require('../../assets/applePay.png')}/>
                            </View> 
                            <View>
                                <Text style={{fontSize:14,  color:'black', marginLeft:10}}>Apple pay</Text>
                            </View> 
                        </View> 
                        {/* start second row */}
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
                         {/* end second row */}
                    </View>
                    {/* End Record */}
            
                </View>
                
            {/* End */}
            <View>
                
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
        {/* </ScrollView> */}
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
      firstRowStyle: {
        borderWidth:2, 
        borderRadius:10,
        borderColor: 'white', 
        shadowColor:'#ffffff',
        width:'95%', 
        alignSelf:'center', 
        alignItems:'center',
        marginTop:5, 
        elevation:14,
        backgroundColor: '#ffffff'
      },
      secondRowStyle: { 
        shadowColor:'#ffffff',
        justifyContent:'space-between',
        width:'100%', 
        marginTop:5, 
        backgroundColor: '#ffffff'
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

export default PaymentScreen;
