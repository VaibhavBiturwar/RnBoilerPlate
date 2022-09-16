import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Local Imports
import { LOGGEDINAS, LOGGEDIN } from "../../redux/reduxContstants";
import { SizedBox, OptionButton } from "../../components";
import {
  clearPersistentData,
  googleSignOut,
  fbSignout,
  Styles,
} from "../../../assets/utils";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state?.loggedInAs);

  const _signout = async () => {
    dispatch({ type: LOGGEDINAS, LOGGEDINAS: null });
    dispatch({ type: LOGGEDIN, LOGGEDINAS: false });
    googleSignOut();
    fbSignout();
    await clearPersistentData("auth");
    navigation.reset({
      index: 0,
      routes: [{ name: "SplashScreen" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SizedBox height={30} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={Styles.settingScreenProfilePicture}
          source={
            authData?.dp
              ? { uri: authData?.dp }
              : require("../../../assets/images/dp.jpeg")
          }
        />
      </View>
      <SizedBox height={30} />
      <OptionButton
        title={"Edit Profile"}
        icon={"user"}
        onPress={() => {
          navigation.navigate("EditProfileScreen");
        }}
      />
      <OptionButton title={"Settings"} icon={"settings"} onPress={() => {}} />
      <OptionButton title={"Signout"} icon={"logout"} onPress={_signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
