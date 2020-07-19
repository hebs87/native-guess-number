import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
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
  const [currentGuess, setCurrentGuess] = useState(generateRandomNum(1, 100, props.selectedNumber));
  const [totalRounds, setTotalRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {selectedNumber, handleGameOver} = props;

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      handleGameOver(totalRounds);
    }
  }, [currentGuess, selectedNumber, handleGameOver]);

  const generateNextGuess = direction => {
    if ((direction === 'lower' && currentGuess <= selectedNumber) ||
      (direction === 'greater' && currentGuess >= selectedNumber)
    ) {
      Alert.alert(
        'Don\'t lie!',
        'You know that this is wrong...',
        [{text: 'Sorry', style: 'cancel'}]
      );
      return;
    }
    direction === 'lower' ? currentHigh.current = currentGuess : currentLow.current = currentGuess;
    const nextNum = generateRandomNum(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNum);
    setTotalRounds(currentRounds => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Computer's Guess:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='LOWER'
            color={Colors.secondary}
            onPress={() => generateNextGuess('lower')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='GREATER'
            color={Colors.primary}
            onPress={() => generateNextGuess('greater')}
          />
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
