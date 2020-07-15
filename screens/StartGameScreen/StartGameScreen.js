import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Colors from "../../theme/colors";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";

const StartGameScreen = props => {
  return (
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
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={Colors.secondary} onPress={() => {}}/>
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={Colors.primary} onPress={() => {}}/>
          </View>
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
