import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Colors from "../../theme/colors";
import TitleText from "../../components/TitleText/TitleText";
import BodyText from "../../components/BodyText/BodyText";
import MainButton from "../../components/MainButton/MainButton";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import NumberContainer from "../../components/NumberContainer/NumberContainer";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

  useEffect(() => {
    // Function to set the desired style value
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
    // Event listener to call the above function when the device is rotated
    Dimensions.addEventListener('change', updateLayout);
    // Clean up function to remove the event listener once the action is completed - avoid memory leaks
    return () => Dimensions.removeEventListener('change', updateLayout);
  });

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
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behaviour='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
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
                <View style={{width: buttonWidth}}>
                  <Button title='Reset' color={Colors.secondary} onPress={handleReset}/>
                </View>
                <View style={{width: buttonWidth}}>
                  <Button title='Confirm' color={Colors.primary} onPress={handleConfirm}/>
                </View>
              </View>
            </Card>
            {
              confirmed &&
              <Card style={styles.summaryContainer}>
                <BodyText>You selected:</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton
                  onPress={() => props.handleStartGame(selectedNumber)}
                >
                  START GAME
                </MainButton>
              </Card>
            }
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
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
  // button: {
  //   width: Dimensions.get('window').width / 4,
  // },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
