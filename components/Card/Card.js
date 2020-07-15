import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Shadow props only work on iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Elevation prop only works on Android
    elevation: 10,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  }
});

export default Card;
