import { styles } from './style';
import { Button } from '../../../components/Button';
import { useNoteForm } from './hook';
import { View, TextInput, Modal, Image } from 'react-native';
import { useNoteContext } from '../../../providers/NoteProvider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function NoteForm() {
  const { modal, closeModal } = useNoteContext();
  const { input, handleSubmit, setInput, handleClear } = useNoteForm();

  return (
    <Modal
      visible={modal}
      animationType="slide"
      statusBarTranslucent
      navigationBarTranslucent>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.formContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/goal.png')}
            />
            <TextInput
              multiline
              value={input}
              style={styles.input}
              textAlignVertical="top"
              onChangeText={setInput}
              placeholder="What is your note today?"
            />
            <View style={styles.buttonContainer}>
              <Button
                variant="white"
                onPress={() => {
                  handleClear();
                  closeModal();
                }}>
                Cancel
              </Button>
              <Button
                variant="secondary"
                disabled={!input}
                onPress={() => handleSubmit(input)}>
                Add
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
}
