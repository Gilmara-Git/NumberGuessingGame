import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../../../themes/themes';


const StartButton = props =>{
    return (    
            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={props.onPress}>
                <View style={{...styles.buttonContainer, ...props.style}}>
                    <Text style={{...styles.buttonText, ...props.style}}>{props.children}</Text>
                </View>
            </TouchableOpacity>
            )

}

const styles =  StyleSheet.create({
    buttonContainer:{
    backgroundColor: Theme.colors.orangeSyneos,
    padding:10,
    alignItems: 'center',   
    borderRadius: 8,
    width: '80%'
},
    buttonText:{
        fontSize: 21,
        color: Theme.colors.ligtherGray,
        fontFamily: Theme.fonts.MontSerratSemiBold,
        letterSpacing:1
    }

});

export default StartButton;