import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from "react-native-fbsdk";

// Local Imports
import {
  LogoComponent,
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

import * as Images from "../../../assets/images";
import * as Sizes from "../../../assets/utils/sizes";
import { authenticateUser } from "../../redux/action";

import {
  savePersistentData,
  googleSignIn,
  FBButton,
} from "../../../assets/utils";
import { LOGGEDINAS, LOGGEDIN } from "../../redux/reduxContstants";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState(false);
  const [pass, setPass] = useState("");
  const [passerror, setPassError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // FUNCTIONS
  const _login = () => {
    if (checkEmptyFields()) {
      setLoading(true);
      dispatch(
        authenticateUser((e, data) => {
          setTimeout(async () => {
            if (e) {
              const val = {
                loggedIn: true,
                data: data,
              };
              await savePersistentData("auth", val);
              setLoading(false);
              navigation.reset({
                index: 0,
                routes: [{ name: "Dashboard" }],
              });
            }
          }, 2000);
        })
      );
    } else {
      console.log("Empty Fields");
    }
  };

  const _loginWithGoogle = async () => {
    const x = await googleSignIn();
    if (x?.user) {
      const values = {
        loggedIn: true,
        data: {
          fname: x.user.givenName,
          lname: x.user.familyName,
          age: "20",
          gender: "Male",
          mob: "9678564402",
          dp: x.user.photo,
        },
      };
      dispatch({ type: LOGGEDINAS, LOGGEDINAS: values.data });
      dispatch({ type: LOGGEDIN, LOGGEDINAS: true });
      await savePersistentData("auth", values);
      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
    } else {
      AlertComponent("Error Occurrred", x.message);
    }
  };

  const fbLoginSuccess = async (result) => {
    console.log(result.picture.data.url);
    const name = result.name.split(" ");
    const values = {
      loggedIn: true,
      data: {
        fname: name[0],
        lname: name[1],
        age: "20",
        gender: "Male",
        mob: "9678564402",
        dp: result.picture.data.url,
      },
    };
    dispatch({ type: LOGGEDINAS, LOGGEDINAS: values.data });
    dispatch({ type: LOGGEDIN, LOGGEDINAS: true });
    await savePersistentData("auth", values);
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  const fbSigninWithData = (resCallback) => {
    return LoginManager.logInWithPermissions(["email", "public_profile"]).then(
      (result) => {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes("email")
        ) {
          resCallback({ message: "Email required" });
          AlertComponent("Email is required");
        }
        if (result.isCancelled) {
          console.log("Request Cancelled");
          AlertComponent("Request Cancelled");
        } else {
          const infoRequest = new GraphRequest(
            "/me?fields=email,name,picture",
            null,
            resCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  };

  const fbLogInCall = async () => {
    try {
      await fbSigninWithData(_responseInfoCallback);
    } catch (error) {
      console.log("Error in fbLogInCall: ", error);
      AlertComponent("Facebook Login Error: ", error);
    }
  };

  const _responseInfoCallback = async (error, result) => {
    if (error) {
      console.log("Error in _responseInfoCallback: ", error);
    } else {
      fbLoginSuccess(result);
    }
  };

  const checkEmptyFields = () => {
    if (email == null || email.length == 0) {
      setEmailError(true);
      AlertComponent("Please enter username/email");
      return false;
    }
    if (pass == null || pass.length == 0) {
      setPassError(true);
      AlertComponent("Please enter your password");
      return false;
    }
    return true;
  };

  useEffect(() => {
    // function to load here
    GoogleSignin.configure();
  }, []);

  return (
    <KeyboardDismiss>
      <View style={{ flex: 1 }}>
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
            <HeadingText label={"Login"} />
            <SizedBox height={30} />
            <IconInputBox
              showError={emailerror}
              placeholder={"Enter your email address"}
              iconName="mail"
              onChangeText={(val) => {
                setEmail(val);
              }}
              onFocus={() => {
                if (emailerror) setEmailError(false);
              }}
            />
            <SizedBox height={20} />
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
            <SizedBox height={30} />
            <View style={{ flexDirection: "row-reverse" }}>
              <TextActionButton
                label={"Forgot Password?"}
                onPress={() => {
                  navigation.navigate("ForgotPassScreen");
                }}
              />
            </View>
            <SizedBox height={10} />
            <ActionButton label={"Login"} onPress={_login} />
            <SizedBox height={20} />
            <View style={{ alignSelf: "center" }}>
              <TextActionButton
                label={"Don't have account? Signup"}
                onPress={() => {
                  navigation.navigate("SignupScreen");
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 10,
                }}
              >
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Icon}
                  color={GoogleSigninButton.Color.Light}
                  onPress={_loginWithGoogle}
                />
                <FBButton onPress={fbLogInCall} />
              </View>
            </View>
          </View>
        </SafeAreaView>
        {loading && <Loader label={"Siging you in..."} />}
      </View>
    </KeyboardDismiss>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Sizes.gutter,
  },
});
