import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Header from "./components/Header/Header";
import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";

// Load font files
const fetchFonts = () => {
  return Font.loadAsync({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
};

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [totalRounds, setTotalRounds] = useState(0);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(false)}
        onError={error => console.log(error)}
      />
    );
  }

  const handleNewGame = () => {
    setSelectedNumber(null);
    setTotalRounds(0);
  };

  const handleStartGame = selectedNumber => {
    setSelectedNumber(selectedNumber);
    setTotalRounds(0);
  }

  const handleGameOver = totalRounds => {
    setTotalRounds(totalRounds);
  };

  let content = <StartGameScreen handleStartGame={handleStartGame}/>;

  if (selectedNumber && totalRounds <= 0) {
    content = <GameScreen selectedNumber={selectedNumber} handleGameOver={handleGameOver}/>;
  } else if (totalRounds > 0) {
    content = <GameOverScreen totalRounds={totalRounds} selectedNumber={selectedNumber} handleNewGame={handleNewGame}/>;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess A Number'/>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
