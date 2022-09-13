import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Local Imports
import {SplashScreen} from '../screens/auth/splashScreen';
import {LoginScreen} from '../screens/auth/loginScreen';
import {SignupScreen} from '../screens/auth/signupScreen';
import {ForgotPassScreen} from '../screens/auth/forgotPassScreen';
import {OtpScreen} from '../screens/auth/otpScreen';
import {ChangePassScreen} from '../screens/auth/changePassScreen';
import {Dashboard} from '../screens/auth/dashboard';

export const AuthNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="SplashScreen" component={SplashScreen} />
      <HomeStack.Screen name="LoginScreen" component={LoginScreen} />
      <HomeStack.Screen name="SignupScreen" component={SignupScreen} />
      <HomeStack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
      <HomeStack.Screen name="OtpScreen" component={OtpScreen} />
      <HomeStack.Screen name="ChangePassScreen" component={ChangePassScreen} />
      <HomeStack.Screen name="Dashboard" component={Dashboard} />
    </HomeStack.Navigator>
  );
};
