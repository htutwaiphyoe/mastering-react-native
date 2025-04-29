import {styles} from './style';
import {Alert, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Title} from '../../components/Title';
import {useGameContext} from '../../providers';
import {generateRandomNumber} from '../../utils';
import {Number} from '../../components/Number';
import {Button} from '../../components';

export function GameScreen() {
  const {guess, goToStartScreen} = useGameContext();
  const boundary = useRef({min: 1, max: 100});

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber({
      min: 1,
      max: 100,
      exclude: +guess,
    }),
  );

  const handleGuess = (direction: 'lower' | 'greater') => () => {
    if (direction === 'lower' && currentGuess < +guess) {
      return Alert.alert(
        'You are wrong!',
        'You guessed lower than the number!',
        [{text: 'Try again', style: 'cancel'}],
      );
    }

    if (direction === 'greater' && currentGuess > +guess) {
      return Alert.alert(
        'You are wrong!',
        'You guessed greater than the number!',
        [{text: 'Try again', style: 'cancel'}],
      );
    }

    if (direction === 'lower') {
      boundary.current.max = currentGuess - 1;
    } else {
      boundary.current.min = currentGuess + 1;
    }

    const newGuess = generateRandomNumber({
      ...boundary.current,
      exclude: currentGuess,
    });

    setCurrentGuess(newGuess);
  };

  useEffect(() => {
    if (currentGuess === +guess) {
      Alert.alert('You guessed it!', 'You won the game!', [
        {text: 'Play again', style: 'cancel', onPress: goToStartScreen},
      ]);
    }
  }, [currentGuess]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{currentGuess}</Number>
      <View style={styles.controls}>
        <Text style={styles.title}>Higher or Lower?</Text>
        <View style={styles.buttons}>
          <Button style={styles.button} onPress={handleGuess('lower')}>
            -
          </Button>
          <Button style={styles.button} onPress={handleGuess('greater')}>
            +
          </Button>
        </View>
      </View>
    </View>
  );
}
