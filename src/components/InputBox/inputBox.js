import React from "react";
import { View, TextInput } from "react-native";

// Local Imports
import * as Colors from "../../..//assets/utils/colors";
import * as Sizes from "../../..//assets/utils/sizes";
import { Styles } from "../../../assets/utils";
import { SizedBox, CustomText } from "../index";

export const InputBox = ({
  boxContainer = Styles.inputBoxContainer,
  textInput = Styles.textInput,
  labelStyle = Styles.inputLabelStyle,
  placeholder,
  placeholderTextColor = Colors.lightGray,
  label = null,
  onChangeText,
  flex = 1,
  showError = false,
  onFocus,
}) => {
  return (
    <>
      {label && (
        <>
          <CustomText style={labelStyle}>{label}</CustomText>
          <SizedBox height={Sizes.marginVerySmall} />
        </>
      )}

      <View
        style={
          showError
            ? { ...Styles.inputBoxContainerError, flex: flex }
            : { ...boxContainer, flex: flex }
        }
      >
        <TextInput
          style={textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          onFocus={onFocus}
        />
      </View>
    </>
  );
};
