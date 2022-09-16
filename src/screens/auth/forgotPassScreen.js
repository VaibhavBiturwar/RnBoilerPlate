import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

// Local Imports
import {
  LogoComponent,
  IconInputBox,
  SizedBox,
  ActionButton,
  TextActionButton,
  KeyboardDismiss,
  HeadingText,
  AlertComponent,
} from "../../components";

import { checkEmailFormat } from "../../../assets/utils/helperFunctions";

import * as Images from "../../../assets/images";
import * as Sizes from "../../../assets/utils/sizes";

export const ForgotPassScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState(false);

  const sendOtp = () => {
    if (!checkEmptyFields()) return;
    if (!checkEmailFormat(email)) {
      AlertComponent("Email not valid", "Please enter a valid email address");
      setEmailError(true);
      return;
    }
    navigation.navigate("OtpScreen");
  };

  const checkEmptyFields = () => {
    if (email == null || email.length == 0) {
      setEmailError(true);
      AlertComponent("Please enter your registered email address");
      return false;
    }
    return true;
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
            <HeadingText label={"Forgot Password"} />
            <SizedBox height={30} />
            <IconInputBox
              showError={emailerror}
              placeholder={"Your registered email address"}
              iconName="mail"
              onChangeText={(val) => {
                setEmail(val);
              }}
              onFocus={() => {
                if (emailerror) setEmailError(false);
              }}
            />

            <SizedBox height={30} />
            <ActionButton label={"Send OTP"} onPress={sendOtp} />
            <SizedBox height={20} />
            <View style={{ alignSelf: "center" }}>
              <TextActionButton
                label={"Got back to login"}
                onPress={() => {
                  navigation.pop();
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Sizes.gutter,
  },
});
