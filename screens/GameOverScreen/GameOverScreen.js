import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Colors from '../../theme/colors';
import TitleText from "../../components/TitleText/TitleText";
import BodyText from "../../components/BodyText/BodyText";
import MainButton from "../../components/MainButton/MainButton";
import Success from '../../assets/images/success.png';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          source={Success}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <BodyText style={styles.highlight}> {props.totalRounds} </BodyText>
          rounds to guess the number
          <BodyText style={styles.highlight}> {props.selectedNumber}</BodyText>
          !
        </BodyText>
      </View>
      <MainButton
        onPress={props.handleNewGame}
      >
        NEW GAME
      </MainButton>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSansBold',
    fontSize: 20
  },
});

export default GameOverScreen;
