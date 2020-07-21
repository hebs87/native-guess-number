import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Alert, ScrollView, Dimensions} from 'react-native';
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

  const renderGuessList = (value, roundNum) => (
    <View key={value} style={styles.listItem}>
      <BodyText>#{roundNum}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  )

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
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, idx) => renderGuessList(guess, pastGuesses.length - idx))}
        </ScrollView>
      </View>
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
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: '80%',
  },
  lowerButton: {
    backgroundColor: Colors.secondary,
  },
  listContainer: {
    width: '80%',
    // This is needed to make the nested ScrollView scrollable in Android
    flex: 1,
  },
  list: {
    // Pushes items to the bottom of the page but keeps most recent content visible
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width > 350 ? '60%' : '80%',
  },
});

export default GameScreen;
