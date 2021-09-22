import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Theme from "../../../themes/themes";

const DefaultButton = (props) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.5} onPress={props.onPress}>
      <View style={{ ...styles.buttonContainer, ...props.style }}>
        <Text style={{ ...styles.buttonTitle, ...props.style }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 8,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonTitle: {
    fontFamily: Theme.fonts.MontSerratSemiBold,
    letterSpacing: 1,
    color: Theme.colors.mainBackground,
    textAlign: "center",
  },
});

export default DefaultButton;
