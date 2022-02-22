// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Button, ScrollView, Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable';
import StarRating from 'react-native-star-rating';
import {
  Avatar,
  HorizontalLine,
  IconButton,
  ImageButton,
  Title,
} from '../components/ComponentItems';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';

class FavouritesScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        starCount: 4
      };
    }
  
    onStarRatingPress(rating) {
      this.setState({
        starCount: rating
      });
    }
  
    render() {

  return (
    <View style={styles.container}>
        <View>
            <Text style={{fontWeight:'bold', fontSize:20, color:'#2e1505', marginLeft:30, marginVertical:20,}}>Favourites</Text>
        </View>

        <View style={{height:"100%",backgroundColor:'#ffffff'}}>


        <View style={{flexDirection:'row', alignSelf:'center', margin:8, marginTop:30, elevation:20, backgroundColor:'#ffffff', borderRadius:8, width:'90%'}}>
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%"}}>
            
            
            <View style={{display:'flex',flexDirection:'row'}} >
            <View>
                <Image style={{width:50, height:50, borderRadius:50, margin:15,borderColor:'grey',borderWidth:1}} source={require('../../assets/avatar.png')}/>
            </View>
            <View style={{borderRadius:20, marginTop:15}}>
                <View>
                    <Text style={{color:'#2e1505',fontSize:14}}>Robert</Text>
                    <Text style={{color:'grey',fontSize:12}}>Nail Specialist</Text>
                    <View style={{flexDirection:'row',marginTop:2}}>
                        {/* <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'red'}
                        /> */}
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <Text style={{color:'grey',fontSize:10,marginLeft:5}}>4.3 Good</Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={{borderRadius:20, marginTop:15,alignItems:'flex-end',marginRight:10}}>
                <FontAwesome5 name='heart' size={15} color='#e4576f' />
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('FreelancerScreen')
                }}>
                  <Text style={{marginTop:20, color:'#e4b343', textDecorationLine:'underline', fontSize:12, }}>View Profile</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>


        <View style={{flexDirection:'row', alignSelf:'center', margin:8, marginTop:6, elevation:20, backgroundColor:'#ffffff', borderRadius:8, width:'90%'}}>
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%"}}>
            
            
            <View style={{display:'flex',flexDirection:'row'}} >
            <View>
                <Image style={{width:50, height:50, borderRadius:50, margin:15,borderColor:'grey',borderWidth:1}} source={require('../../assets/avatar.png')}/>
            </View>
            <View style={{borderRadius:20, marginTop:15}}>
                <View>
                    <Text style={{color:'#2e1505',fontSize:14}}>Robert</Text>
                    <Text style={{color:'grey',fontSize:12}}>Nail Specialist</Text>
                    <View style={{flexDirection:'row',marginTop:2}}>
                        {/* <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'red'}
                        /> */}
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <Text style={{color:'grey',fontSize:10,marginLeft:5}}>4.3 Good</Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={{borderRadius:20, marginTop:15,alignItems:'flex-end',marginRight:10}}>
                <FontAwesome5 name='heart' size={15} color='#e4576f' />
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('FreelancerScreen')
                }}>
                  <Text style={{marginTop:20, color:'#e4b343', textDecorationLine:'underline', fontSize:12, }}>View Profile</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>


        
       <View style={{flexDirection:'row', alignSelf:'center', margin:8, marginTop:6, elevation:20, backgroundColor:'#ffffff', borderRadius:8, width:'90%'}}>
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%"}}>
            
            
            <View style={{display:'flex',flexDirection:'row'}} >
            <View>
                <Image style={{width:50, height:50, borderRadius:50, margin:15,borderColor:'grey',borderWidth:1}} source={require('../../assets/avatar.png')}/>
            </View>
            <View style={{borderRadius:20, marginTop:15}}>
                <View>
                    <Text style={{color:'#2e1505',fontSize:14}}>Robert</Text>
                    <Text style={{color:'grey',fontSize:12}}>Nail Specialist</Text>
                    <View style={{flexDirection:'row',marginTop:2}}>
                        {/* <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'red'}
                        /> */}
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <FontAwesome5 name='star' size={13} color='#e4b343' />
                        <Text style={{color:'grey',fontSize:10,marginLeft:5}}>4.3 Good</Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={{borderRadius:20, marginTop:15,alignItems:'flex-end',marginRight:10}}>
                <FontAwesome5 name='heart' size={15} color='#e4576f' />
                <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('FreelancerScreen')
                }}>
                  <Text style={{marginTop:20, color:'#e4b343', textDecorationLine:'underline', fontSize:12, }}>View Profile</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>



        </View>
    </View>
  );
};
}


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

export default FavouritesScreen;
