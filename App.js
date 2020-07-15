import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from "./components/Header/Header";
import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess A Number'/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
