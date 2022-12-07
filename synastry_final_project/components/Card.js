// CODE FROM https://github.com/azdravchev/Travel-App/

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({children, style, shadowType = 'light'}) => {
  return (
    <TouchableOpacity
      style={[styles.card, style, styles.dark]}>
      <View style={styles.inner}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  inner: {
    width: '100%',
    height: '100%',
  },
  dark: {
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default Card;