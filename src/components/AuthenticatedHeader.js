import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HorizontalLine, IconButton, Title } from './ComponentItems';
import colors from '../utils/colors';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const AuthenticatedHeader = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={[
          authheaderStyles.container,
          props.showBack
            ? authheaderStyles.withAction
            : authheaderStyles.single,
        ]}
      >
        <View style={{ flex: 1 }}>
          {props.showBack && (
            <IconButton
              light="true"
              size={40}
              icon='chevron-back-outline'
              onPress={() => {
                if (navigation.canGoBack() || navigation.previous) {
                  navigation.goBack();
                }
              }}
            />
          )}
          {props.leftContainer && props.leftContainer}
        </View>

        <View style={{ flex: 1, height: 60 }}>
          
            <Title h3  uppercase center>
               Customer
            </Title>
          
         
            <Title white m0 center>
              {props.pagename}
            </Title>
        </View>
        <View style={{ flex: 1 }}>
          {props.rightContainer && props.rightContainer}
        </View>
      </View>
      {props.subHeader && (
        <View style={[props.subHeaderStyle && props.subHeaderStyle]}>
          {props.subHeader}
        </View>
      )}
    </>
  );
};

const authheaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 60,
  },
  customerContainer: {
    backgroundColor: colors.backgroundWhite,
  },
  single: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  withAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default AuthenticatedHeader;
