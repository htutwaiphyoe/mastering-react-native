import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './theme';
import { useCallback, useState } from 'react';

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  const handleSubmit = useCallback((input: string) => {
    setNotes(prev => [...prev, input]);
    setInput('');
  }, []);

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
            <Pressable style={styles.secondaryButton} onPress={handleClear}>
              <Text style={styles.secondaryButtonText}>Clear</Text>
            </Pressable>
            <Pressable
              style={styles.primaryButton}
              onPress={() => handleSubmit(input)}>
              <Text style={styles.primaryButtonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.notesContainer}>
          <Text style={styles.noteHeading}>
            {notes.length > 0
              ? `${notes.length} note${notes.length > 1 ? 's' : ''}:`
              : 'No notes yet!'}
          </Text>
          <ScrollView contentContainerStyle={styles.notes}>
            {notes.map((note, index) => (
              <View key={index} style={styles.note}>
                <Text>{note}</Text>
              </View>
            ))}
          </ScrollView>
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
    rowGap: 16,
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
    color: colors.black,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 16,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    color: colors.black,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  notesContainer: {
    rowGap: 16,
    flex: 1,
  },
  noteHeading: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
  notes: {
    rowGap: 16,
  },
  note: {
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    color: colors.black,
    backgroundColor: colors.white,
  },
});
