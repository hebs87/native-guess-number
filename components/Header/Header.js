import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../theme/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>
        {props.title}
      </Text>
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
