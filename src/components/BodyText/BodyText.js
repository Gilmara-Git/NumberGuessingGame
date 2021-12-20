import React from "react";
import { 
  Text, 
  StyleSheet,
  Dimensions
} from "react-native";
import Theme from "../../../themes/themes";

const BodyText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fonts.MontSerratSemiBold,
    fontSize: Dimensions.get('window').height < 550 ? 20 : 35,
    color: Theme.colors.navyBlue,
  },
});

export default BodyText;
