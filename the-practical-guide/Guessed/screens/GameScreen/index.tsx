import {styles} from './style';
import {Alert, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Title} from '../../components/Title';
import {useGameContext} from '../../providers';
import {generateRandomNumber} from '../../utils';
import {Number} from '../../components/Number';
import {Button} from '../../components';
import {Card} from '../../components/Card';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme';

export function GameScreen() {
  const {guess, goToEndScreen, increaseRounds} = useGameContext();
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
    if (currentGuess === +guess) goToEndScreen();
    increaseRounds(`${currentGuess}`);
  }, [currentGuess]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{currentGuess}</Number>
      <Card title="Lower or Higher?">
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={handleGuess('lower')}>
              <Icon name="minus" size={20} color={colors.white} />
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={handleGuess('greater')}>
              <Icon name="plus" size={20} color={colors.white} />
            </Button>
          </View>
        </View>
      </Card>
    </View>
  );
}
