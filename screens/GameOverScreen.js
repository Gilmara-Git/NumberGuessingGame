import React from 'react';
import { View, StyleSheet, Button,Text, Image } from 'react-native';
import BodyText from '../src/components/BodyText/BodyText';
import DefaultButton from '../src/components/DefaultButton/DefaultButton';
import Theme from '../themes/themes';



const GameOverScreen = props =>{ 
    return (
    <View style={styles.gameOverContainer}>       
            <BodyText>The Game is Over</BodyText>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Number of rounds: {props.numberOfRounds}</Text>
                <Text style={styles.resultText}>Number was: {props.userNumber}</Text>
            </View>
            <View style={styles.reStartButton}>
                <DefaultButton 
                    title="NEW GAME"
                    onPress={props.onRestartGame}
                    color={Theme.colors.orange}
                />    
            </View>
    </View>
    )
};


const styles = StyleSheet.create({
    gameOverContainer:{      
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Theme.colors.mainBackground     
    },
    resultContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
        width: '80%',
        marginVertical: 20
    },
    resultText:{
       color: Theme.colors.mainBlack,
       fontSize: 18,
       fontFamily: Theme.fonts.SansBold,
    },
    imageContainer:{    
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Theme.colors.mainBackground,
        overflow: 'hidden',
        marginVertical: 30
    },
    image:{
        width: '100%',
        height: '100%',
    },
    reStartButton:{
        width: '50%',
       
        
    }
});

export default GameOverScreen;
