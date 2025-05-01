import {styles} from './style';
import {Text, View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';
import {Card} from '../../components/Card';
import {Button} from '../../components';
import {useGameContext} from '../../providers';

export function EndScreen() {
  const {goToStartScreen, guess, rounds} = useGameContext();

  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <Card title="Congratulations!">
        <Title>
          You needed <Text style={styles.text}>{rounds.length}</Text> times to
          guess the number <Text style={styles.text}>{+guess}</Text>!
        </Title>
        <View>
          <Button onPress={goToStartScreen}>Play again</Button>
        </View>
      </Card>
    </View>
  );
}
