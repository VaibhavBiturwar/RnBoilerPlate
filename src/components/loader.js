import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import * as Colors from '../../assets/utils/colors';

export const Loader = () => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.loaderBackdropColor,
      }}>
      <ActivityIndicator size={'large'} color={Colors.primary} />
    </View>
  );
};
