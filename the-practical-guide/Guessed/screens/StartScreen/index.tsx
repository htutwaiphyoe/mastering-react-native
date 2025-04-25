import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import {Button} from '../../components/Button';

export function StartScreen() {
  return (
    <View style={styles.container}>
      <TextInput maxLength={2} keyboardType="number-pad" style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button>Reset</Button>
        <Button>Confirm</Button>
      </View>
    </View>
  );
}
