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
import { useDispatch, useSelector } from 'react-redux';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        images: [
          // {imgurl : require('../../assets/mani-padi.png')},
          // {imgurl : require('../../assets/eyebrows.png')},
          // {imgurl : require('../../assets/eyelash.png')},
          // {imgurl : require('../../assets/waxing.png')},
          "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
          'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          // 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          // 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
          // 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' // Network image
          ]
    };
}

render(){
  return (
    <PlainLayout showLoader={false}>
      
      <ProfAreaContainerHome navigation={this.props.navigation} />
      

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Title bold mt12 fontGillsans>
          Offers 
        </Title>
        <Text style={{ color:'#e8bf61', fontSize:12, fontStyle:'italic', marginHorizontal:7 }}>
            View More
        </Text>
      </View> 
      {/* <View style={homescreenStyles.infinity}>
      <View style={homescreenStyles.infinityBefore} />
      <View style={homescreenStyles.infinityAfter} />
    </View> */}

      <ImageSlider empty={true} data={this.state.images} />
    </PlainLayout>
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

export default HomeScreen;
