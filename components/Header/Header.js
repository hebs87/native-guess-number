import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import TitleText from "../TitleText/TitleText";
import Colors from '../../theme/colors';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        })
      }}
    >
      <TitleText style={styles.headerTitle}>
        {props.title}
      </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: Colors.white,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Colors.primary : Colors.white,
    fontSize: 18,
  },
});

export default Header;
