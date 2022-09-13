import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

export const KeyboardDismiss = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};
