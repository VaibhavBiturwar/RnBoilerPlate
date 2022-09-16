import React from "react";
import { Text } from "react-native";
import { Styles } from "../../assets/utils";

export const CustomText = (props) => {
  return (
    <Text style={[Styles.customText, props.style]} {...props}>
      {props.children}
    </Text>
  );
};
