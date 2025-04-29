import {styles} from './style';
import {View} from 'react-native';
import React, {useState} from 'react';
import {Title} from '../../components/Title';
import {useGameContext} from '../../providers';
import {generateRandomNumber} from '../../utils';
import {Number} from '../../components/Number';

export function GameScreen() {
  const {guess} = useGameContext();

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber({
      min: 1,
      max: 100,
      exclude: guess ? +guess : undefined,
    }),
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{currentGuess}</Number>
    </View>
  );
}
