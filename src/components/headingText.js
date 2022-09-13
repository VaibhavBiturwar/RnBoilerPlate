import React from 'react';
import {Text} from 'react-native';

// Local Imports
import * as Colors from '../../assets/utils/colors';
import * as Sizes from '../../assets/utils/sizes';
import {Styles} from '../../assets/utils/styles';

export const HeadingText = ({
  label = 'Heading',
  color = Styles.headingTextStyle.color,
  fontSize = Styles.headingTextStyle.fontSize,
  fontWeight = Styles.headingTextStyle.fontWeight,
  alignSelf = Styles.headingTextStyle.alignSelf,
}) => {
  return (
    <Text
      style={{
        color: color,
        alignSelf: alignSelf,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}>
      {label}
    </Text>
  );
};
