import { SafeAreaView } from 'react-native-safe-area-context';
import { NoteForm } from '../../features/Note/NoteForm';
import { NoteList } from '../../features/Note/NoteList';
import { NoteProvider } from '../../providers/NoteProvider';
import { styles } from './style';
import { AddNoteButton } from '../../features/Note/AddNoteButton';

export function NoteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NoteProvider>
        <NoteForm />
        <NoteList />
        <AddNoteButton />
      </NoteProvider>
    </SafeAreaView>
  );
}
