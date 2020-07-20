import React from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import TitleText from "../../components/TitleText/TitleText";
import BodyText from "../../components/BodyText/BodyText";
import Success from '../../assets/images/success.png';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Game Over!</TitleText>
      <Image source={Success}/>
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
  title: {
    fontSize: 20,
  },
});

export default GameOverScreen;
