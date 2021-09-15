import React from 'react';
import { View, StyleSheet, Button,Text} from 'react-native';
import BodyText from '../src/components/BodyText/BodyText';
import Theme from '../themes/themes';


const GameOverScreen = props =>{ 
    return (
    <View style={styles.gameOverContainer}>       
            <BodyText>The Game is Over</BodyText>
            <View style={styles.resultContainer}>
                <Text>Number of rounds: {props.numberOfRounds}</Text>
                <Text>Number was: {props.userNumber}</Text>
            </View>
            <Button title="NEW GAME" onPress={props.onRestartGame}/>       
    </View>
    )
};


const styles = StyleSheet.create({
    gameOverContainer:{      
        flex:1,
        alignItems: 'center',
        padding:20,
        backgroundColor:Theme.colors.orange     
    },
    resultContainer:{
        flexDirection: 'row',
        
    }
});

export default GameOverScreen;
