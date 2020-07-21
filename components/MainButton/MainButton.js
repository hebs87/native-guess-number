import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Colors from '../../theme/colors';

const MainButton = props => {
  let ButtonComponent = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{...styles.button, ...props.style}}>
          <Text style={{...styles.buttonText, ...props.style}}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'OpenSans',
    fontSize: 18,
  }
});

export default MainButton;
