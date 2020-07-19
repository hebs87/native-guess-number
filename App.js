import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "./components/Header/Header";
import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [totalRounds, setTotalRounds] = useState(0);

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
    <View style={styles.screen}>
      <Header title='Guess A Number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
