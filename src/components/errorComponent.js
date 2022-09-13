import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomIcon from './customIcons/CustomIcon';

import * as Colors from '../..//assets/utils/colors';
import * as Sizes from '../..//assets/utils/sizes';

export const ErrorComponent = ({
  visible = false,
  msg = 'Error',
  status = 'error',
}) => {
  let displayColor = Colors.errorRed;
  switch (status) {
    case 'info':
      displayColor = Colors.infoBlue;
      break;
    case 'success':
      displayColor = Colors.successGreen;
      break;
  }

  return visible ? (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.marginTiny,
      }}>
      <CustomIcon name={status} size={15} style={{color: displayColor}} />
      <Text
        style={{
          color: Colors.white,
          marginLeft: Sizes.marginSmall,
          fontWeight: Sizes.weightMedium,
          color: displayColor,
          fontSize: Sizes.textSmall,
        }}>
        {msg}
      </Text>
    </View>
  ) : (
    <></>
  );
};
