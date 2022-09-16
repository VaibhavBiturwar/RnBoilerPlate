# React Native Boilerplate

## Installation
```
npx react-native init <AppName> --template https://github.com/Valere3162/ReactNative_BoilerPlate
cd <AppName>
npm install
cd ios && pod install
cd ..
react-native run-android or react-native run-ios 
```
<hr>

## Table of Contents
- [React Native Boilerplate](#react-native-boilerplate)
  - [Installation](#installation)
  - [Table of Contents](#table-of-contents)
  - [Used Dependencies](#used-dependencies)
  - [Navigation Containers](#navigation-containers)
  - [Redux](#redux)
  - [Screens](#screens)
  - [Assets](#assets)
  - [Components](#components)



## Used Dependencies
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) for storing persistent data.
- [@react-native-google-signin/google-signin](https://github.com/react-native-google-signin/google-signin) for google signin.
- [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/) for bottom navigation bar.
- [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/) for authentication stack navigation.
- @react-navigation/native for using native stack functionality.
- [@twotalltotems/react-native-otp-input](https://github.com/tttstudios/react-native-otp-input) for otp input.
- [react-native-fbsdk](https://github.com/facebookarchive/react-native-fbsdk) for facebook login.
- [react-native-image-picker](https://github.com/react-native-image-picker/react-native-image-picker) for selecting image from library.
- [react-redux](https://react-redux.js.org/tutorials/quick-start) for app wide state management.
- [redux-thunk](https://github.com/reduxjs/redux-thunk) for Asynchronous redux calls.
<hr>

## Navigation Containers
1. AuthNavigator => Stack Navigation for authentication screens.
2. DashNavigator => Bottom tab bar navigation for app home.
3. ProfileNavigator => Stack Navigation for profile section.
<hr>

## Redux
* store with redux store and thunk middleWare.
* reduxConstants for accessing and dispatching state variables names.
* reducer with initial state and reducer.
* action with redux asynchronous functions.
    1. authenticateUser().
    2. getUsers().
<hr>

## Screens
1. Auth
    * SplashScreen
    * LoginScreen
    * SignUpScreen
    * ForgotPasswordScreen
    * OtpScreen
    * ChangePasswordScreen
2. Dashboard
   * HomeScreen
   * ProfileScreen
   * EditProfileScreen
<hr>


## Assets
1. Font
   * Poppoins-Regular
2. Images
   * dp.jpeg => for default profile picture
   * logo.jpg => for brand logo
3. Utilities
   * ApiCall => to carryout all api calls.
   * Colors => Contains constants with color codes used inside the app.
   * HelperFunction => Contains emailCheck and passwordValidate functions.
   * PersistentSotrage => Contains functions to interact with device persistence storage.
   * Sizes => Contains constants for text size, weight, padding, margin, gutter, etc.  
   * SocialLogin => Contains functions to call social login api's.
   * Strings => Contains string constants for messages.
   * Styles => Contains style constants for all custom components.
   * Urls => Contains constants for all api base and endpoints.  





## Components
   [Note] all custom components can be styled from styles file in assets/utils.
| Components | Description |
| ------ | ------ |
| TopBar | Navigation top bar with customizable<br> <b>Parameters</b><br>title(string)<br> onBackPress(function)(optional)<br> onSecondaryPress(function)(optional)<br>secondaryPressIcon(String)(optional) |
| Loader | Full screen activity indicator with customizable label <br><b>Parameters</b><br> label(String)(Optional) |
| SizedBox | To create space between components. <br><b>Parameters</b><br> height(integer)(optional)<br> width(integer)(optional) |
| CustomIcon | Makes use of [icoMoon](https://icomoon.io/) for custom icons pack. All the used icons are available in svgImages folder.<br><b>Parameters</b><br>  name(String)<br> color(String)(Optional)<br> size(integer) |
| LogoComponent | To display the logo as a component. <br><b>Parameters</b><br>  source(ImageSourcePropType)<br> height(integer)<br> width(integer)<br>resizeMode(ImageResizeMode)|
| InputBox | Simple input box with label, placeholder and errorIndicator. <br><b>Parameters</b><br> boxContainer(ViewStyle)<br> textInput(TextStyle)<br> labelStyle(TextStyle)<br> placeholder(String)<br> placeholderTextColor(String)<br> label(String)<br> onChangeText(function)<br> flex(double)<br> showError(bool)<br> onFocus(function)   |
| IconInputBox | Input box with heading icon, label, placeholder and errorIndicator.<br><b>Parameters</b><br> boxContainer(ViewStyle)<br> textInput(TextStyle)<br> labelStyle(TextStyle)<br> placeholder(String)<br> placeholderTextColor(String)<br> label(String)<br>iconName(String)<br> onChangeText(function)<br> showError(bool)<br> onFocus(function)<br> value(String)|
| PassInputBox | Password Input box with heading icon, Show password icon, secured text , label, placeholder and errorIndicator.<br><b>Parameters</b><br> boxContainer(ViewStyle)<br> textInput(TextStyle)<br> labelStyle(TextStyle)<br> placeholder(String)<br> placeholderTextColor(String)<br> label(String)<br>onChangeText(function)<br> showError(bool)<br> onFocus(function)|
| HeadingText | Heading text component<br><b>Paramerers</b><br> label(String)<br>color(String)(Optional)<br>fontSize(integer)(Optional)<br>fontWeight(TextStyle.fontWeight)(Optional)<br>alignSelf(TextStyle.alignSelf)(Optional) |
| OptionButton | Option to show on profile screen.<br><b>Parameters</b><br>title(String)<br> icon(String)<br> onPress(function) |
| AlertComponent | Function to display alert on screen.<br><b>Returns</b><br> title(String) msg(String)(Optional)<br> onPress(function) |
| ListItem | Item to render in list.<br><b>Takes item object as parameter with keys</b><br> id(String)<br> avatar(ImageSourcePropType)<br> first_name(String)<br> last_name(String)<br> email(String) |
| KeyboardDismiss | Wrapper to implement keyboard dismiss functionality on screen. |
| ActionButton | Action button with rounded edges.<br><b>Parameters</b></br> label(String)<br>onPress(function)<br>onPressIn(function)(Optional)<br>onPressOut(function)(Optional)<br>disabled (bool)(Optional)<br>,buttonStyle (View.Style)(Optional)<br>buttonTextStyle (Text.Style)(Optional)<br>  |
| TextActionButton | Text that performs onPress actions.<br><b>Parameters</b></br> label(String)<br>onPress(function)(Optional)<br>buttonTextStyle(View.Style)(Optional) |







