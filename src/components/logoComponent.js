import React from "react";
import { Image } from "react-native";

export const LogoComponent = ({ source, height, width, resizeMode }) => {
  return <Image source={source} style={{ height, width, resizeMode }} />;
};
