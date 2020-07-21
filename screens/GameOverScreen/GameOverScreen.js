import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, ScrollView, Dimensions} from 'react-native';
import Colors from '../../theme/colors';
import TitleText from "../../components/TitleText/TitleText";
import BodyText from "../../components/BodyText/BodyText";
import MainButton from "../../components/MainButton/MainButton";
import Success from '../../assets/images/success.png';

const GameOverScreen = props => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setWindowWidth(Dimensions.get('window').width);
      setWindowHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Game Over!</TitleText>
        <View
          style={{
            width: windowWidth * 0.7,
            height: windowWidth * 0.7,
            borderRadius: (windowWidth * 0.7) / 2,
            marginVertical: windowHeight / 30,
            ...styles.imageContainer
          }}
        >
          <Image
            fadeDuration={300}
            source={Success}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <View
          style={{
            marginBottom: windowHeight / 60,
            ...styles.resultContainer
          }}
        >
          <BodyText style={styles.resultText}>
            Your phone needed
            <BodyText
              style={{
                fontSize: windowHeight < 400 ? 16 : 20,
                ...styles.highlight
              }}
            >
               {props.totalRounds}
            </BodyText>
             rounds to guess the number
            <BodyText
              style={{
                fontSize: windowHeight < 400 ? 16 : 20,
                ...styles.highlight
              }}
            >
               {props.selectedNumber}
            </BodyText>
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
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: 'center',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSansBold',
  },
});

export default GameOverScreen;
