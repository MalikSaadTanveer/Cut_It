import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  Alert,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  HorizontalLine,
  IconButton,
  ImageButton,
  Title,
} from './ComponentItems';
import colors from '../utils/colors';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import { isEmpty, isLoaded } from 'react-redux-firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Toast from 'react-native-toast-message';

const PlainHeader = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bagData = useSelector((state) => state.orderStore);
  const locationData = useSelector((state) => state.appStore);

  return (
    <>
      <View
        style={[
          props.titleOnly
            ? plainheaderStyles.titleOnly
            : plainheaderStyles.container,
        ]}
      >
        {props.titleOnly ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              
            }}
          >
            {props.showBack ? (
              <View style={{ flex: 0.9 }}>
                <IconButton
                  icon='chevron-left'
                  iconType='feather'
                  size={35}
                  color={colors.grey}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            ) : (
              <View style={{ flex: 0.9 }} />
            )}
            <View style={{ flex: 8 }}>
              <Title h3 uppercase m0 center fontGillsans>
                {props.titleOnly}
              </Title>
            </View>
            <View style={{ flex: 0.9 }}>
              {props.showRight && props.showRight}
            </View>
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop:10
              }}
            >
              <Avatar 
                onPress={() => {
                    // navigation.navigate('AuthenticatedProfile');
                    navigation.navigate('ProfileScreen');
                  
                }}
                source={require('../../assets/avatar1.png')
                }
              />
              <View >
                <Text style={{color:'#2e1505', fontSize:16,fontStyle:'italic'}}>
                  Hey, <Text style={{color:'#e4b343'}} >Anney Deffy</Text>
                </Text>

                <TouchableOpacity onPress={()=>{navigation.navigate('LocationScreen')}} >
                <View style={{display:'flex',flexDirection:'row'}}  >
                <Text style={{color:'#2e1505', fontSize:10,marginHorizontal:7,marginTop:5}}>
                  {/* {locationData && locationData.address ? locationData.address : 'loading...'} */}
                  Stockhalm Stad 
                </Text>
                  <TouchableOpacity>
                <Entypo
                      name="chevron-down"
                      size={ 15}
                      color='#6e7683'
                      style={{marginTop:4}}
                    />
                    </TouchableOpacity>

                </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              {/* <TouchableOpacity
              style={{marginHorizontal:7,marginTop:5}}
                onPress={() => {
                  bagData && bagData.cart && bagData.cart.length > 0
                    ? navigation.navigate('CreateAppointmentScreen', {
                        mainService: bagData.mainService,
                      })
                    : Toast.show({
                        type: 'error',
                        position: 'bottom',
                        text1: 'Sorry!',
                        text2: 'Your bag is empty.',
                        autoHide: true,
                        bottomOffset: 20,
                      });
                }}
              > */}
              <TouchableOpacity>
                 <IconButton
                  icon='bell'
                  iconType='feather'
                  size={28}
                  color={colors.darkGrey}
                  onPress = {()=> navigation.navigate('Notifications')}
                />
              </TouchableOpacity>
                {/* <Image
                  style={{
                    resizeMode: 'contain',
                    height: 30,
                    width: 30,
                    marginRight: 10,
                  }}
                  source={
                    bagData && bagData.cart && bagData.cart.length > 0
                      ? require('../../assets/basket.gif')
                      : require('../../assets/basket_e.png')
                  }
                /> */}
              {/* </TouchableOpacity> */}
            </View>
          </>
        )}
      </View>
      <View
        style={plainheaderStyles.container}
      >
        
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 280,
                borderRadius: 10,
                borderWidth: 1,
              }}
            > */}
            {/* <View
        style={{
          backgroundColor: colors.grey,
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value="Search"
          // onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{  paddingHorizontal: 20 }}
        />
      </View> */}
              {/* <SearchBar
              style={{fontSize:10,backgroundColor:'white',height:20,margin:0,padding:0}}
                round
                // lightTheme
                color={colors.white}
                // barTintColor="#2222221A"
                containerStyle={{backgroundColor: 'transparent',  width:270, marginLeft: 10}}
                // style={{width:220, marginLeft: 200}}
                placeholder="Search for hair Makeup and more"
                value=""
              /> */}
{/* #f8f8f8 */}

              <View style={{position:'relative',width:'85%'}}>
              <View style={{position:'absolute',zIndex:1,top:6,left:15}}>
              <IconButton
                  icon='search'
                  iconType='feather'
                  size={25}
                  color='#cbced4'

                />
                </View>
              <TextInput
              style={{backgroundColor:'#f8f8f8',color:'black', width:'100%',marginLeft:7,padding:4,borderRadius:6,paddingLeft:35,fontSize:13,}}
              placeholder="Search for hair, makeup and more"
              placeholderTextColor='#cbced4'
              />
              </View>
            {/* </View> */}
            <View>
              <TouchableOpacity  style={{marginHorizontal:12,marginTop:-3}} onPress={() => navigation.navigate('ShoopingBag')}> 
                 <MaterialCommunityIcons
                    name='shopping-outline'
                    size={25}
                    color={colors.darkGrey}
                  />
                
              </TouchableOpacity>
            </View>
          
      </View>
      
      {props.titleOnly && !props.hideLine && (
        <HorizontalLine
          {...props.lineProps}
          primary={props.linePrimary}
          lineDouble={props.lineDouble}
          lineWhite={props.lineWhite}
        />
      )}
      {props.subHeader && (
        <View
          style={[
            props.subHeaderStyle
              ? props.subHeaderStyle
              : plainheaderStyles.subHeader,
            !props.hideSubheaderShadow && plainheaderStyles.subHeaderShadow,
            !props.noPadding && plainheaderStyles.subHeaderPadding,
          ]}
        >
          {props.subHeader}
        </View>
      )}
    </>
  );
};

const plainheaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundWhite,
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleOnly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundWhite,
    height: 55,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleOnlyHasBack: {
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 0.2,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 0.2,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
  },
  subHeaderPadding: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
  },
  subHeaderShadow: {
    zIndex: 9999,
    borderColor: colors.lightGrey,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
    }),
  },
});

export default PlainHeader;
