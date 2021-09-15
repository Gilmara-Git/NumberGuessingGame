import { StatusBar  } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header/header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Theme from './themes/themes';
// import { useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fontsFetch = ()=>{
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf')
  })
}

export default function App() { 
  const [userNumber, setUserNumber ] = useState();
  const [ numberOfRounds, setNumberOfRounds ] = useState(0); // if '0' game started or running, if > '0' game is over
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  // const [ fontsLoaded ] = useFonts({
  //   'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //   'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  //   'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf')
  // })
  // console.log(fontsLloaded, 'fonts Loaded ? ')
  console.log(fontsLoaded)
  if(!fontsLoaded){
    return (
      <AppLoading
        startAsync={fontsFetch} onFinish={()=>setFontsLoaded(true)} onError={(err)=>{console.log(err)}}
      />
    )
  }
    
  const gameOverHandler = rounds =>{
    setNumberOfRounds(rounds);
  }
  
  const startGameHandler = numberConfirmed =>{
    if(numberConfirmed){   
      setUserNumber(numberConfirmed);
      setNumberOfRounds(0);   
    }  
  }

  const configureNewGame =()=>{
    setUserNumber(null);
    setNumberOfRounds(0);
  }

  let displayComponent;
  displayComponent = <StartGameScreen onStartGame={startGameHandler} />
  
  if(userNumber && numberOfRounds <=0){  
    displayComponent = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }else if (numberOfRounds > 0){ 
    displayComponent = <GameOverScreen numberOfRounds={numberOfRounds} userNumber={userNumber} onRestartGame={configureNewGame}/>
  }


  return (
    <View style={styles.container}>    
      <StatusBar style="light"/>
      <Header
        title="NUMBER GUESSING GAME" 
      />
      {displayComponent}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    backgroundColor: Theme.colors.mainBackground
  }, 
  
});
