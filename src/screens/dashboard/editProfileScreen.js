import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { launchImageLibrary } from "react-native-image-picker";

// Local Imports
import {
  TopBar,
  TextActionButton,
  ActionButton,
  SizedBox,
  IconInputBox,
  Loader,
} from "../../components";
import { Styles } from "../../../assets/utils";
import { LOGGEDINAS } from "../../redux/reduxContstants";

const spacerHeight = 10;

export const EditProfileScreen = ({ navigation }) => {
  const authData = useSelector((state) => state.loggedInAs);

  const [fname, setFname] = useState(authData.fname ? authData.fname : "");
  const [lname, setLname] = useState(authData.lname ? authData.lname : "");
  const [uname, setUname] = useState(authData.uname ? authData.funame : "");
  const [email, setEmail] = useState(authData.email ? authData.email : "");
  const [dp, setDp] = useState(authData.dp ? authData.dp : null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const saveData = () => {
    setLoading(true);

    dispatch({ type: LOGGEDINAS, LOGGEDINAS: authData });
    setTimeout(() => {
      setLoading(false);
      navigation.pop();
    }, 2000);
  };

  const getImageFromLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      quality: 0.5,
    });
    if (!result?.didCancel) {
      {
        res = result.assets[0];
        setDp(res.uri);
        authData.dp = res.uri;
      }
    }
  };

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: Styles.tabBarStyle,
      });
  }, [navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TopBar
          title={"Edit Profile"}
          onBackPress={() => {
            navigation.pop();
          }}
        />
        <View style={styles.dataContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={Styles.settingScreenProfilePicture}
              source={
                dp ? { uri: dp } : require("../../../assets/images/dp.jpeg")
              }
            />
            <SizedBox height={spacerHeight} />
            <TextActionButton
              label="Edit Profile Picture"
              onPress={getImageFromLibrary}
            />
          </View>
          <SizedBox height={spacerHeight * 3} />
          {/* Input Fields */}
          <>
            <IconInputBox
              placeholder={"First Name"}
              onChangeText={(e) => {
                setFname(e);
              }}
              value={fname}
            />
            <SizedBox height={spacerHeight} />
            <IconInputBox
              placeholder={"Last Name"}
              value={lname}
              onChangeText={(e) => {
                setLname(e);
              }}
            />
            <SizedBox height={spacerHeight} />
            <IconInputBox
              value={email}
              placeholder={"Email"}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
            <SizedBox height={spacerHeight} />
            <IconInputBox
              value={uname}
              placeholder={"Userame"}
              onChangeText={(e) => {
                setUname(e);
              }}
            />
          </>
          <SizedBox height={spacerHeight * 3} />
          <ActionButton label={"Save"} onPress={saveData} />
        </View>
      </SafeAreaView>
      {loading && <Loader />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    paddingTop: 20,
    padding: 20,
    justifyContent: "flex-end",
  },
});
