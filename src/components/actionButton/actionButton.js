import React from "react";
import { TouchableOpacity } from "react-native";

// Local Imports
import { Styles } from "../../../assets/utils";
import { CustomText } from "../index";
export const ActionButton = ({
  label = "Press",
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
      onPressOut={onPressOut}
    >
      <CustomText style={buttonTextStyle}>{label}</CustomText>
    </TouchableOpacity>
  );
};
