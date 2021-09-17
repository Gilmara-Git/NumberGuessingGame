import React from "react";
import { Text, StyleSheet } from "react-native";
import Theme from "../../../themes/themes";

const BodyText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fonts.MontSerratSemiBold,
    fontSize: 35,
    color: Theme.colors.brightBlue  
  },
});

export default BodyText;

