import { Text, View, Pressable, TextInput } from 'react-native';
import { styles } from './style';
import { useNoteForm } from './hook';

export function NoteForm() {
  const { input, handleClear, handleSubmit, setInput } = useNoteForm();

  return (
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
  );
}
