import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {LOGGEDIN, LOGGEDINAS} from '../../redux/reduxContstants';
import {Styles} from '../../../assets/utils/styles';
import {SizedBox} from '../../components/sizedBox';
import {getPersistentData} from '../../../assets/utils/persistentStorage';

export const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const checkUserLoggedIn = async () => {
    const data = await getPersistentData('auth');
    if (data?.loggedIn) {
      dispatch({type: LOGGEDINAS, LOGGEDINAS: data.data});
      dispatch({type: LOGGEDIN, LOGGEDINAS: true});
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Dashboard'}],
        });
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
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
      <Text style={Styles.splashScreenText1}>React Native</Text>
      <SizedBox height={20} />
      <Text style={Styles.splashScreenText2}>Boilerplate Template</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
