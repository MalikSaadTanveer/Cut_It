/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Modal, View, Image } from 'react-native';
import { Title } from './ComponentItems';

export default function NoInternetDialog(props) {
  const { dialogVisible } = props;

  console.log('dialogVisible', dialogVisible);

  return (
    <Modal
      visible={dialogVisible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={() => {
        dialogVisible;
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            width: '70%',
            height: '30%',
            alignItems: 'center',
            borderRadius: 20,
            elevation: 4,
            flexDirection: 'column',
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}
        >
          <Image
            style={{ marginVertical: 20, width: 100, height: 100 }}
            source={require('../../assets/internet_error.png')}
          />
          <Title h3>No Internet Connection</Title>
        </View>
      </View>
    </Modal>
  );
}
