import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// Local Imports
import * as Colors from '../../..//assets/utils/colors';
import * as Sizes from '../../..//assets/utils/sizes';
import {Styles} from '../../../assets/utils/styles';
import {SizedBox} from '../sizedBox';
import CustomIcons from '../customIcons/CustomIcon';

export const IconInputBox = ({
  boxContainer = Styles.inputBoxContainer,
  textInput = Styles.textInput,
  labelStyle = Styles.inputLabelStyle,
  placeholder,
  placeholderTextColor = Colors.lightGray,
  label = null,
  iconName,
  onChangeText,
  showError = false,
  onFocus,
}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <>
        {label && (
          <>
            <Text style={labelStyle}>{label}</Text>
            <SizedBox height={Sizes.marginVerySmall} />
          </>
        )}
        <View style={showError ? Styles.inputBoxContainerError : boxContainer}>
          <CustomIcons
            name={iconName}
            size={20}
            style={{color: Colors.lightGray}}
          />
          <TextInput
            style={textInput}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            onFocus={onFocus}
          />
        </View>
      </>
    </View>
  );
};
