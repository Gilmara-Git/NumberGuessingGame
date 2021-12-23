import React from "react";
import { 
  TouchableOpacity, 
  StyleSheet, 
  View, 
  Text,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Theme from "../../../themes/themes";

const DefaultButton = (props) => {

 let ButtonComponent =  TouchableOpacity;

  if(Platform.OS === 'android' && Platform.Version >=21){
    ButtonComponent =  TouchableNativeFeedback; // it has the ripple effect in Android only, version >=21
  }


  return (
    <View style={styles.ButtonContainer}>
      <ButtonComponent {...props} activeOpacity={0.5} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={{ ...styles.buttonTitle, ...props.style }}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer:{
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
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
    fontSize: 10
  },
});

export default DefaultButton;
