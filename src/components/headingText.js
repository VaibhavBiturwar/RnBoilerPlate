import React from "react";

// Local Imports
import { Styles } from "../../assets/utils";
import { CustomText } from "./customText";

export const HeadingText = ({
  label = "Heading",
  color = Styles.headingTextStyle.color,
  fontSize = Styles.headingTextStyle.fontSize,
  fontWeight = Styles.headingTextStyle.fontWeight,
  alignSelf = Styles.headingTextStyle.alignSelf,
}) => {
  return (
    <CustomText
      style={{
        color: color,
        alignSelf: alignSelf,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
    >
      {label}
    </CustomText>
  );
};
