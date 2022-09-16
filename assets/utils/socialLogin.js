import { View, Text, TouchableOpacity } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { LoginManager } from "react-native-fbsdk";
import { Styles } from "../utils/styles";

// * Google
export const googleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    console.log(error.message);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      return error;
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      return error;
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      return error;
    } else {
      // some other error happened
      return error;
    }
  }
};

export const googleSignOut = async () => {
  try {
    await GoogleSignin.signOut(); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

//! ------------------------------------------------------------------------------------------------------

//*  Facebook

export const fbSignout = async () => {
  LoginManager.logOut();
};

// FB Button Component
export const FBButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      // onPress={fbLogInCall}
      onPress={() => {
        onPress();
      }}
    >
      <View style={Styles.fbIconBG}>
        <Text style={Styles.fbIconText}>f</Text>
      </View>
    </TouchableOpacity>
  );
};

// ! RESPONSES

// !Google SignIn Response
/*
{
  userInfo: {
    idToken:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhYWJmNjkwODE5MTYxNmE5MDhhMTM4OTIyMGE5NzViM2MwZmJjYTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2MzA3MzI3NDM3NzEtbWJnM240ZXM4a291Y2sxb3NwMmJiYzFlMGZnMDhoaWcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2MzA3MzI3NDM3NzEtbWJnM240ZXM4a291Y2sxb3NwMmJiYzFlMGZnMDhoaWcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE5MDQ4OTcwNDI5Mzc1OTczNjEiLCJlbWFpbCI6InZhaWJoYXYudmFsZXJlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiTXhlOUhPenIwc3FKVjNBYkpZQ2dFQSIsIm5vbmNlIjoid0hleG9LZ2s3aTctRjBGVWxkU01HMWROOV9XVVJnU19PY3VqWlFpdEt1cyIsIm5hbWUiOiJWYWliaGF2IEJpdHVyd2FyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FJdGJ2bWtmd3YxdlM5RTFHNTBlWmhOaDV6dEhmblVTU0JFTHgtUk56NEFnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlZhaWJoYXYiLCJmYW1pbHlfbmFtZSI6IkJpdHVyd2FyIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NjI5ODkyMDMsImV4cCI6MTY2Mjk5MjgwM30.H7yjlOebOZUyQDXN518igYE_mliXpLOEHSfVwTOY6E2lCzNK1Vo0ZQY4cbJSsaWb6_y4nNFuEvk3mK_4_565LVjhMdSRdFQS31GTKHfM6guGalIfYtS6OA-AeI3rIVCubYbfYZMik4u6p3ghWMLX7Xoc5uif1ixy0aZX86Wmn5KWsINCTQPcYYpF7hjvavgpgtpxHHcutHBHFKifeoxO9LUsRxL27DX57Xlj1O088h85HbA4drJZ4ZEvwjL_UxL2kkuNDaWGD7WSFy6QxTrx7oRuS-jogUfuFpDBwoAuRAr4dSINgOvQ1Tw5NSfQx_JDV1QG2QI4hnONhkLrKrYMkg',
    scopes: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'openid',
    ],
    serverAuthCode: null,
    user: {
      email: 'vaibhav.valere@gmail.com',
      familyName: 'Biturwar',
      givenName: 'Vaibhav',
      id: '111904897042937597361',
      name: 'Vaibhav Biturwar',
      photo:
        'https://lh3.googleusercontent.com/a/AItbvmkfwv1vS9E1G50eZhNh5ztHfnUSSBELx-RNz4Ag=s120',
    },
  },
};
*/

// !Facebook SignIn Response
// {
//   email: 'valere_cnmougb_valere@tfbnw.net',
//   id: '105011389028620',
//   name: 'Valere Valere',
//   picture: {
//     data: {
//       height: 50,
//       is_silhouette: true,
//       url: 'https://scontent.fpnq11-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=q9UFKQUCFwYAX82E43s&_nc_ht=scontent.fpnq11-1.fna&edm=AP4hL3IEAAAA&oh=00_AT_oZQ6ao99yFWxaJMjYOc4pv0LlMSsgCGUys_ooV95PpQ&oe=6346F699',
//       width: 50,
//     },
//   },
// };
