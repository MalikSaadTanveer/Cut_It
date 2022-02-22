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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
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

class ServiceTypeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        images: [
          "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
          'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          ]
          }; 
}

handle_modal = () => {
    this.setState({
        visible: !this.state.visible
    });
    
}

render(){
  return (
    <View style={{width:'98%', height:'87%'}}>
      <View style={{width:'95%', margin:10}}>
      <View style={{flexDirection:'row',  margin:2,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Nails</Text>
          </View>

          <View>
              <Text style={{ fontSize:10 ,color:'black',marginVertical:4,marginHorizontal:15}}>Step 1 of 4</Text>
          </View>

        <Text style={{ fontSize:20 ,color:'black',marginVertical:10,marginHorizontal:15}}>
          Select Service Type
        </Text>
      </View>
      <View>
      <ScrollView style={{backgroundColor:'white',height:'100%',}}>
      <View style={{paddingVertical:20}} >

      
          <View >
            <TouchableOpacity onPress={()=>{
            this.setState({
                visible:true
            })}} style={{flexDirection: 'row', backgroundColor:'#ffffff', marginTop:'4%', width:'90%', alignSelf:'center', borderRadius:6,elevation:3,paddingVertical:4}}
            >
            <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View style={{flexDirection:'row',  justifyContent:'space-between',position:'relative',width: '80%',}}>
                <View style={{justifyContent:'center'}}>  
                    <Text style={{fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                    <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'flex-end',position:'absolute' ,right:10,top:'35%' }}>
                    <FontAwesome5 onPress={()=>{
            this.setState({
                visible:true
            })}} name='angle-right' size={20} color='#e6b952' />
                </View>
            </View>
            </TouchableOpacity>
          </View>


          <View >
          <TouchableOpacity onPress={()=>{
            this.setState({
                visible:true
            })}} style={{flexDirection: 'row', backgroundColor:'#ffffff', marginTop:'4%', width:'90%', alignSelf:'center', borderRadius:6,elevation:3,paddingVertical:4}}
            >
            <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View style={{flexDirection:'row',  justifyContent:'space-between',position:'relative',width: '80%',}}>
                <View style={{justifyContent:'center'}}>  
                    <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                    <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'flex-end', position:'absolute' ,right:10,top:'35%' }}>
                    <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                </View>
            </View>
            </TouchableOpacity>
          </View>


          
          <View >

          <TouchableOpacity onPress={()=>{
            this.setState({
                visible:true
            })}} style={{flexDirection: 'row', backgroundColor:'#ffffff', marginTop:'4%', width:'90%', alignSelf:'center', borderRadius:6,elevation:3,paddingVertical:4}}
            >
            <Image source={require('../../assets/waxing.png')} style={{ width: 50, height: 50, borderRadius: 20/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View style={{flexDirection:'row',  justifyContent:'space-between',position:'relative',width: '80%',}}>
                <View style={{justifyContent:'center'}}>  
                    <Text style={{ fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Manicure </Text>
                    <Text style={{ fontSize:10, color:'#2e1505'}}>Make your hands on fingurenails and look </Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'flex-end',  position:'absolute' ,right:10,top:'35%' }}>
                    <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                </View>
            </View>
            </TouchableOpacity>
          </View>


        </View>
        
      </ScrollView>
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
                height: '90%',
                alignItems: 'center',
                // borderRadius: 10,
                elevation: 4,
                flexDirection: 'column',
                // paddingHorizontal: 10,
                // justifyContent: 'center',
            }}
            >
            <ScrollView style={{paddingHorizontal:10}}>
            <View style={{paddingHorizontal:10}}>
            <View style={{flexDirection: 'row', marginTop:'5%', justifyContent:'flex-start',  width:'100%', alignItems:'flex-start',position:'relative' }}>
                    <View style={{ justifyContent:'center',width:'92%'}}> 
                        <Text style={{ fontSize:10, color:'grey',marginTop:'4%'}}>Step 2 of 4 </Text> 
                        <Text style={{ fontSize:14, color:'black',marginTop:'1%'}}>Select Manicure Add-Ons </Text>
                    </View>
                    <View style={{justifyContent:'center', position:'absolute',top:0,alignItems:'flex-end', right:0}}>
                        <Feather onPress={()=>{
                this.setState({
                    visible:false
                })
            }} name='x-circle' size={30} color='grey' />
                    </View>
            </View>
            <View style={{width:'100%',marginTop:'6%',}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between',marginBottom:'3%'}}> 
                    <Text style={{fontSize:12,color:'black' }}>Manicure </Text> 
                    <View style={{backgroundColor:'#e4b343', width:'12%', alignItems:'center',borderRadius:2}}>
                        <Text style={{ fontWeight:'bold', fontSize:12, color:'white'}}>$25</Text>
                    </View>
                </View>
                <View >
                    <Text style={{ fontSize:10, color:'#2e1505'}}>Cosmetic Treatment of the hands and fingure including trimming and polishing of the nails and removing cuticals</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'5%'}}>
                    <Text style={{  fontSize:12, color:'#2e1505'}}>How many Clients</Text>
                    <RnIncrementDecrementBtn 
                        styleBtn={{backgroundColor:'#fff'}}
                    />
                </View>
            </View>
            <Text style={{fontSize:18, color:'#e4b343'}}>Popular Add-Ons</Text>
            {/* Start */}
            <View style={{width:'100%',marginTop:'3%'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}> 
                    <View>
                        <Text style={{  fontSize:16, color:'#2e1505' }}>Nail Art</Text> 
                        <Text style={{ fontSize:10, color:'#2e1505' }}> +15 minutes </Text> 
                    </View>
                    <View >
                        <Text style={{  alignItems:'center', color:'#2e1505', fontSize:16}}>$25</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', margin:3}}>
                    <Text style={{fontSize:10, width:'65%', color:'#2e1505'}}>Cosmetic Treatment of the hands and fingure including trimming and polishing of the nails and removing cuticals</Text>
                    <RnIncrementDecrementBtn 
                        styleBtn={{backgroundColor:'#fff'}}
                    />
                </View>
            </View>
            {/* End  */}
            {/* Start */}
            <View style={{width:'100%',marginTop:'3%'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}> 
                    <View>
                        <Text style={{  fontSize:16, color:'#2e1505' }}>Nail Art</Text> 
                        <Text style={{ fontSize:10, color:'#2e1505' }}> +15 minutes </Text> 
                    </View>
                    <View >
                        <Text style={{ alignItems:'center', color:'#2e1505', fontSize:16}}>$25</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                    <Text style={{fontSize:10, width:'65%', color:'#2e1505'}}>Cosmetic Treatment of the hands and fingure including trimming and polishing of the nails and removing cuticals</Text>
                    <RnIncrementDecrementBtn 
                        styleBtn={{backgroundColor:'#fff'}}
                    />
                </View>
            </View>
            {/* End  */}
            {/* Start */}
            <View style={{width:'100%',marginTop:'3%'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}> 
                    <View>
                        <Text style={{  fontSize:16, color:'#2e1505' }}>Nail Art</Text> 
                        <Text style={{ fontSize:10, color:'#2e1505' }}> +15 minutes </Text> 
                    </View>
                    <View >
                        <Text style={{  alignItems:'center', color:'#2e1505', fontSize:16}}>$25</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                    <Text style={{fontSize:10, width:'65%', color:'#2e1505'}}>Cosmetic Treatment of the hands and fingure including trimming and polishing of the nails and removing cuticals</Text>
                    <RnIncrementDecrementBtn 
                        styleBtn={{backgroundColor:'#fff'}}
                    />
                </View>
            </View>
            {/* End  */}
            {/* Start */}
            <View style={{width:'100%',marginTop:'3%'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}> 
                    <View>
                        <Text style={{  fontSize:16, color:'#2e1505' }}>Nail Art</Text> 
                        <Text style={{ fontSize:10, color:'#2e1505' }}> +15 minutes </Text> 
                    </View>
                    <View >
                        <Text style={{ alignItems:'center', color:'#2e1505', fontSize:16}}>$25</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                    <Text style={{fontSize:10, width:'65%', color:'#2e1505'}}>Cosmetic Treatment of the hands and fingure including trimming and polishing of the nails and removing cuticals</Text>
                    <RnIncrementDecrementBtn 
                        styleBtn={{backgroundColor:'#fff'}}
                    />
                </View>
            </View>
            {/* End  */}
            {/* Start Footer */}
                {/* <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:'5%'}}> 
                    <View>
                        <Text style={{ fontSize:10, color:'#2e1505' }}>1 hour 15 mins</Text> 
                        <Text style={{  alignItems:'center', color:'#2e1505', fontSize:18 }}> $25.0 </Text> 
                    </View>
                    <View style={{ backgroundColor:'#000000', width:'40%', alignItems:'center', justifyContent:'center', margin:4, borderRadius:5  }}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({visible: false});
                            this.props.navigation.navigate('ServiceBookingScreen')}}>
                            <Text style={{ fontWeight:'bold', justifyContent:'center', fontSize:16, color:'#fff',paddingVertical:'5%'}}>Add To Bag</Text>
                        </TouchableOpacity>
                    </View>
            </View> */}
            {/* End Footer */}
            </View>
            </ScrollView>
            <View style={{flexDirection: 'row',paddingHorizontal:20,paddingVertical:10, justifyContent:'space-between', marginTop:'5%',width:'100%'}}> 
                    <View>
                        <Text style={{ fontSize:10, color:'#2e1505' }}>1 hour 15 mins</Text> 
                        <Text style={{  alignItems:'center', color:'#2e1505', fontSize:18 }}> $25.0 </Text> 
                    </View>
                    <View style={{ backgroundColor:'#000000', width:'40%', alignItems:'center', justifyContent:'center', margin:4, borderRadius:5  }}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({visible: false});
                            this.props.navigation.navigate('ServiceBookingScreen')}}>
                            <Text style={{ fontWeight:'bold', justifyContent:'center', fontSize:16, color:'#fff',paddingVertical:'5%'}}>Add To Bag</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </View>
        </View>
        </Modal>
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

export default ServiceTypeScreen;
