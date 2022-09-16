import React from "react";
import { View, TouchableOpacity } from "react-native";

// Local Imports
import * as Colors from "../../assets/utils/colors";
import { Styles } from "../../assets/utils";
import { CustomIcon, CustomText } from "./index";

export const OptionButton = ({ title, icon = null, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={Styles.settingButtonContainer}
        onPress={() => {
          onPress();
        }}
      >
        <View style={Styles.settingButtonRow}>
          {icon && <CustomIcon name={icon} color={Colors.primary} size={21} />}
          <CustomText style={Styles.settingButtonText}>{title}</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};
