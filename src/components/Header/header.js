import React from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  Platform,
} from "react-native";
import Theme from "../../../themes/themes";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: 100,
    width: "100%",
    backgroundColor: Platform.OS === 'android' ? Theme.colors.orangeSyneos : Theme.colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: Theme.colors.ligtherGray,
    fontFamily: Theme.fonts.MontSerratSemiBold,  
    
  },
});

export default Header;
