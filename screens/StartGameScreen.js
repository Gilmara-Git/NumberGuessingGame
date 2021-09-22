import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Theme from "../themes/themes";
import GlobalStyles from "../src/global/global-styles";

import DefaultButton from "../src/components/DefaultButton/DefaultButton";
import Card from "../src/components/Card/Card";
import Input from "../src/components/Input/Input";
import NumberComponent from "../src/components/NumberComponent/NumberComponent";

const StartGameScreen = (props) => {
  const [numberEntered, setNumberEntered] = useState();
  const [userConfirmed, setUSerConfirmed] = useState(false);
  const [numberConfirmed, setNumberConfirmed] = useState();

  const numberInputHandler = (numberInput) => {
    setNumberEntered(numberInput.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setNumberEntered("");
    setUSerConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(numberEntered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Not a valid number", "Choose between 1 and 99", [
        {
          text: "Return",
          style: "destructive",
          onPress: () => {
            resetInputHandler();
          },
        },
      ]);
      return;
    }

    setUSerConfirmed(true);
    setNumberEntered("");
    setNumberConfirmed(chosenNumber);
    Keyboard.dismiss();
  };

  let ConfirmedOutput;
  if (userConfirmed) {
    ConfirmedOutput = (
      <Card style={styles.confirmedBox}>
        <View style={styles.numberInfoContainer}>
          <Text style={GlobalStyles.title}>Your Number</Text>
          <NumberComponent>{numberConfirmed}</NumberComponent>
          <View style={styles.startButton}>
            <DefaultButton
              onPress={() => {
                props.onStartGame(numberConfirmed);
              }}
            >
              NEW GAME
            </DefaultButton>
          </View>
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
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
              <DefaultButton
                onPress={resetInputHandler}
                style={styles.resetButton}
              >
                RESET
              </DefaultButton>
            </View>
            <View style={styles.button}>
              <DefaultButton
                style={styles.confirmButton}
                onPress={confirmInputHandler}
              >
                CONFIRM
              </DefaultButton>
            </View>
          </View>
        </Card>
        {ConfirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  startScreen: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginTop: 15,
    alignItems: "center",
    width: 300,
    maxWidth: "80%", // if device is too small width wont exceed 80%
  },
  title: {
    fontFamily: Theme.fonts.MontSerratSemiBold,
    fontSize: 35,
    color: Theme.colors.navyBlue,
  },
  text: {
    textAlign: "center",
    color: Theme.colors.navyBlue,
    fontSize: 17,
    marginTop: 10,
    fontFamily: Theme.fonts.MontSerratSemiBold,
  },
  textInput: {
    marginVertical: 10,
    width: 50,
    height: 30,
    textAlign: "center",
    padding: 0,
    color: Theme.colors.black,
    fontFamily: Theme.fonts.MontSerratSemiBold,
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    padding: 15,
  },
  button: {
    width: 100,
  },
  confirmedBox: {
    marginTop: 20,
  },
  numberInfoContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  numberTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  resetButton: {
    backgroundColor: Theme.colors.orangeSyneos,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: Theme.colors.navyBlue,
    borderRadius: 8,
  },
  startButton: {
    marginVertical: 10,
    backgroundColor: Theme.colors.brightBlue,
    borderRadius: 8,
  },
});

export default StartGameScreen;
