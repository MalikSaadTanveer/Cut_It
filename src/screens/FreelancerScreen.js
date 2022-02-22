import React, { useEffect, useRef, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import RnIncrementDecrementBtn from './RnIncrementDecrementBtn';
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
import { ListView } from 'react-native';

class FreelancerScreen extends React.Component {
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
    <View style={{backgroundColor:'#f8f8f8',position:'relative'}}>
        <ScrollView>
        <View style={{flexDirection:'row',  margin:3,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack('MoreScreen')}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Freelancer Profile</Text>
            <TouchableOpacity 
            style={{position:'absolute',right:15,backgroundColor:'white',padding:6,borderRadius:10}}>
              <FontAwesome5 name='heart-o' size={20} color='black'/>
            </TouchableOpacity>
          </View>
               
                {/* Start */}
                    {/* Start here record */}
                    <View style={{ justifyContent:'space-between', margin:10,marginBottom:20}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{alignItems:'center',flex:1,}}>
                                <Image style={{width:95, height:95, borderRadius:50,borderWidth:2,borderColor:'#e4b447'}}   source={require('../../assets/avatar1.png')}/>
                                <Text style={{fontSize:12, marginTop:5, color:'black'}}>Robert Thomas</Text>
                            </View> 

                            <View style={{flex:2,}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{paddingVertical:6, backgroundColor:'#f2f2f2',flex:1,borderRadius:6,alignItems:'center',justifyContent:'center',elevation:1}} >
                                        <Text style={{color:'#2e1505',fontSize:10}}>Nail</Text>
                                        <Text style={{color:'#2e1505',fontSize:10}}>Specialist</Text>
                                    </View>
                                    <View style={{paddingVertical:6, backgroundColor:'#f2f2f2',flex:1,marginHorizontal:3,borderRadius:6,alignItems:'center',justifyContent:'center',elevation:1}} >
                                        <Image source={require('../../assets/rings.png')} />
                                        <Text style={{color:'#2e1505',fontSize:10}}>Unisex</Text>
                                    </View>
                                    <TouchableOpacity style={{paddingVertical:6, backgroundColor:'#e4b343', alignItems:'center',justifyContent:'center',flex:1,borderRadius:6,elevation:1}}
                                    onPress={()=> this.props.navigation.navigate('FreelancerReviews') } >
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <FontAwesome5 name='star' size={14} color='#ffffff' />
                                            <Text style={{marginLeft:3,color:'#ffffff',fontSize:10}}>4.3</Text>
                                        </View>
                                        <Text style={{color:'#ffffff',fontSize:10,textDecorationLine:'underline'}}>Review</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{fontSize:11,marginTop:'4%', color:'grey', width:230,}}>I believe that most of the time spent on creating something isn't only about a nice interface or graphic design. It's about bringing value to people to a company. I create an expensive design.</Text>
                            </View> 
                        </View> 
                        {/* start second row */}
                        {/* <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View> */}
                         {/* end second row */}
                    </View>
                    {/* End Record */}


            <View style={[homescreenStyles.secondRowStyle,{position: "relative",}]}>

                <View style={{paddingVertical:20,borderBottomWidth:1, borderBottomColor:"#f8f8f8"}}>

                    <View style={{marginLeft:20,}}>
                        <Text style={{fontSize:11, color:'grey'}}>1 of 4</Text>
                        <Text style={{fontSize:14,  color:'#2e1505',marginBottom:'3%'}}>Select Service Type</Text>
                    </View>
                
                
                    <ScrollView horizontal >
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginLeft: 20, width: 90, height:90, alignContent:'center', alignItems:'center', justifyContent:'center', borderRadius: 10, borderColor:'#e6b952', borderWidth: 2}}>
                                <Image style={{width:40, height:40}} source={require('../../assets/notauth.png')}/>
                                <Text style={{color:'#2e1505'}}>Manicure</Text>
                            </View>
                            <View style={{margin: 5, width: 90, height:90, alignContent:'center', alignItems:'center', justifyContent:'center'}}>
                                <Image style={{width:40, height:40}} source={require('../../assets/notauth.png')}/>
                                <Text style={{color:'#2e1505'}}>Manicure</Text>
                            </View>
                            <View style={{margin: 5, width: 90, height:90, alignContent:'center', alignItems:'center', justifyContent:'center',}}>
                                <Image style={{width:40, height:40}} source={require('../../assets/notauth.png')}/>
                                <Text style={{color:'#2e1505'}}>Manicure</Text>
                            </View>
                            <View style={{margin: 5, width: 90, height:90, alignContent:'center', alignItems:'center', justifyContent:'center',}}>
                                <Image style={{width:40, height:40}} source={require('../../assets/notauth.png')}/>
                                <Text>Manicure</Text>
                            </View>
                            <View style={{margin: 5, width: 90, height:90, alignContent:'center', alignItems:'center', justifyContent:'center',}}>
                                <Image style={{width:40, height:40}} source={require('../../assets/notauth.png')}/>
                                <Text style={{color:'#2e1505'}}>Manicure</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:11, color:'#2e1505'}}>2 of 4</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%',marginBottom:10}}>
                            <Text style={{fontSize:16, color:'#2e1505'}}>Manicure</Text>
                            <Text style={{fontSize:13, fontWeight:'bold', color:'white',backgroundColor:'#e4b343',paddingHorizontal:10,paddingVertical:2,borderRadius:4}}>$25</Text>
                        </View>
                        <Text style={{color:'grey',fontSize:12,marginBottom:20}}>Cosmetic Treatment of the hands and fingurenails, including trimming and polishing of the nails and remove culticles.</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', width:'95%'}}>
                            <Text style={{fontSize:14, color:'#2e1505'}}>How many Clients</Text>
                            <RnIncrementDecrementBtn 
                                styleBtn={{backgroundColor:'#fff'}}
                            />
                        </View>
                    </View>
                    {/* 3 */}
                    <View style={{flexDirection:'row', margin:10, marginTop:20, justifyContent:'space-between'}}>

                        <View style={{flexDirection:'row'}}>
                            <View style={{marginLeft:10, marginRight:10,backgroundColor:'#f8f8f8',padding:5,borderRadius:4}}>
                                <MaterialIcons name='add-circle' size={30} color='grey' />
                            </View>
                            <View>
                                <Text style={{color:'#2e1505'}}>3 of 4</Text>
                                <Text style={{color:'#2e1505'}}>Apply Add-ons</Text>
                            </View>
                        </View>
                        <View>
                            <FontAwesome5 name='angle-right' size={20} color='#e6b952' />
                        </View>
                    </View> 
                      {/* 3 */}

                      {/* 4 */}
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:10,paddingLeft:3,color:'black',marginTop:20}}>Step 4 of 4</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-between', width:'95%',marginBottom:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:18,  color:'#2e1505'}}>October</Text>
                                    <Text style={{fontSize:10, fontWeight:'bold', margin:5, color:'#2e1505'}}>Now</Text>
                                </View>
                                {/* <FontAwesome5 name='arrow-right' size={20} color='#e6b952' /> */}
                                <Image source={require('../../assets/arrow-right.png')} resizeMode='contain' style={{width:20,height:20}} />

                            </View>
                        </View>    
                      <ScrollView horizontal style={{marginHorizontal:20}}>
                            {/* start rown */}
                            <View style={{flexDirection:'row'}}>
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#000000', width:60, height:80, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{color:'white', alignSelf:'center'}}>MON</Text>
                                        <Text style={{color:'white', alignSelf:'center'}}>1</Text>
                                    </View>
                                    <View style={{backgroundColor:'#e4b343', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{ alignSelf:'center',color:'white'}}>10:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>11:45</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>14:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>16:30</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>18:15</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                 {/* start column */}
                                 <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>TUE</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>2</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>10:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>11:45</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>16:30</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>WED</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>3</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>THU</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>4</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>12:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>18:15</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80,borderRadius:40, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>FRI</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>5</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>14:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>16:30</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>18:15</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>SAT</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505', fontSize:16, }}>6</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>10:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>11:45</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80,borderRadius:40, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>SUN</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>7</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>11:45</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>12:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>14:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>16:30</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>18:15</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80,borderRadius:40, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>MON</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>8</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>10:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>11:45</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>12:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>14:15</Text>
                                    </View>
                                </View>
                                {/* end column */}
                                {/* start column */}
                                <View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:80, justifyContent:'center', margin:2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>MON</Text>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>8</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>10:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>11:45</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>12:15</Text>
                                    </View>
                                    <View style={{backgroundColor:'#f8f8f8', width:60, height:60, justifyContent:'center', margin: 2,borderRadius:4}}>
                                        <Text style={{alignSelf:'center', color:'#2e1505'}}>14:15</Text>
                                    </View>
                                </View>
                                {/* end column */}
                            </View>
                            {/* end row */}
                            
                        {/* </View> */}
                        </ScrollView>
                      {/* 4 */}
                        <View style={{width:'95%', margin:5,marginVertical:20}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between',marginLeft:20,paddingVertical:10}}>
                                <Text style={{fontSize:16, color:'#2e1505',}}>Work Gallery</Text>
                                {/* <FontAwesome5 name='arrow-right' size={20} color='black' /> */}
                                <Image source={require('../../assets/arrow-right.png')} resizeMode='contain' style={{width:20,height:20}} />
                            </View>
                            <ScrollView horizontal style={{marginLeft:15}}>
                                <View style={{margin:5}}>
                                    <Image style={{width:80, height:80, borderRadius:10}} source={require('../../assets/mani-padi.png')}/>
                                </View>
                                <View style={{margin:5}}>
                                    <Image style={{width:80, height:80, borderRadius:10}} source={require('../../assets/eyebrows.png')}/>
                                </View>
                                <View style={{margin:5}}>
                                    <Image style={{width:80, height:80, borderRadius:10}} source={require('../../assets/eyelash.png')}/>
                                </View>
                                <View style={{margin:5}}>
                                    <Image style={{width:80, height:80, borderRadius:10}} source={require('../../assets/mani-padi.png')}/>
                                </View>
                                <View style={{margin:5}}>
                                    <Image style={{width:80, height:80, borderRadius:10}} source={require('../../assets/eyelash.png')}/>
                                </View>
                            </ScrollView>
                        </View>
                        
                        <View style={{width:'100%',marginBottom:'22%',alignItems:'center',marginTop:10}}>
                            <Text style={{color:'#e4b343',fontSize:12,textDecorationLine:'underline'}}>View Customer Reviews</Text>
                        </View>
                        
                        {/* <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,position:'absolute',bottom:0,backgroundColor:'white',width:'100%'}}>
                            <View>
                                <Text>1 hour 15 mins</Text>
                                <Text style={{fontSize:18, color:'#2e1505', fontWeight:'bold'}}>$25</Text>
                            </View>
                            <TouchableOpacity style={{width:130, height:40, justifyContent:'center', alignItems:'center', backgroundColor:'#000000', borderWidth:3, borderRadius:10}}>
                                <Text style={{color:'#f8f8f8', fontWeight:'bold'}}>Make Booking</Text>
                            </TouchableOpacity>
                        </View> */}

                    
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

                    <View style={{flexDirection:'row', justifyContent:'space-between',padding:10,position:'absolute',bottom:0,backgroundColor:'white',width:'100%'}}>
                            <View style={{marginLeft:10}}>
                                <Text style={{color:'grey',fontSize:11}}>1 hour 15 mins</Text>
                                <Text style={{fontSize:15, color:'#2e1505',}}>$25.00</Text>
                            </View>
                            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ConfirmBookingScreen')}
                            style={{width:160, height:35, justifyContent:'center', alignItems:'center', backgroundColor:'#000000', borderWidth:3, borderRadius:4}}>
                                <Text style={{color:'#f8f8f8', fontWeight:'bold',}}>Make Booking</Text>
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
        width:'100%', 
        marginTop:5, 
        elevation:14,
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

export default FreelancerScreen;
