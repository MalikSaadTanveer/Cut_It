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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

class BeautyPayScreen extends React.Component {
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
    <View style={{width:'100%', height:'100%',backgroundColor:'#f8f8f8'}}>
        <ScrollView>
        <View style={{flexDirection:'row',  margin:2,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Beauty Pay</Text>
          </View>
               
                {/* Start */}
                <View style={homescreenStyles.firstRowStyle}>
                    <View>
                        <Text style={{fontSize:12, color:'#2e1505',}}>Available beauty pay balance</Text>
                    </View> 
                    <View>
                        <Text style={{fontSize:10, color:'#2e1505'}}>Today, 16 March 2021</Text>
                    </View> 
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image source={require('../../assets/wallet.png')} resizeMode='contain' style={{marginRight:'2%',marginTop:3,width:28}} />
                        </View>
                        <View>
                            <Text style={{fontSize:30, color:'#2e1505',}}>$6,887<View><Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>.00</Text></View></Text>
                        </View> 
                    </View>                     
                </View>


                <View style={{flexDirection:'row', margin:5, marginTop:20, justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color:'#2e1505',marginVertical:6,fontSize:16,marginLeft:'5%'}}>Recent Transaction</Text>
                    </View> 
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <View>
                            <FontAwesome5 name='search' size={21} color='grey' style={{marginHorizontal:'6%',marginTop:3}}/>
                        </View>
                        <View>
                            <Ionicons name='options' size={25} color='grey'  style={{marginHorizontal:'6%'}}/>
                        </View>
                    </View>
                </View>



                <View style={homescreenStyles.secondRowStyle}>
                    <Text style={{color:'#2e1505',margin:'5%',alignSelf:'flex-start'}}>Today, 25 March 2021</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row',width:'95%',display:'flex',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',}}>
                        <View>
                            <Image source={require('../../assets/avatar1.png')} 
                                style={{ width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        </View> 
                        {/* start second row */}
                        <View style={{margin:9}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:16}}>Annie Duffiey</Text>
                        </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Trans ID # 51007892</Text>
                            </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Pending to pay makeup sepcialist</Text>
                            </View> 
                        </View>
                        </View>
                         {/* end second row */}
                         {/* start third row */}
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View >
                                <Text style={{color:'#2e1505',fontSize:16}}>$45.30</Text>
                            </View> 
                            <View>
                                <Text style={{color:'grey' ,fontSize:12}}>8:30am</Text>
                            </View> 
                        </View>
                         {/* end third row */}
                    </View>
                    {/* End Record */}
                    {/* Start here record */}
                    <View style={{flexDirection:'row',width:'95%',display:'flex',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',}}>
                        <View>
                            <Image source={require('../../assets/avatar1.png')} 
                                style={{ width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        </View> 
                        {/* start second row */}
                        <View style={{margin:9}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:16}}>Annie Duffiey</Text>
                        </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Trans ID # 51007892</Text>
                            </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Pending to pay makeup sepcialist</Text>
                            </View> 
                        </View>
                        </View>
                         {/* end second row */}
                         {/* start third row */}
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View >
                                <Text style={{color:'red',fontSize:16}}>-$45.30</Text>
                            </View> 
                            <View>
                                <Text style={{color:'grey' ,fontSize:12}}>8:30am</Text>
                            </View> 
                        </View>
                         {/* end third row */}
                    </View>
                    {/* End Record */}
                    {/* Start here record */}
                    <View style={{flexDirection:'row',width:'95%',display:'flex',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',}}>
                        <View>
                            <Image source={require('../../assets/avatar1.png')} 
                                style={{ width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        </View> 
                        {/* start second row */}
                        <View style={{margin:9}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:16}}>Annie Duffiey</Text>
                        </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Trans ID # 51007892</Text>
                            </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Pending to pay makeup sepcialist</Text>
                            </View> 
                        </View>
                        </View>
                         {/* end second row */}
                         {/* start third row */}
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View >
                                <Text style={{color:'#2e1505',fontSize:16}}>$45.30</Text>
                            </View> 
                            <View>
                                <Text style={{color:'grey' ,fontSize:12}}>8:30am</Text>
                            </View> 
                        </View>
                         {/* end third row */}
                    </View>
                    {/* End Record */}
                </View>




                <View style={homescreenStyles.secondRowStyle}>
                <Text style={{color:'#2e1505',margin:'5%',marginVertical:'3%',alignSelf:'flex-start'}}>Today, 25 March 2021</Text>
                    {/* Start here record */}
                    <View style={{flexDirection:'row',width:'95%',display:'flex',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',}}>
                        <View>
                            <Image source={require('../../assets/avatar1.png')} 
                                style={{ width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        </View> 
                        {/* start second row */}
                        <View style={{margin:9}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:16}}>Annie Duffiey</Text>
                        </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Trans ID # 51007892</Text>
                            </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:11}}>Refund Amount</Text>
                            </View> 
                        </View>
                        </View>
                         {/* end second row */}
                         {/* start third row */}
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View >
                                <Text style={{color:'green',fontSize:16}}>$45.30</Text>
                            </View> 
                            <View>
                                <Text style={{color:'grey' ,fontSize:12}}>8:30am</Text>
                            </View> 
                        </View>
                         {/* end third row */}
                    </View>
                    {/* End Record */}
                    {/* Start here record */}
                    <View style={{flexDirection:'row',width:'95%',display:'flex',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',}}>
                        <View>
                            <Image source={require('../../assets/avatar1.png')} 
                                style={{ width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        </View> 
                        {/* start second row */}
                        <View style={{margin:9}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:16}}>Annie Duffiey</Text>
                        </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Trans ID # 51007892</Text>
                            </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:11}}>Refund Amount</Text>
                            </View> 
                        </View>
                        </View>
                         {/* end second row */}
                         {/* start third row */}
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View >
                                <Text style={{color:'green',fontSize:16}}>$45.30</Text>
                            </View> 
                            <View>
                                <Text style={{color:'grey' ,fontSize:12}}>8:30am</Text>
                            </View> 
                        </View>
                         {/* end third row */}
                    </View>
                    {/* End Record */}
                    {/* Start here record */}
                    <View style={{flexDirection:'row',width:'95%',display:'flex',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',}}>
                        <View>
                            <Image source={require('../../assets/avatar1.png')} 
                                style={{ width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
                        </View> 
                        {/* start second row */}
                        <View style={{margin:9}}>
                        <View>
                            <Text style={{color:'#2e1505',fontSize:16}}>Annie Duffiey</Text>
                        </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:10}}>Trans ID # 51007892</Text>
                            </View> 
                            <View>
                                <Text style={{color:'#2e1505',fontSize:11}}>Refund Amount</Text>
                            </View> 
                        </View>
                        </View>
                         {/* end second row */}
                         {/* start third row */}
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <View >
                                <Text style={{color:'red',fontSize:16}}>-$45.30</Text>
                            </View> 
                            <View>
                                <Text style={{color:'grey' ,fontSize:12}}>8:30am</Text>
                            </View> 
                        </View>
                         {/* end third row */}
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
        width:'90%',
        backgroundColor: '#ffffff',
        paddingVertical:'6%'
      },
      secondRowStyle: { 
        shadowColor:'#ffffff',
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%', 
        marginTop:2, 
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

export default BeautyPayScreen;
