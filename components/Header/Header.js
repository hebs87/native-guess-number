import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TitleText from "../TitleText/TitleText";
import Colors from '../../theme/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>
        {props.title}
      </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
  },
});

export default Header;
