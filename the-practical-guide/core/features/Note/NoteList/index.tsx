import { Text, View, FlatList } from 'react-native';
import { styles } from './style';
import { useNoteContext } from '../../../providers/NoteProvider';
import { NoteItem } from '../NoteItem';

export function NoteList() {
  const { notes } = useNoteContext();

  return (
    <View style={styles.notesContainer}>
      <Text style={styles.noteHeading}>
        {notes.length > 0
          ? `${notes.length} note${notes.length > 1 ? 's' : ''}  📝`
          : 'No notes yet! 📝'}
      </Text>
      <FlatList
        data={notes}
        numColumns={2}
        contentContainerStyle={styles.notes}
        columnWrapperStyle={{ gap: 16, flex: 1 }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
}
