import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import TitleText from "../../components/TitleText/TitleText";
import BodyText from "../../components/BodyText/BodyText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <BodyText>Number of rounds:</BodyText>
      <BodyText>{props.totalRounds}</BodyText>
      <BodyText>The number was:</BodyText>
      <BodyText>{props.selectedNumber}</BodyText>
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
