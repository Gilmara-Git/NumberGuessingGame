import React from "react";
import { Text, StyleSheet } from "react-native";
import Theme from "../../../themes/themes";

const BodyText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fonts.SansBold,
    fontSize: 40,   
  },
});

export default BodyText;
