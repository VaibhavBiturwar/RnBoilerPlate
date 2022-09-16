import React from "react";
import { View, Text, TextInput } from "react-native";

// Local Imports
import * as Colors from "../../..//assets/utils/colors";
import * as Sizes from "../../..//assets/utils/sizes";
import { Styles } from "../../../assets/utils";
import { SizedBox, CustomIcon, CustomText } from "../index";

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
  value,
}) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <>
        {label && (
          <>
            <CustomText style={labelStyle}>{label}</CustomText>
            <SizedBox height={Sizes.marginVerySmall} />
          </>
        )}
        <View style={showError ? Styles.inputBoxContainerError : boxContainer}>
          <CustomIcon
            name={iconName}
            size={20}
            style={{ color: Colors.lightGray }}
          />
          <TextInput
            value={value}
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
