import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../utils/colors';
import AuthenticatedHeader from './AuthenticatedHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthenticatedLayout = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundWhite }}>
      <AuthenticatedHeader {...props} />
      {props.showLoader && (
        <View style={containerstyles.loaderContainer}>
          <View style={containerstyles.loaderContainerInner}>
            <ActivityIndicator color={colors.loaderIcon} size={25} />
          </View>
        </View>
      )}
      <KeyboardAwareScrollView
        contentContainerStyle={containerstyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={containerstyles.containerInner}>{props.children}</View>
      </KeyboardAwareScrollView>
      <View>{props.footer}</View>
    </View>
  );
};

const containerstyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.backgroundWhite,
  },
  containerInner: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
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
    backgroundColor: 'transparent',
  },
  loaderContainerInner: {
    flex: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loaderbg,
  },
});

export default AuthenticatedLayout;
