import { Text, View, FlatList } from 'react-native';
import { styles } from './style';
import { useNoteContext } from '../../providers/NoteProvider';

export function NoteList() {
  const { notes } = useNoteContext();

  return (
    <View style={styles.notesContainer}>
      <Text style={styles.noteHeading}>
        {notes.length > 0
          ? `${notes.length} note${notes.length > 1 ? 's' : ''}:`
          : 'No notes yet! 📝'}
      </Text>
      <FlatList
        data={notes}
        contentContainerStyle={styles.notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text>{item.data}</Text>
          </View>
        )}
      />
    </View>
  );
}
