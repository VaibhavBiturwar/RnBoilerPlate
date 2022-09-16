import React from "react";
import { View, ActivityIndicator } from "react-native";
import * as Colors from "../../assets/utils/colors";
import { Styles } from "../../assets/utils";
import { SizedBox, CustomText } from "./index";

export const Loader = ({ label }) => {
  return (
    <View style={Styles.loaderBackdrop}>
      <ActivityIndicator size={"large"} color={Colors.primary} />
      <SizedBox height={100} />
      <CustomText style={Styles.loaderText}>{label}</CustomText>
    </View>
  );
};
