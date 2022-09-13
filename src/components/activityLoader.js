import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

export const ActivityLoader = () => {
  return (
    <ActivityIndicator
      size="large"
      color="#FF3E78"
      animating={true}
      hidesWhenStopped={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
