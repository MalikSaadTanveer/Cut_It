import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import PrimaryHeader from './PrimaryHeader';
import colors from '../utils/colors';

const PrimaryLayout = (props) => {
  return (
    <>
      <PrimaryHeader {...props} />

      <KeyboardAvoidingView
        style={containerstyles.container}
        behavior={Platform.OS === 'ios' && 'padding'}
      >
        {props.useScrollView ? (
          <ScrollView contentContainerStyle={containerstyles.containerScroll}>
            {props.children}
          </ScrollView>
        ) : (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>{props.children}</>
          </TouchableWithoutFeedback>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

const containerstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
  },
  containerScroll: {
    padding: 10,
    backgroundColor: colors.backgroundWhite,
  },
});

export default PrimaryLayout;
