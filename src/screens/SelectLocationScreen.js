import React, { useEffect, useRef, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
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

class SelectLocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        paymentModalShow: false,
        bookingShow : false,
        redeemShow : false,
        addCredit : false
          }; 
}

handle_modal = () => {
    this.setState({
        visible: !this.state.paymentModalShow
    });
    
}

render(){
  return (
    <View style={{width:'100%', height:'100%',backgroundColor:'white'}}>
        <ScrollView>
        <View style={{ margin:10, backgroundColor:'#f8f8f8'}}>
                <View style={{flexDirection:'row',  margin:2,justifyContent:'flex-start' ,margin:16}}>
                    <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}} 
                    style={{backgroundColor:'white',padding:4,borderRadius:10}}>
                    <AntDesign name='arrowleft' size={25} color='black'/>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:12,marginVertical:6}}>
                    <Text style={{fontWeight:'bold', fontSize:18, color:'#2e1505'}}>Location</Text>
                </View>
            </View>
               
                {/* Start */}
                <View style={homescreenStyles.secondRowStyle}>
                    {/* Start here record */}
                    <View style={{width:'100%'}}>
                <View style={{flexDirection:'row', margin:10}}>
                    <View style={{width:40}}>
                    <Entypo style={{ marginTop:0,
                    backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:2,borderRadius:5,height:36,marginRight:6}} 
                    name='location-pin' size={30} color='#e4b343' />
                    </View>
                    <View>
                        <Text style={{ color:'#2e1505', fontSize:14}}> Uppar Richmond Road, London </Text>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{color:'#e6b952', fontSize:12,margin:4}}> Edit Location </Text>
                            <FontAwesome5 name='angle-down' size={18} color='#e6b952' style= {{marginTop:3}} />
                        </View>
                    </View>
                </View>
               
               
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
              
              <TouchableOpacity >
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="my-location" color='#e6b952' size={14} style={{marginLeft:10}}/>
                    <Text style={{color:'#e6b952',fontSize:12,marginLeft:10}}>Use Current Location</Text>
                </View>
            </TouchableOpacity>

            </View>
            <ScrollView horizontal style={{marginTop:20}}>
                    <Image source={require('../../assets/mapview1.png')} resizeMode='cover'  style={{ width: 550, height: 260}} />
                    </ScrollView>
                    <Text style={{fontSize:16, color:'#2e1505',alignSelf:'flex-start',marginLeft:10,marginTop:'6%',marginBottom:'2%'}}>Confirm Location</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{
                            this.setState({
                                addCredit : !this.state.addCredit
                            })
                        }}>
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
                    <TouchableOpacity  onPress={()=>{ this.props.navigation.goBack()}}
                    style={{backgroundColor:'#000000', justifyContent:'center', marginVertical: 10, width:180, height:40, alignSelf:'center', borderRadius:6}}>
                            <Text style={{alignSelf:'center', color:'white'}}>Confiorm Location</Text>
                        </TouchableOpacity>
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
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        backgroundColor:'#f8f8f8'
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
        alignSelf:'center',
        width:'95%', 
        marginTop:5, 
        // elevation:14,
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

export default SelectLocationScreen;
