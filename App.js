import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "./components/Header/Header";
import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";
import GameScreen from "./screens/GameScreen/GameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleStartGame = selectedNumber => {
    setSelectedNumber(selectedNumber);
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number'/>
      {
        selectedNumber ? (
          <GameScreen selectedNumber={selectedNumber}/>
        ) : (
          <StartGameScreen handleStartGame={handleStartGame}/>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
