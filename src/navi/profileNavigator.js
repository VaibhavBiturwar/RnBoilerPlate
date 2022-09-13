import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Local Imports
import {ProfileScreen} from '../screens/dashboard/profileScreen';
import {EditProfileScreen} from '../screens/dashboard/editProfileScreen';

export const ProfileNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <HomeStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </HomeStack.Navigator>
  );
};
