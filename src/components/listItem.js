import React from "react";
import { View, Image } from "react-native";

import { Styles } from "../../assets/utils";
import { CustomText } from "./index";

export const ListItem = ({ item }) => {
  return (
    <View style={Styles.listItemContainer}>
      {/* Image */}
      <View>
        <Image
          style={Styles.listItemDP}
          source={{
            uri: item.avatar,
          }}
        />
      </View>
      {/* DATA */}
      <View style={Styles.listItem}>
        <CustomText>{item.id}</CustomText>
        <CustomText style={Styles.listItemTitle}>
          {item.first_name} {item.last_name}
        </CustomText>
        <CustomText>{item.email}</CustomText>
      </View>
    </View>
  );
};
