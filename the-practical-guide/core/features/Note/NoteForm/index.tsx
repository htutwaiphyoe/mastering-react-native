import { styles } from './style';
import { Button } from '../../../components/Button';
import { useNoteForm } from './hook';
import { View, TextInput } from 'react-native';

export function NoteForm() {
  const { input, handleClear, handleSubmit, setInput } = useNoteForm();

  return (
    <View style={styles.formContainer}>
      <TextInput
        multiline
        value={input}
        style={styles.input}
        textAlignVertical="top"
        onChangeText={setInput}
        placeholder="What is your note today?"
      />
      <View style={styles.buttonContainer}>
        <Button variant="secondary" onPress={handleClear}>
          Clear
        </Button>
        <Button
          variant="primary"
          disabled={!input}
          onPress={() => handleSubmit(input)}>
          Submit
        </Button>
      </View>
    </View>
  );
}
