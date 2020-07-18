import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
    <View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default GameScreen;
