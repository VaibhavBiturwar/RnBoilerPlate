import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

// Local Imports
import {
  LogoComponent,
  SizedBox,
  ActionButton,
  TextActionButton,
  KeyboardDismiss,
  HeadingText,
  AlertComponent,
} from "../../components";
import * as Images from "../../../assets/images";
import * as Sizes from "../../../assets/utils/sizes";
import * as Colors from "../../../assets/utils/colors";

export const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [otperror, setOtpError] = useState(false);

  const _checkOtp = () => {
    if (!checkEmptyFields()) return;

    navigation.navigate("ChangePassScreen");
  };

  const checkEmptyFields = () => {
    if (otp == null || otp.length == 0) {
      setOtpError(true);
      AlertComponent("Please enter your otp");
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
            <HeadingText label={"Enter OTP"} />
            <SizedBox height={30} />

            <OTPInputView
              style={{ width: "60%", height: 100, alignSelf: "center" }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                setOtp(code);
              }}
            />

            <ActionButton label={"Confirm OTP"} onPress={_checkOtp} />
            <SizedBox height={20} />
            <View style={{ alignSelf: "center" }}>
              <TextActionButton
                label={"Change email"}
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

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.darkGray,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});
