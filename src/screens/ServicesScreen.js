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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  PixelRatio,
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

const { width: screenWidth } = Dimensions.get('window');
let {height} = Dimensions.get('window');

class ServiceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [
          "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
          'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          ]
    };
}

render(){
  return (
    <View style={{width:'98%', height:'87%'}}>
      <View style={{width:'95%', margin:5}}>
      <View style={{flexDirection:'row',  margin:2,justifyContent:'flex-start' ,margin:16}}>
            <TouchableOpacity onPress={()=>{ this.props.navigation.goBack()}} 
            style={{backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
          </View>
        <Text style={{color:'black',fontSize:18,marginVertical:10,marginLeft:8}}>
          Popular Home Service
        </Text>
      </View>
      <View>
      <FlatList  style={{backgroundColor:'#fafafa'}}
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
          <View style={{width:'30%', marginVertical:'2%',marginHorizontal:"2%", borderRadius:4,backgroundColor:'white',paddingVertical:14 }}>
                  <TouchableOpacity onPress={()=> {this.props.navigation.navigate('ServiceTypeScreen')}}>
                  <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/avatar1.png')} style={{ width:90,height:90, borderRadius: 50, borderWidth: 1, borderColor:'#f58742' }} />
                  </View>
                    <View>
                      <Text style={{textAlign:'center',marginTop:6, fontSize:14, color:'#2e1505'}}> {item.key} </Text>
                    </View>
                  </TouchableOpacity>
                </View>}
          numColumns={3}
          />  
      {/* <ScrollView >
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('ServiceTypeScreen')}} style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
              
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
             
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
             
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View style={{backgroundColor:'#ffffff', margin:3}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: 100, height: 100, borderRadius: 100/2, borderWidth: 1, borderColor:'#f58742', margin: 6 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
      </ScrollView> */}
      </View>
      </View>
  );
}
};

const homescreenStyles = StyleSheet.create({
  view: {
    height: 50,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  // infinity: {
  //   width: 280,
  //   height: 300,
  // },
  // infinityBefore: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: 0,
  //   height: 0,
  //   borderWidth: 100,
  //   borderColor: "red",
  //   borderStyle: "solid",
  //   borderTopLeftRadius: 250,
  //   borderTopRightRadius: 250,
  //   borderBottomRightRadius: 250,
  //   borderBottomLeftRadius: 0,
  //   transform: [{ rotate: "230deg" }],
  // },
  // infinityAfter: {
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   width: 0,
  //   height: 0,
  //   borderWidth: 20,
  //   borderColor: "red",
  //   borderStyle: "solid",
  //   borderTopLeftRadius: 50,
  //   borderTopRightRadius: 0,
  //   borderBottomRightRadius: 50,
  //   borderBottomLeftRadius: 50,
  //   transform: [{ rotate: "135deg" }],
  // },
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

export default ServiceScreen;
