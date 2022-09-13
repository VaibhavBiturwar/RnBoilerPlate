/*
 *@Author Vaibhav Biturwar
 */

import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  LightTheme,
} from '@react-navigation/native';
import {Provider} from 'react-redux';

// Local Import
import {AuthNavigator} from './src/navi/authNavigator';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* // <NavigationContainer theme={DarkTheme}> */}
      <NavigationContainer theme={LightTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
