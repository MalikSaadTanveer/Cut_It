import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import colors from '../utils/colors';
import PlainHeader from './PlainHeader';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const PlainLayout = (props) => {
  return (
    <KeyboardAvoidingView
      style={containerstyles.mainContainer}
      behavior={Platform.OS === 'ios' && 'padding'}
    >
      <View style={containerstyles.mainContainer}>
        <PlainHeader {...props} />

        {props.showLoader && (
          <View style={containerstyles.loaderContainer}>
            <View style={containerstyles.loaderContainerInner}>
              <ActivityIndicator color={colors.loaderIcon} size={25} />
            </View>
          </View>
        )}
        {props.useView ? (
          <View
            style={[
              !props.noPadding && containerstyles.containerInner,
              props.footer && containerstyles.ifHasFooter,
              props.useView && containerstyles.onlyViewpane,
              props.bgGray && containerstyles.containerGray,
              props.style && props.style,
            ]}
          >
            {props.children}
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={[
              containerstyles.container,
              props.footer && containerstyles.ifHasFooter,
              props.bgGray && containerstyles.containerGray,
              props.style && props.style,
            ]}
          >
            <View style={[!props.noPadding && containerstyles.containerInner]}>
              {props.children}
            </View>
          </ScrollView>
        )}
        {props.footer && props.footer}
      </View>
    </KeyboardAvoidingView>
  );
};

const containerstyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  container: {
    flexGrow: 1,
    backgroundColor: colors.backgroundWhite,
  },
  containerGray: {
    flexGrow: 1,
    backgroundColor: colors.veryLightGrey,
  },
  onlyViewpane: {
    flex: 1,
  },
  containerInner: {
    backgroundColor: colors.backgroundWhite,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
  },
  loaderContainerInner: {
    flex: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loaderbg,
  },
  ifHasFooter: {
    paddingBottom: 0,
  },
});

export default PlainLayout;
