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
    <View style={{...styles.headerBase, ...Platform.select({ android: styles.headerAndroidSpecific, ios: styles.headerIosSpecific })}}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    paddingTop: 20,
    height: 100,
    width: "100%",
    // backgroundColor: Platform.OS === 'android' ? Theme.colors.orangeSyneos : Theme.colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  headerAndroidSpecific:{
    backgroundColor:Theme.colors.orangeSyneos,
  
  },
  headerIosSpecific:{
    backgroundColor: Theme.colors.navyBlue,
    borderBottomColor: Theme.colors.orangeSyneos,
    borderWidth: 3
  },
  title: {
    fontSize: 20,
    color: Theme.colors.mainBackground,
    fontFamily: Theme.fonts.MontSerratSemiBold,  
    
  },
});

export default Header;
