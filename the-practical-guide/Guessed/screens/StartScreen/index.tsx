import {styles} from './style';
import {useGameContext} from '@/providers';
import {useCallback, useState} from 'react';
import {globalStyles} from '@/styles/global';
import {Button, Card, Title} from '@/components';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';

export function StartScreen() {
  const [guess, setGuess] = useState('');
  const {goToGameScreen} = useGameContext();

  const handleReset = useCallback(() => setGuess(''), []);

  const handleConfirm = () => {
    const isValidNumber =
      !isNaN(Number(guess)) && Number(guess) > 0 && Number(guess) < 100;

    if (!isValidNumber) {
      return Alert.alert(
        'Invalid number!',
        'Number must be between 1 and 99.',
        [
          {
            text: 'Try again',
            style: 'destructive',
            onPress: handleReset,
          },
        ],
      );
    }

    goToGameScreen(guess);
  };

  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="position" style={globalStyles.container}>
        <View style={styles.screen}>
          <Title>Guess My Number</Title>
          <Card title="Enter a number">
            <TextInput
              maxLength={2}
              value={guess}
              style={styles.input}
              onChangeText={setGuess}
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
