import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../../../themes/themes';

const Header = props =>{
    return (
    <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
    </View>    
)
}

const styles =  StyleSheet.create({   
   header: {
       paddingTop: 36,
       height: 100,
       width: '100%',
       backgroundColor: Theme.colors.orangeSyneos,
       justifyContent: 'center',
       alignItems: 'center'
   },
   title:{
      fontSize: 25,
       color: Theme.colors.ligtherGray,
       fontFamily: Theme.fonts.MontSerratSemiBold,    
   }
})

export default Header;