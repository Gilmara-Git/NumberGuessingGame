import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Button,
    Alert 
} from 'react-native';

import Theme from '../themes/themes';
import GlobalStyles from '../src/global/global-styles'

import Card from '../src/components/Card/Card';
import Input from '../src/components/Input/Input';
import NumberComponent from '../src/components/NumberComponent/NumberComponent';

const StartGameScreen = props => {
    const [numberEntered, setNumberEntered ] = useState();
    const [userConfirmed, setUSerConfirmed ] = useState(false);
    const [numberConfirmed, setNumberConfirmed ] =  useState();

    const numberInputHandler = numberInput => {       
        setNumberEntered(numberInput.replace(/[^0-9]/g, ''));  
    };

    const resetInputHandler = () => {
        setNumberEntered('');
        setUSerConfirmed(false);
    };

    const confirmInputHandler = () => {    
        const chosenNumber = parseInt(numberEntered);       
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Not a valid number', 
            'Choose between 1 and 99', 
            [{text: 'Return', style: 'destructive', onPress: ()=>{resetInputHandler()}}])
            return;
        }
       
        setUSerConfirmed(true);
        setNumberEntered('');
        setNumberConfirmed(chosenNumber);  
        Keyboard.dismiss();    
        
    };
    
    let ConfirmedOutput;
    if(userConfirmed){
        ConfirmedOutput = <Card style={styles.confirmedBox}>
                            <View style={styles.numberInfoContainer}>
                                <Text style={GlobalStyles.title}>Your Number</Text>
                                    <NumberComponent>{numberConfirmed}</NumberComponent> 
                                <View style={styles.startButton}>
                                    <Button 
                                        onPress={props.onStartGame.bind(this, numberConfirmed)} // {props.onStartGame(numberConfirmed)} He executed the function from HERE, instead of binding
                                        title="START GAME"
                                    />
                                </View>   
                            </View>
                        </Card>
    }

    return ( 
        <TouchableWithoutFeedback
            onPress={()=>{Keyboard.dismiss()}}    
        >
            <View style={styles.startScreen}>
                <Text style={styles.title}>Start New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.text}>Enter a Number</Text>
                    
                    <Input
                        value={numberEntered}
                        keyboardType="number-pad"
                        blurOnSubmit
                        auto-correct={false}
                        autoCapitalize="none"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        style={styles.textInput}
                        />
                
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button 
                                color={Theme.colors.orange}
                                title="Reset"
                                onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button
                                color={Theme.colors.olivedrab}                        
                                title="Confirm"
                                onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>     
                {ConfirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    startScreen:{ 
        alignItems: 'center',
        flex:1,
        padding:20 
    },   
    inputContainer:{
        marginTop: 15,
        alignItems: 'center',
        width: 300,
        maxWidth: '80%', // if device is too small width wont exceed 80%
    },
    text:{
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        fontFamily: Theme.fonts.SansRegular,
    },
    textInput:{
        marginVertical: 10,
        width:50,
        height: 30,
        textAlign: 'center',
        padding: 0
    },
    buttonsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 15    
    },
    button:{
        width: 100          
    },
    confirmedBox:{
        marginTop:20,
    },
    numberInfoContainer:{
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberTitle:{
        fontSize: 20,
        marginVertical: 10
    },
    startButton:{
        marginTop:10,
    }
   
})

export default StartGameScreen;