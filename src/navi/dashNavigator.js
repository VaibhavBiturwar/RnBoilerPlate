import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Local Imports
import * as Colors from "../../assets/utils/colors";
import * as Sizes from "../../assets/utils/sizes";
import { Styles } from "../../assets/utils";
import { CustomIcon, CustomText } from "../components";
import { HomeScreen } from "../screens/dashboard/homeScreen";
import { ProfileNavigator } from "./profileNavigator";

const Tab = createBottomTabNavigator();

export const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Me") {
            iconName = "me";
          }

          if (focused) {
            return (
              <View style={Styles.tabBtncontainer}>
                <CustomIcon
                  name={iconName}
                  size={Sizes.bottomNavigationBarIcon}
                  style={{ color: Colors.bottomNavigationBarIconColor }}
                />
                <CustomText style={Styles.tabLabel}>{route.name}</CustomText>
              </View>
            );
          }

          return (
            <View style={[Styles.tabBtncontainer, { borderBottomWidth: 0 }]}>
              <CustomIcon
                name={iconName}
                size={Sizes.bottomNavigationBarIcon}
                style={{ color: Colors.bottomNavigationBarIconColor }}
              />
              <CustomText style={[Styles.tabLabel, { marginBottom: 10 }]}>
                {route.name}
              </CustomText>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: Styles.tabBarStyle,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Me" component={ProfileNav} />
    </Tab.Navigator>
  );
};

const ProfileNav = () => {
  return (
    <>
      {/* <NavigationContainer independent={true}> */}
      <ProfileNavigator />
      {/* </NavigationContainer> */}
    </>
  );
};
