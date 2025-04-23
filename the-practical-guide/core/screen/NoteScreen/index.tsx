import { SafeAreaView } from 'react-native-safe-area-context';
import { NoteForm } from '../../components/NoteForm';
import { NoteList } from '../../components/NoteList';
import { NoteProvider } from '../../providers/NoteProvider';
import { styles } from './style';

export function NoteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NoteProvider>
        <NoteForm />
        <NoteList />
      </NoteProvider>
    </SafeAreaView>
  );
}
