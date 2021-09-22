import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Theme from "../../../themes/themes";

const NumberComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.olivedrab,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Theme.colors.mainBackground,
  },
  number: {
    fontSize: 22,
    color: Theme.colors.mainBackground,
    padding: 8,
  },
});

export default NumberComponent;
