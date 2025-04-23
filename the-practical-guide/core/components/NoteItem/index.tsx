import { Pressable, Text, View } from 'react-native';
import { styles } from './style';
import { useNoteForm } from '../NoteForm/hook';

type NoteItemProps = {
  note: Note;
};

export function NoteItem({ note }: NoteItemProps) {
  const { handleDelete } = useNoteForm();

  return (
    <Pressable onPress={() => handleDelete(note.id)}>
      <View style={styles.note}>
        <Text>{note.data}</Text>
      </View>
    </Pressable>
  );
}
