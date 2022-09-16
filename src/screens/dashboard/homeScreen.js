import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Local Import
import { getUsers } from "../../redux/action";
import { ListItem, CustomText } from "../../components";

export const HomeScreen = () => {
  const userData = useSelector((state) => state?.loggedInAs);
  const DATA = useSelector((state) => state?.users);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => <ListItem item={item} />;

  useEffect(() => {
    // function to load here
    dispatch(getUsers());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomText>Logged in as</CustomText>
      {userData && (
        <View>
          <CustomText>
            {userData.fname} {userData.lname}
          </CustomText>
          <CustomText>{userData.age}</CustomText>
          <CustomText>{userData.gender}</CustomText>
          <CustomText>{userData.mob}</CustomText>
        </View>
      )}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
