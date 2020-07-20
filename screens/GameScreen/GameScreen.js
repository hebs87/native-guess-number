import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Alert, ScrollView} from 'react-native';
import BodyText from "../../components/BodyText/BodyText";
import NumberContainer from "../../components/NumberContainer/NumberContainer";
import Card from "../../components/Card/Card";
import MainButton from "../../components/MainButton/MainButton";
import Colors from '../../theme/colors';
import {Ionicons} from '@expo/vector-icons';

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
  const initialGuess = generateRandomNum(1, 100, props.selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {selectedNumber, handleGameOver} = props;

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      handleGameOver(pastGuesses.length);
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
    direction === 'lower' ? currentHigh.current = currentGuess : currentLow.current = currentGuess + 1;
    const nextNum = generateRandomNum(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNum);
    // Store the guesses in the pastGuesses array
    setPastGuesses(currPastGuesses => [nextNum, ...currPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Computer's Guess:</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          style={styles.lowerButton}
          onPress={() => generateNextGuess('lower')}
        >
          <Ionicons name='md-remove' size={24} color='white'/>
        </MainButton>
        <MainButton
          onPress={() => generateNextGuess('greater')}
        >
          <Ionicons name='md-add' size={24} color='white'/>
        </MainButton>
      </Card>
      <ScrollView>
        {pastGuesses.map(guess => (
          <View key={guess}>
            <BodyText>{guess}</BodyText>
          </View>
        ))}
      </ScrollView>
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
  lowerButton: {
    backgroundColor: Colors.secondary,
  },
});

export default GameScreen;
