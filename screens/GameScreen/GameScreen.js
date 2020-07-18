import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import NumberContainer from "../../components/NumberContainer/NumberContainer";
import Card from "../../components/Card/Card";
import Colors from '../../theme/colors';

const generateRandomNum = (min, max, exclude) => {
  // Round up any non-int value
  min = Math.ceil(min);
  // Round down any non-int value
  max = Math.floor(max);
  // Generate random number between min and max values
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  // Call the function again to generate random num if the first guess is the number we want to exclude
  if (randNum === exclude) {
    return generateRandomNum(min, max, exclude);
  }
  return randNum;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNum(1, 100, props.userChoice));

  return (
    <View style={styles.screen}>
      <Text>Computer's Guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='LOWER' color={Colors.secondary} onPress={() => {}}/>
        </View>
        <View style={styles.button}>
          <Button title='GREATER' color={Colors.primary} onPress={() => {}}/>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%',
  },
  button: {
    width: '40%',
  },
});

export default GameScreen;
