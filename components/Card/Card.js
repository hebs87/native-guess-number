import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../theme/colors';

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
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  }
});

export default Card;
