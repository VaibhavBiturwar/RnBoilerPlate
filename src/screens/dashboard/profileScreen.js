import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

// Local Imports
import {LogoComponent} from '../../components/logoComponent';
import * as Images from '../../../assets/images';
import * as Sizes from '../../../assets/utils/sizes';
import {SizedBox} from '../../components/sizedBox';
import {OptionButton} from '../../components/optionButton';

import {LOGGEDINAS, LOGGEDIN} from '../../redux/reduxContstants';
import {
  clearPersistentData,
  getPersistentData,
} from '../../../assets/utils/persistentStorage';
import {googleSignOut} from '../../../assets/utils/socialLogin';

export const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const _signout = async () => {
    dispatch({type: LOGGEDINAS, LOGGEDINAS: null});
    dispatch({type: LOGGEDIN, LOGGEDINAS: false});
    googleSignOut();

    await clearPersistentData('auth');
    navigation.reset({
      index: 0,
      routes: [{name: 'SplashScreen'}],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <LogoComponent
          source={Images.logo}
          height={Sizes.logoBigHeight}
          width={Sizes.logoBigWidth}
          resizeMode={'contain'}
        />
      </View>
      <SizedBox height={30} />
      <OptionButton
        title={'About'}
        icon={'user'}
        onPress={async () => {
          let data = await getPersistentData('auth');
          if (data) {
            console.log('Stored  Date', data.loggedIn, data.data);
          } else {
            console.log('No data in async storage');
          }
        }}
      />
      <OptionButton title={'Settings'} icon={'mail'} onPress={() => {}} />
      <OptionButton title={'Signout'} icon={'eyeOpen'} onPress={_signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
