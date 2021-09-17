import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import NumberComponent from "../src/components/NumberComponent/NumberComponent";
import DefaultButton from '../src/components/DefaultButton/DefaultButton'
import Card from "../src/components/Card/Card";
import Theme from '../themes/themes'

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

const GameScreen = props => {
  const [currentComputerGuess, setCurrentComputerGuess] = useState(
    generateRandomBetween(1, 100, props.userNumber)
  );
  const [roundCount, setRoundCount] = useState(0);

  const currentMin = useRef(1);
  const currentMax = useRef(100);
  
  const { userNumber, onGameOver } = props;

  useEffect(() => {
    if (currentComputerGuess === userNumber) {
      onGameOver(roundCount);
    }
  }, [currentComputerGuess, userNumber, onGameOver]);

  const nextComputerGuessHandler = (direction) => {
    if (
      (direction === "down" && currentComputerGuess < userNumber) ||
      (direction === "up" && currentComputerGuess > userNumber)
    ) {
      Alert.alert("Don't Cheat", "Provide the correct Clue", [
        { text: "Back", style: "cancel" },
      ]);
      return;
    }

    if (direction === "down") {
      currentMax.current = currentComputerGuess;
    } else {
      currentMin.current = currentComputerGuess;
    }
    const nextGuess = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentComputerGuess
    );
    setCurrentComputerGuess(nextGuess);
    setRoundCount((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.oppGuess}>Opponent's Guess</Text>
      <NumberComponent>{currentComputerGuess}</NumberComponent>
      <Card style={styles.hintButtonsContainer}>
        <View style={styles.downUp}>
          <DefaultButton              
              style={styles.down}
              onPress={nextComputerGuessHandler.bind(this, "down")}>
            <AntDesign
              name="downcircle"
              size={30}
              color={Theme.colors.mainBackground}
            />
          </DefaultButton>
                
        </View>
        <View style={styles.downUp} >
          <DefaultButton
            style={styles.up}
            onPress={nextComputerGuessHandler.bind(this, "up")}>
              <AntDesign
              name="upcircle"
              size={30}
              color={Theme.colors.mainBackground}
            />
          </DefaultButton>    
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  oppGuess: {
    fontSize: 22,
    marginVertical: 10,
  },
  hintButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
    maxWidth: "80%",
    marginTop: 20,
  },
  down:{
    backgroundColor: Theme.colors.darkerOrange,
    borderRadius: 8,   
    padding: 4,
 
  },
  up:{
    backgroundColor: Theme.colors.startButton,
    borderRadius: 8,
    padding: 4,
  
  }
 
});

export default GameScreen;
