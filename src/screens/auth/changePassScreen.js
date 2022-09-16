import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
// Local Imports
import * as Images from "../../../assets/images";
import * as Sizes from "../../../assets/utils/sizes";
import * as Strings from "../../../assets/utils/strings";

import {
  LogoComponent,
  PassInputBox,
  SizedBox,
  ActionButton,
  KeyboardDismiss,
  HeadingText,
  AlertComponent,
} from "../../components";

import { validatePass } from "../../../assets/utils";

import { authenticateUser } from "../../redux/action";

export const ChangePassScreen = ({ navigation }) => {
  const [pass, setPass] = useState("");
  const [passerror, setPassError] = useState(false);
  const [cpass, setCpass] = useState("");
  const [cpasserror, setCpassError] = useState(false);

  const dispatch = useDispatch();

  const _changePassword = () => {
    if (!checkEmptyFields()) return;
    if (pass != cpass) {
      AlertComponent("Password does not match", "Please try again");
      setCpassError(true);
      return;
    }
    if (!validatePass(pass)) {
      AlertComponent("Password  Invalid", Strings.passInvlid);
      setPassError(true);
      return;
    }
    dispatch(
      authenticateUser((e) => {
        if (e)
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
      })
    );
  };

  const checkEmptyFields = () => {
    if (pass == null || pass.length == 0) {
      setPassError(true);
      AlertComponent("Please enter your password");
      return false;
    }
    if (cpass == null || cpass.length == 0) {
      setCpassError(true);
      AlertComponent("Please confirm your password");
      return false;
    }
    return true;
  };

  return (
    <KeyboardDismiss>
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <LogoComponent
            source={Images.logo}
            height={Sizes.logoBigHeight}
            width={Sizes.logoBigWidth}
            resizeMode={"contain"}
          />
        </View>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <HeadingText label={"Change Password"} />
          <SizedBox height={30} />
          <PassInputBox
            showError={passerror}
            placeholder={"Enter your password"}
            onChangeText={(val) => {
              setPass(val);
            }}
            onFocus={() => {
              if (passerror) setPassError(false);
            }}
          />
          <SizedBox height={20} />
          <PassInputBox
            showError={cpasserror}
            placeholder={"Confirm your password"}
            onChangeText={(val) => {
              setCpass(val);
            }}
            onFocus={() => {
              if (cpasserror) setCpassError(false);
            }}
          />
          <SizedBox height={30} />
          <ActionButton label={"Change Password"} onPress={_changePassword} />
          <SizedBox height={20} />
        </View>
      </SafeAreaView>
    </KeyboardDismiss>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Sizes.gutter,
  },
});
