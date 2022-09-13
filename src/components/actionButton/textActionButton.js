import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// Local Imports
import * as Colors from '../../../assets/utils/colors';
import * as Sizes from '../../../assets/utils/sizes';
import {Styles} from '../../../assets/utils/styles';

export const TextActionButton = ({
  label = 'Press',
  onPress,
  buttonTextStyle = Styles.textActionButtonStyle,
}) => {
  return (
    <Text style={buttonTextStyle} onPress={onPress}>
      {label}
    </Text>
  );
};
