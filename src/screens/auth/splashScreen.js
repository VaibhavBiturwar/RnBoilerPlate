import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

// Local Imports
import { SizedBox, CustomText } from "../../components";
import { LOGGEDIN, LOGGEDINAS } from "../../redux/reduxContstants";
import { Styles, getPersistentData } from "../../../assets/utils";

export const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const checkUserLoggedIn = async () => {
    const data = await getPersistentData("auth");
    if (data?.loggedIn) {
      dispatch({ type: LOGGEDINAS, LOGGEDINAS: data.data });
      dispatch({ type: LOGGEDIN, LOGGEDINAS: true });
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Dashboard" }],
        });
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        });
      }, 2000);
    }
  };

  useEffect(() => {
    // function to load here

    checkUserLoggedIn();
  }, []);

  return (
    <View style={Styles.splashScreenContainer}>
      <CustomText style={Styles.splashScreenText1}>React Native</CustomText>
      <SizedBox height={20} />
      <CustomText style={Styles.splashScreenText2}>
        Boilerplate Template
      </CustomText>
    </View>
  );
};
