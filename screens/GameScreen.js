import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import NumberComponent from "../src/components/NumberComponent/NumberComponent";
import DefaultButton from "../src/components/DefaultButton/DefaultButton";
import Card from "../src/components/Card/Card";
import Theme from "../themes/themes";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
};

const renderListItem = (pastGuessLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>#{pastGuessLength - itemData.index}</Text>
      <Text style={styles.listText}>{itemData.item}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);

  const [currentComputerGuess, setCurrentComputerGuess] =
    useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([initialGuess.toString()]);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userNumber, onGameOver } = props;

  useEffect(() => {
    if (currentComputerGuess === userNumber) {
      onGameOver(pastGuess.length);
    }
  }, [currentComputerGuess, userNumber, onGameOver]);

  const nextComputerGuessHandler = (direction) => {
    if (
      (direction === "down" && currentComputerGuess < userNumber) ||
      (direction === "up" && currentComputerGuess > userNumber)
    ) {
      Alert.alert("Don't Cheat", "Provide the correct CLUE", [
        { text: "Back", style: "cancel" },
      ]);
      return;
    }

    if (direction === "down") {
      currentMax.current = currentComputerGuess;
    } else {
      currentMin.current = currentComputerGuess + 1;
    }
    const nextGuess = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentComputerGuess
    );
    setCurrentComputerGuess(nextGuess);
    setPastGuess((currentPastGuess) => [
      nextGuess.toString(),
      ...currentPastGuess,
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.oppGuess}>Opponent's Guess</Text>
      <NumberComponent>{currentComputerGuess}</NumberComponent>
      <Card style={styles.hintButtonsContainer}>
        <View>
          <DefaultButton
            style={styles.down}
            onPress={nextComputerGuessHandler.bind(this, "down")}
          >
            <AntDesign
              name="downcircle"
              size={30}
              color={Theme.colors.mainBackground}
            />
          </DefaultButton>
        </View>
        <View>
          <DefaultButton
            style={styles.up}
            onPress={nextComputerGuessHandler.bind(this, "up")}
          >
            <AntDesign
              name="upcircle"
              size={30}
              color={Theme.colors.mainBackground}
            />
          </DefaultButton>
        </View>
      </Card>

      <View style={styles.listContainer}>
        {/* <ScrollView 
          showVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {pastGuess.map((guess, index) => renderListItem(guess, pastGuess.length - index ))}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.scrollViewContainer}
          data={pastGuess}
          renderItem={renderListItem.bind(this, pastGuess.length)}
          keyExtractor={(item) => item}
        />
      </View>
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
  down: {
    backgroundColor: Theme.colors.orangeSyneos,
    borderRadius: 8,
    padding: 4,
  },
  up: {
    backgroundColor: Theme.colors.navyBlue,
    borderRadius: 8,
    padding: 4,
  },
  listContainer: {
    width: "60%",
    flex: 1,
  },
  scrollViewContainer: {
    // alignItems: 'center',
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 10,
    borderColor: Theme.colors.mainBlack,
    borderWidth: 1,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Theme.colors.mainBackground,
    borderRadius: 8,
    width: "100%",
  },
  listText: {
    color: Theme.colors.mainBlack,
    fontFamily: Theme.fonts.MontSerratSemiBold,
  },
});

export default GameScreen;
