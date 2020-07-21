import React from 'react';
import {StyleSheet, View, Image, ScrollView, Dimensions} from 'react-native';
import Colors from '../../theme/colors';
import TitleText from "../../components/TitleText/TitleText";
import BodyText from "../../components/BodyText/BodyText";
import MainButton from "../../components/MainButton/MainButton";
import Success from '../../assets/images/success.png';

const GameOverScreen = props => {
  return (
    <ScrollView>
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
    </ScrollView>
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
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginBottom: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSansBold',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
