import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './theme';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            value={input}
            multiline
            style={styles.input}
            textAlignVertical="top"
            onChangeText={setInput}
            placeholder="What is your note today?"
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.primaryButton}
              onPress={() => setInput('')}>
              <Text>Clear</Text>
            </Pressable>
            <Pressable
              style={styles.secondaryButton}
              onPress={() => {
                setNotes(prev => [...prev, input]);
                setInput('');
              }}>
              <Text>Submit</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  formContainer: {
    rowGap: 16,
  },
  input: {
    padding: 16,
    height: 200,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 16,
  },
  primaryButton: {
    backgroundColor: colors.border,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
});
