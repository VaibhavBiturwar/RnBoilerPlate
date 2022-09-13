import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// Local Imports
import * as Colors from '../../..//assets/utils/colors';
import * as Sizes from '../../..//assets/utils/sizes';
import {Styles} from '../../../assets/utils/styles';
import {SizedBox} from '../sizedBox';
import CustomIcons from '../customIcons/CustomIcon';

export const PassInputBox = ({
  boxContainer = Styles.inputBoxContainer,
  textInput = Styles.textInput,
  labelStyle = Styles.inputLabelStyle,
  placeholder,
  placeholderTextColor = Colors.lightGray,
  label = null,
  onChangeText,
  showError = false,
  onFocus,
}) => {
  const [secured, setSecured] = useState(true);
  return (
    <>
      {label && (
        <>
          <Text style={labelStyle}>{label}</Text>
          <SizedBox height={Sizes.marginVerySmall} />
        </>
      )}
      <View style={showError ? Styles.inputBoxContainerError : boxContainer}>
        <CustomIcons name="lock" size={20} style={{color: Colors.lightGray}} />
        <TextInput
          secureTextEntry={secured}
          style={textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          onFocus={onFocus}
        />
        <CustomIcons
          name={secured ? 'eyeOpen' : 'eyeClose'}
          size={24}
          style={{color: Colors.lightGray}}
          onPress={() => {
            setSecured(!secured);
          }}
        />
      </View>
    </>
  );
};
