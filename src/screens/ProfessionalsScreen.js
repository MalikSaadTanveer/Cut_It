// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Button, ScrollView, FlatList,
    Dimensions,
    PixelRatio,
     Text, TouchableOpacity, View, StyleSheet, Image,TextInput} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable';
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../utils/colors';

const { width: screenWidth } = Dimensions.get('window');
let {height} = Dimensions.get('window');

const ProfessionalsScreen = ({navigation}) => {

    
  useEffect(() => {
    setTimeout(() => {
      //setAnimating(false);
      
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{height:'100%'}}>
      <View style={{flexDirection:'row',  margin:2,justifyContent:'flex-start' ,margin:16}}>
            <TouchableOpacity onPress={()=>{ navigation.goBack()}} 
            style={{backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
          </View>
        <View style={{marginLeft:12, marginTop:12, justifyContent:'space-between', flexDirection:'row'}}>
            <Text style={{fontSize:20, color:'#2e1505',marginBottom:6,marginLeft:16 }}>Professionals</Text>
            
        </View>
        
        <View style={styles.firstRowStyle}>
            
            <View style={{width:'100%'}}>
                <View style={{flexDirection:'row', margin:10}}>
                    <View style={{width:40}}>
                    <Entypo style={{ marginTop:0,
                    backgroundColor:'#f8f8f8',textAlign:'center',paddingVertical:2,borderRadius:5,height:36,marginRight:6}} 
                    name='location-pin' size={30} color='#e4b343' />
                    </View>
                    <View>
                        <Text style={{ color:'#2e1505', fontSize:14}}> Uppar Richmond Road, London </Text>
                        <Text style={{color:'#e6b952', fontSize:12,margin:4}}> Your Location </Text>
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
              
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="my-location" color='#e6b952' size={14} style={{marginLeft:10}}/>
                <Text style={{color:'#e6b952',fontSize:12,marginLeft:10}}>Use Current Location</Text>
              </View>


            </View>
            <View style={{margin:10, flexDirection:'row', backgroundColor:'white',}}>
                <View style={{width:'100%'}}>
                  {/* Row Start */}
                    <View style={{ flexDirection:'row'}}>
                        <View style={{backgroundColor:'white',width:'100%',marginVertical:6}}>
                          <Text style={{ marginLeft:4, color:'#2e1505',fontSize:16,}}>Professional in Area</Text>
                        </View>
                    </View>
                    {/* Row End */}
                    {/* Row Start */}
                  
                        <FlatList   style={{backgroundColor:'#fafafa'}}
                            data={[  
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'}, 
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'MIke West', src:'../../assets/waxing.png'},  
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},  
                                    {key: 'MIke West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'MIke West', src:'../../assets/waxing.png'},
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},  
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                                    {key: 'MIke West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                                    {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'}  
                                ]}  
                            renderItem={({item}) => 
                                    <View style={{width:'31%', marginVertical:'2%',marginHorizontal:"1%", borderRadius:4,backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={()=>{navigation.navigate('FreelancerScreen')}}>
                                        <View style={{alignItems:'center'}}>
                                        <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#f58742', margin: 3 }} />
                                        </View>
                                        <View >
                                        <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
                                        <Text style={{textAlign:'center', fontSize:11, color:'#857871'}}>Hair Style </Text>

                                        <View style={{flexDirection:'row',marginVertical:2,justifyContent:'center'}}>
                                          <Entypo name="star" color="#e6b952" size={12} />
                                          <Entypo name="star" color="#e6b952" size={12} />
                                          <Entypo name="star" color="#e6b952" size={12} />
                                          <Entypo name="star" color="#e6b952" size={12} />
                                          <Entypo name="star" color="#e6b952" size={12} />
                                        </View>

                                        <Text style={{textAlign:'center', fontSize:10, color:'grey',marginBottom:8}}>4.3 Good  </Text>
                                        </View>
                                    </TouchableOpacity>
                                    </View>}
                            numColumns={3}
                            />  
                    {/* Row End */}
                </View>
              
            </View>
             
        </View>
      
      
      </ScrollView>
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
    width:'95%', 
    alignSelf:'center', 
    alignItems:'center',
    marginTop:5, 
    elevation:14,
    backgroundColor: '#ffffff'
  },
  newRowStyle: {
    borderWidth:2, 
    borderRadius:10,
    borderColor: 'white', 
    shadowColor:'#ffffff',
    width:320, 
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
});

export default ProfessionalsScreen;
