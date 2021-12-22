import React, {useState, useEffect} from "react";
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
  const [ heightWindow, setHeightWindow ] = useState(Dimensions.get('window').height);
  console.log(heightWindow, 'height')
useEffect(()=>{
  const upadteWindowHeight =()=>{
    setHeightWindow(Dimensions.get('window').height);
  }
  Dimensions.addEventListener("change",upadteWindowHeight);
  return ()=>{
    Dimensions.removeEventListener("change",upadteWindowHeight);
  }
});


  let imageStyle = styles.imageContainer;
  if(heightWindow <=320){
    imageStyle = styles.imageContainerLandscape;
  }


  return (
 <ScrollView>
    <View style={styles.gameOverContainer}>
      <BodyText>The Game is Over!</BodyText>
      <View style={imageStyle}>
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
    </ScrollView>
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
    marginVertical: Dimensions.get('window').height < 550 ? 3 :20,
  },
  resultText: {
    color: Theme.colors.black,
    fontSize: Dimensions.get('window').height < 550 ? 13: 18,
    fontFamily: Theme.fonts.MontSerratSemiBold,
    paddingRight: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderRadius:Dimensions.get('window').width * 0.5 / 2,
    borderWidth: 2,
    borderColor: Theme.colors.mainBlack,
    overflow: "hidden",
    marginVertical:  Dimensions.get('window').height < 550 ? 10: 30,
  },
  imageContainerLandscape: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    borderRadius:Dimensions.get('window').width * 0.4 / 2,
    borderWidth: 2,
    borderColor: Theme.colors.mainBlack,
    overflow: "hidden",
    marginVertical:  Dimensions.get('window').height < 550 ? 10: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  reStartButton: {
    width: Dimensions.get('window').width * 0.5,
    alignItems: "center",
    marginVertical: 10,
    
  },
  numberResults: {
    color: Theme.colors.orangeSyneos,
    paddingLeft: 10,
    fontSize: Dimensions.get('window').height < 550 ? 15: 20,
  },
});

export default GameOverScreen;
