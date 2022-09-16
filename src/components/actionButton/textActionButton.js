import React from "react";

// Local Imports
import { Styles } from "../../../assets/utils";
import { CustomText } from "../index";

export const TextActionButton = ({
  label = "Press",
  onPress,
  buttonTextStyle = Styles.textActionButtonStyle,
}) => {
  return (
    <CustomText style={buttonTextStyle} onPress={onPress}>
      {label}
    </CustomText>
  );
};
