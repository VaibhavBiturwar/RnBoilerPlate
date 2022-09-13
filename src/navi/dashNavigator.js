import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Local Imports
import * as Colors from '../../assets/utils/colors';
import * as Sizes from '../../assets/utils/sizes';
import {Styles} from '../../assets/utils/styles';
import CustomIcon from '../components/customIcons/CustomIcon';
import {HomeScreen} from '../screens/dashboard/homeScreen';
import {ProfileScreen} from '../screens/dashboard/profileScreen';

const Tab = createBottomTabNavigator();

export const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Me') {
            iconName = 'me';
          }

          if (focused) {
            return (
              <View style={Styles.tabBtncontainer}>
                <CustomIcon
                  name={iconName}
                  size={Sizes.bottomNavigationBarIcon}
                  style={{color: Colors.bottomNavigationBarIconColor}}
                />
                <Text style={Styles.tabLabel}>{route.name}</Text>
              </View>
            );
          }

          return (
            <View style={[Styles.tabBtncontainer, {borderBottomWidth: 0}]}>
              <CustomIcon
                name={iconName}
                size={Sizes.bottomNavigationBarIcon}
                style={{color: Colors.bottomNavigationBarIconColor}}
              />
              <Text style={[Styles.tabLabel, {marginBottom: 10}]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: Styles.tabBarStyle,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
