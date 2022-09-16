import React from "react";
import { View } from "react-native";
import { Styles } from "../../assets/utils";
import { CustomIcon, CustomText } from "./index";

export const TopBar = ({
  onBackPress,
  onSecondaryPress,
  secondaryPressIcon,
  title,
}) => {
  return (
    <View style={Styles.topNavBarContainer}>
      {onBackPress ? (
        <CustomIcon
          onPress={() => {
            onBackPress();
          }}
          name={"back"}
          color={Styles.topNavBarBackColor.color}
          size={21}
        />
      ) : (
        <View></View>
      )}

      <CustomText style={Styles.topNavBarText}>{title}</CustomText>

      {onSecondaryPress ? (
        <CustomIcon
          onPress={() => {
            onSecondaryPress();
          }}
          name={secondaryPressIcon ? secondaryPressIcon : "settings"}
          color={Styles.topNavBarBackColor.color}
          size={21}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};
