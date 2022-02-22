import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import colors from '../utils/colors';

const FullScreenLoader = (props) => {
  return (
    <View style={containerstyles.loaderContainer}>
      <View style={containerstyles.loaderContainerInner}>
        <ActivityIndicator color={colors.loaderIcon} size={45} />
      </View>
    </View>
  );
};

const containerstyles = StyleSheet.create({
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
    backgroundColor: colors.loaderbg,
  },
  loaderContainerInner: {
    flex: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenLoader;
