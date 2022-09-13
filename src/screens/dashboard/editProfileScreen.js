import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is demo text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
