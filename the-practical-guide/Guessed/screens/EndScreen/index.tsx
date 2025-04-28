import {styles} from './style';
import {View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

export function EndScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
    </View>
  );
}
