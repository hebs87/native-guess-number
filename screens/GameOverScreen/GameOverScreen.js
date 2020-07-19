import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of rounds:</Text>
      <Text>{props.totalRounds}</Text>
      <Text>The number was:</Text>
      <Text>{props.selectedNumber}</Text>
      <Button title="NEW GAME" onPress={props.handleNewGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
