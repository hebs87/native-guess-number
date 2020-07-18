import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Colors from "../../theme/colors";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleInputChange = inputText => {
    // Replace any non-number char with empty string
    let validatedInputText = inputText.replace(/[^0-9]/g, '');
    setEnteredValue(validatedInputText);
  };

  const handleReset = () => {
    setEnteredValue('');
    setConfirmed(false);
    setSelectedNumber('');
  };

  const handleConfirm = () => {
    const inputNum = parseInt(enteredValue);
    if (isNaN(inputNum) || inputNum <= 0 || inputNum > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a value between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: handleReset}]
      )
      return;
    }
    setConfirmed(true);
    setSelectedNumber(inputNum);
    setEnteredValue('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={handleInputChange}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' color={Colors.secondary} onPress={handleReset}/>
            </View>
            <View style={styles.button}>
              <Button title='Confirm' color={Colors.primary} onPress={handleConfirm}/>
            </View>
          </View>
        </Card>
        {
          confirmed &&
          <Text>Selected number: {selectedNumber}</Text>
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '40%',
  },
});

export default StartGameScreen;
