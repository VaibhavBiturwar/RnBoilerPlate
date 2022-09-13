import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

// Local Imports
import {LogoComponent} from '../../components/logoComponent';
import * as Images from '../../../assets/images';
import * as Sizes from '../../../assets/utils/sizes';
import {IconInputBox} from '../../components/InputBox/iconInputBox';
import {PassInputBox} from '../../components/InputBox/passInputBox';
import {SizedBox} from '../../components/sizedBox';
import {ActionButton} from '../../components/actionButton/actionButton';
import {TextActionButton} from '../../components/actionButton/textActionButton';
import {KeyboardDismiss} from '../../components/keyboardDismiss';
import {HeadingText} from '../../components/headingText';
import {AlertComponent} from '../../components/alertComponent';
import {authenticateUser} from '../../redux/action';
import {Loader} from '../../components/loader';

import {savePersistentData} from '../../../assets/utils/persistentStorage';
import {googleSignIn} from '../../../assets/utils/socialLogin';
import {LOGGEDINAS, LOGGEDIN} from '../../redux/reduxContstants';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailerror, setEmailError] = useState(false);
  const [pass, setPass] = useState('');
  const [passerror, setPassError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fdata, setfdata] = useState('Not Logged in');

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
              await savePersistentData('auth', val);
              setLoading(false);
              navigation.reset({
                index: 0,
                routes: [{name: 'Dashboard'}],
              });
            }
          }, 2000);
        }),
      );
    } else {
      console.log('Empty Fields');
    }
  };

  const _loginWithGoogle = async () => {
    const x = await googleSignIn();
    console.log(x);
    const values = {
      loggedIn: true,
      data: {
        fname: x.user.familyName,
        lname: x.user.givenName,
        age: '20',
        gender: 'Male',
        mob: '9678564402',
      },
    };
    dispatch({type: LOGGEDINAS, LOGGEDINAS: values.data});
    dispatch({type: LOGGEDIN, LOGGEDINAS: true});
    await savePersistentData('auth', values);
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
  };

  const checkEmptyFields = () => {
    if (email == null || email.length == 0) {
      setEmailError(true);
      AlertComponent('Please enter username/email');
      return false;
    }
    if (pass == null || pass.length == 0) {
      setPassError(true);
      AlertComponent('Please enter your password');
      return false;
    }
    return true;
  };

  // Facebook
  //*  Facebook
  const fbSigninWithData = resCallback => {
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('FB Login Result:', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email required'});
        }
        if (result.isCancelled) {
          console.log('Request Cancelled');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const fbLogInCall = async () => {
    try {
      await fbSigninWithData(_responseInfoCallback);
    } catch (error) {
      console.log('Error in fbLogInCall: ', error);
    }
  };

  const _responseInfoCallback = async (error, result) => {
    if (error) {
      console.log('Error in _responseInfoCallback: ', error);
    } else {
      console.log('Successfully logged in Result: ', result);
      setfdata(result.email + '\n ' + result.id + '\n ' + result.name + '\n ');
    }
  };

  const fbSignout = async () => {
    LoginManager.logOut();
    setfdata('Signed Out');
  };

  const FBButton = () => {
    return (
      <TouchableOpacity onPress={fbLogInCall}>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            f
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    // function to load here
    GoogleSignin.configure();
  }, []);

  return (
    <KeyboardDismiss>
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <LogoComponent
              source={Images.logo}
              height={Sizes.logoBigHeight}
              width={Sizes.logoBigWidth}
              resizeMode={'contain'}
            />
          </View>
          <View style={{justifyContent: 'center', flex: 1}}>
            <HeadingText label={'Login'} />
            <SizedBox height={30} />
            <IconInputBox
              showError={emailerror}
              placeholder={'Enter your email address'}
              iconName="mail"
              onChangeText={val => {
                setEmail(val);
              }}
              onFocus={() => {
                if (emailerror) setEmailError(false);
              }}
            />
            <SizedBox height={20} />
            <PassInputBox
              showError={passerror}
              placeholder={'Enter your password'}
              onChangeText={val => {
                setPass(val);
              }}
              onFocus={() => {
                if (passerror) setPassError(false);
              }}
            />
            <SizedBox height={30} />
            <View style={{flexDirection: 'row-reverse'}}>
              <TextActionButton
                label={'Forgot Password?'}
                onPress={() => {
                  navigation.navigate('ForgotPassScreen');
                }}
              />
            </View>
            <SizedBox height={10} />
            <ActionButton label={'Login'} onPress={_login} />
            <SizedBox height={20} />
            <View style={{alignSelf: 'center'}}>
              <TextActionButton
                label={"Don't have account? Signup"}
                onPress={() => {
                  navigation.navigate('SignupScreen');
                }}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Icon}
                  color={GoogleSigninButton.Color.Light}
                  onPress={_loginWithGoogle}
                />
                <FBButton />
              </View>
            </View>
          </View>
          {/* Facebook */}
          <View>
            <Text>{fdata}</Text>
            <Button title={'Facebook Signin with data'} onPress={fbLogInCall} />
            <Button title={'Facebook Signout'} onPress={fbSignout} />
          </View>
        </SafeAreaView>
        {loading && <Loader />}
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
