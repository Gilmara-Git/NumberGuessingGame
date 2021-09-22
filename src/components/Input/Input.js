import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Theme from "../../../themes/themes";

const Input = (props) => {
  return (
    <TextInput
      {...props} // forwading TextInput props to where I am using the component
      style={{ ...styles.textInput, ...props.style }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: Theme.colors.mainBlack,
    borderBottomWidth: 1,
    fontFamily: Theme.fonts.SansRegular,
  },
});

export default Input;
