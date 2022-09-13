import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// Local Imports
import * as Colors from '../../../assets/utils/colors';
import * as Sizes from '../../../assets/utils/sizes';
import {Styles} from '../../../assets/utils/styles';

export const ActionButton = ({
  label = 'Press',
  onPress,
  onPressIn,
  onPressOut,
  disabled = false,
  buttonStyle = Styles.actionButtonStyle,
  buttonTextStyle = Styles.actionButtonTextStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Text style={buttonTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
