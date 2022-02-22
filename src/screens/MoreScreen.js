import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import {
  Button,
  FlatButton,
  HorizontalLine,
  ImageButton,
  IconComponent,
  Title,
} from '../components/ComponentItems';
import { useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const MoreScreen = (props) => {

  return (
    <View style={drawerStyles.container}>
        <ScrollView>
      <View style={drawerStyles.topBar}>
        {/* <ImageButton
          image={{
            source: require('../../assets/avatar.png'),
          }}
          onPress={() => {
            props.navigation.closeDrawer();
          }}
        /> */}
        <Image elevation={30} style={[drawerStyles.avatarImg,drawerStyles.Shadow]} source={require('../../assets/avatar.png')}/>
         <Text style={drawerStyles.topBarTitle}>Anny Deffy</Text>
         <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('ProfileScreen')}>
            <Text style={drawerStyles.topBarTitleSecond}>View & Edit Profile</Text>
          </TouchableOpacity>
          <FontAwesome5 style={{ marginTop:12 }} name='angle-right' size={20} color='#e6b952' />
         </View>
      </View>
      {/* Start First Card */}
      <View style={{width:'90%', alignSelf:'center', margin:8, backgroundColor:'#ffffff', borderRadius:15,elevation:10,paddingVertical:5}}>
        <TouchableOpacity style={{flex:1, margin:2, flexDirection:'row',borderBottomColor:'grey'}} onPress={()=>{
          props.navigation.navigate('BeautyPay')
        }}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
              <MaterialIcons name="payment" size={25} color="#e6b952" />
                {/* <FontAwesome5 name='calendar' size={25} color='#e6b952' /> */}
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Beauty Pay</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, margin:2, flexDirection:'row'}} onPress={()=>{
          props.navigation.navigate('PaymentScreen')
        }}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
                <FontAwesome5 name='money' size={25} color='#e6b952' />
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Payment Method</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, margin:2, flexDirection:'row'}} onPress={()=>{
          props.navigation.navigate('LocationScreen')
        }}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
                <FontAwesome5 name='map-marker' size={25} color='#e6b952' />
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Save Location</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </TouchableOpacity>
      </View>
      {/* End First Card */}
      {/* Start Second Card */}
      <View style={{width:'90%', alignSelf:'center', margin:8, backgroundColor:'#ffffff', borderRadius:15,elevation:10,paddingVertical:5}}>
      <View style={{flex:1, margin:2, flexDirection:'row'}}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
                {/* <FontAwesome5 name='calendar' size={25} color='#e6b952' /> */}
                <MaterialIcons name="help" size={25} color="#e6b952" />
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Help & Center</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </View>
        <View style={{flex:1, margin:2, flexDirection:'row'}}>
           <View style={{margin:5,width:30,alignItems:'center'}}>
                {/* <FontAwesome5 name='calendar' size={25} color='#e6b952' /> */}
                <MaterialIcons name="announcement" size={25} color="#e6b952" />
                {/* <IconComponent type='fontawesome' name='angle-right' size={25} color='#e6b952' /> */}
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Terms & Condition</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </View>
        <View style={{flex:1, margin:2, flexDirection:'row'}}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
                <FontAwesome5 name='info-circle' size={25} color='#e6b952' />
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>About US</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </View>
        <View style={{flex:1, margin:2, flexDirection:'row'}}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
                <FontAwesome5 name='user' size={25} color='#e6b952' />
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Beauty Partner</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </View>
        <View style={{flex:1, margin:2, flexDirection:'row'}}>
            <View style={{margin:5,width:30,alignItems:'center'}}>
              <MaterialIcons name="logout" size={25} color="#e6b952" />
                {/* <FontAwesome5 name='logout' size={25} color='#e6b952' /> */}
            </View>
            <View style={{margin:5, width:'80%', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{margin:5}}>
                <Text style={{color:'#2e1505'}}>Logout</Text>
            </View>
            <View style={{margin:5}}>
                <FontAwesome5 name='angle-right' size={25} color='#e6b952' />
            </View>
            </View>
        </View>
      </View>
      {/* End Second Card */}
      </ScrollView>
    </View>
  );
};

const drawerStyles = StyleSheet.create({
  avatarImg:{
    width:100,
   height:100,
   borderRadius:100,
   borderColor:'#c79a3e',
   borderWidth:4,
   margin:15,
  marginTop:50
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    paddingBottom:
      Platform.OS === 'ios'
        ? (screenHeight / 100) * 2
        : (screenHeight / 100) * 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,
    elevation: 5,
  },
  topBar: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  topBarTitle: {
    fontSize: 20,
    color:'black'
  },
  topBarTitleSecond: {
    fontSize: 15,
    color:'#e6b952',
    margin:12,
  },
  containerMain: {
    flex: 10,
    padding: 10,
  },
  containerBottom: {
    flex: 3,
  },
  Shadow: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
});

export default MoreScreen;
