import {styles} from './style';
import {Button} from '../../components/Button';
import React, {useCallback, useState} from 'react';
import {Alert, TextInput, View} from 'react-native';

export function StartScreen() {
  const [number, setNumber] = useState('');

  const handleReset = useCallback(() => setNumber(''), []);

  const handleConfirm = () => {
    const isValidNumber =
      !isNaN(Number(number)) && Number(number) > 0 && Number(number) < 100;

    if (!isValidNumber) {
      Alert.alert('Invalid number!', 'Number must be between 1 and 99.', [
        {
          text: 'Try again',
          style: 'destructive',
          onPress: handleReset,
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={2}
        value={number}
        style={styles.input}
        onChangeText={setNumber}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button onPress={handleReset}>Reset</Button>
        </View>
        <View style={styles.button}>
          <Button onPress={handleConfirm}>Confirm</Button>
        </View>
      </View>
    </View>
  );
}
