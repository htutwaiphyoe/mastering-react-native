import { View } from 'react-native';
import { Button } from '../../../components/Button';
import { useNoteContext } from '../../../providers/NoteProvider';
import { styles } from './style';

export function AddNoteButton() {
  const { openModal } = useNoteContext();

  return (
    <View style={styles.button}>
      <Button variant="primary" onPress={openModal}>
        Add a new note
      </Button>
    </View>
  );
}
