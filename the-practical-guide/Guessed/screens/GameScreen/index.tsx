import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {Title} from '../../components/Title';

export function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
    </View>
  );
}
