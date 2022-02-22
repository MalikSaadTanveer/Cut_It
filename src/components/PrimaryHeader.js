import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';
import {
  HorizontalLine,
  IconButton,
  ImageButton,
  Title,
} from './ComponentItems';
import { useNavigation } from '@react-navigation/native';

const PrimaryHeader = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={headerStyles.headerContainer}>
        {props.leftContainer ? (
          <>
            {navigation.canGoBack() || navigation.previous || props.showBack ? (
              <IconButton
                icon='chevron-left'
                iconType='feather'
                size={35}
                color={colors.grey}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ) : null}
 
            {props.showDrawer ? (
              <ImageButton
                noPadding
                image={{
                  source: require('../../assets/menu.png'),
                }}
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            ) : null}
          </>
        ) : (
          <></>
        )}
        <View style={{ flex: 8 }}>
          <Title h3 center m0>
            {props.title}
          </Title>
        </View>
        {props.rightContainer ? (
          <View style={{ flex: 1 }}>{props.rightContainer}</View>
        ) : (
          <View style={{ flex: 1 }} />
        )}
      </View>
      <HorizontalLine />
    </>
  );
};

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.backgroundWhite,
  },
  headerLeft: {},
  headerTitle: {
    fontSize: 25,
    lineHeight: 25,
  },
});

export default PrimaryHeader;
