import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Local Imports
import * as Colors from '../../assets/utils/colors';
import * as Sizes from '../../assets/utils/sizes';
import {Styles} from '../../assets/utils/styles';

import CustomIcon from './customIcons/CustomIcon';

export const OptionButton = ({title, icon = null, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={Styles.settingButtonContainer}
        onPress={() => {
          onPress();
        }}>
        <View style={Styles.settingButtonRow}>
          {icon && <CustomIcon name={icon} color={Colors.primary} size={21} />}
          <Text style={Styles.settingButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
