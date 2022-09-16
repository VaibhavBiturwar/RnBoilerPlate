import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
// Local Imports
import * as Images from "../../../assets/images";
import * as Sizes from "../../../assets/utils/sizes";
import {
  checkEmailFormat,
  validatePass,
  passInvlid,
} from "../../../assets/utils";

import {
  LogoComponent,
  InputBox,
  IconInputBox,
  PassInputBox,
  SizedBox,
  ActionButton,
  TextActionButton,
  KeyboardDismiss,
  HeadingText,
  AlertComponent,
  Loader,
} from "../../components";

import { authenticateUser } from "../../redux/action";

const sizedBoxHeight = Sizes.marginMedium;
export const SignupScreen = ({ navigation }) => {
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState(false);
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [uname, setUname] = useState("");
  const [unameError, setUnameError] = useState(false);
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState(false);
  const [cpass, setCpass] = useState("");
  const [cpassError, setCpassError] = useState(false);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const _signup = () => {
    // ! Checking for empty data in text fields.
    if (!checkEmptyFields()) return;
    // ! checking for password confirm
    if (pass != cpass) {
      AlertComponent("Password does not match", "Please try again");
      setCpassError(true);
      return;
    }
    // ! Checking format of email field
    if (!checkEmailFormat(email)) {
      AlertComponent("Email not valid", "Please enter a valid email address");
      setEmailError(true);
      return;
    }
    // ! Checking format of password field
    if (!validatePass(pass)) {
      AlertComponent("Password  Invalid", passInvlid);
      setPassError(true);
      return;
    }

    setLoading(true);

    dispatch(
      authenticateUser((e) => {
        if (e) {
          // Setting persistent storage
          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
        }
      })
    );
  };

  const checkEmptyFields = () => {
    if (fname == null || fname.length == 0) {
      setFnameError(true);
      AlertComponent("First Name cannot be empty");
      return false;
    }

    if (lname == null || lname.length == 0) {
      setLnameError(true);
      AlertComponent("Last Name cannot be empty");
      return false;
    }
    if (email == null || email.length == 0) {
      setEmailError(true);
      AlertComponent("Email cannot be empty");
      return false;
    }
    if (uname == null || uname.length == 0) {
      setUnameError(true);
      AlertComponent("Username cannot be empty");
      return false;
    }
    if (pass == null || pass.length == 0) {
      setPassError(true);
      AlertComponent("Password cannot be empty");
      return false;
    }
    if (cpass == null || cpass.length == 0) {
      setCpassError(true);
      AlertComponent("Confirm Password cannot be empty");
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
            <HeadingText label={"Sign-Up"} />
            <SizedBox height={30} />
            {/* First & last name */}
            <View style={styles.rowItemsStyle}>
              <InputBox
                showError={fnameError}
                placeholder={"First Name"}
                onChangeText={(val) => {
                  setFname(val);
                }}
                onFocus={() => {
                  if (fnameError) setFnameError(false);
                }}
              />
              <SizedBox width={sizedBoxHeight} />
              <InputBox
                showError={lnameError}
                placeholder={"Last Name"}
                onChangeText={(val) => {
                  setLname(val);
                }}
                onFocus={() => {
                  if (lnameError) setLnameError(false);
                }}
              />
            </View>
            <SizedBox height={sizedBoxHeight} />
            {/* Email */}
            <IconInputBox
              showError={emailError}
              placeholder={"Email Address"}
              iconName="mail"
              onChangeText={(val) => {
                setEmail(val);
              }}
              onFocus={() => {
                if (emailError) setEmailError(false);
              }}
            />
            <SizedBox height={sizedBoxHeight} />

            {/*Username  */}
            <IconInputBox
              showError={unameError}
              placeholder={"Username"}
              iconName="user"
              onChangeText={(val) => {
                setUname(val);
              }}
              onFocus={() => {
                if (unameError) setUnameError(false);
              }}
            />
            <SizedBox height={sizedBoxHeight} />

            {/* Password */}
            <PassInputBox
              showError={passError}
              placeholder={"Password"}
              onChangeText={(val) => {
                setPass(val);
              }}
              onFocus={() => {
                if (passError) setPassError(false);
              }}
            />
            <SizedBox height={sizedBoxHeight} />
            {/* Confirm Password */}
            <PassInputBox
              showError={cpassError}
              placeholder={"Confirm Password"}
              onChangeText={(val) => {
                setCpass(val);
              }}
              onFocus={() => {
                if (cpassError) setCpassError(false);
              }}
            />
            <SizedBox height={30} />
            <ActionButton label={"Sign-Up"} onPress={_signup} />
            <SizedBox height={20} />
            <View style={{ alignSelf: "center" }}>
              <TextActionButton
                label={"Already have an accout? Login"}
                onPress={() => {
                  navigation.pop();
                }}
              />
            </View>
          </View>
          {loading && <Loader label={"Creating Your Account..."} />}
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

  rowItemsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
