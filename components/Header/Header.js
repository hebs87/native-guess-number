import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
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
    backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? Colors.grey : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Colors.primary : Colors.white,
    fontSize: 18,
  },
});

export default Header;
