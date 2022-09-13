import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Local Import
import {getUsers} from '../../redux/action';
import {ListItem} from '../../components/listItem';

import {getPersistentData} from '../../../assets/utils/persistentStorage';

export const HomeScreen = () => {
  const userData = useSelector(state => state?.loggedInAs);
  const DATA = useSelector(state => state?.users);
  const dispatch = useDispatch();

  const renderItem = ({item}) => <ListItem item={item} />;

  useEffect(() => {
    // function to load here
    dispatch(getUsers());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Logged in as </Text>
      {userData && (
        <View>
          <Text>
            {userData.fname} {userData.lname}
          </Text>
          <Text>{userData.age}</Text>
          <Text>{userData.gender}</Text>
          <Text>{userData.mob}</Text>
        </View>
      )}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
