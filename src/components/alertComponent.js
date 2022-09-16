import { Alert } from "react-native";

export const AlertComponent = (title, msg, onPress) => {
  Alert.alert(title, msg, [
    {
      text: "OK",
      onPress: () => {
        if (onPress && typeof onPress === "function") {
          onPress();
        }
      },
    },
  ]);
};
