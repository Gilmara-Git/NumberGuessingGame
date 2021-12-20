import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import BodyText from "../src/components/BodyText/BodyText";
import StartButton from "../src/components/StartButton/StartButton";
import Theme from "../themes/themes";

const GameOverScreen = (props) => {
  return (
 
    <View style={styles.gameOverContainer}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Rounds taken:
          <Text style={styles.numberResults}> {props.numberOfRounds}</Text>
        </Text>
        <Text style={styles.resultText}>
          Your Number was:
          <Text style={styles.numberResults}> {props.userNumber}</Text>
        </Text>
      </View>
      <View style={styles.reStartButton}>
        <StartButton onPress={props.onRestartGame}>NEW GAME</StartButton>
      </View>
    </View>
 
  );
};

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.colors.mainBackground,
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginVertical: 20,
  },
  resultText: {
    color: Theme.colors.black,
    fontSize: 18,
    fontFamily: Theme.fonts.MontSerratSemiBold,
    paddingRight: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: Theme.colors.mainBlack,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  reStartButton: {
    width: "50%",
    alignItems: "center",
    marginTop: 10,
  },
  numberResults: {
    color: Theme.colors.orangeSyneos,
    paddingLeft: 10,
    fontSize: 20,
  },
});

export default GameOverScreen;
