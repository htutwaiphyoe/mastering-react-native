import { useCallback, useState } from 'react';
import { useNoteContext } from '../../../providers/NoteProvider';
import { Alert } from 'react-native';

export function useNoteForm() {
  const [input, setInput] = useState<string>('');
  const { addNote, deleteNote, closeModal } = useNoteContext();

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  const handleSubmit = useCallback((input: string) => {
    setInput('');
    addNote(input);
    closeModal();
  }, []);

  const handleDelete = useCallback((id: number) => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteNote(id);
          Alert.alert(
            'Note Deleted',
            'The note has been deleted successfully.',
          );
        },
      },
    ]);
  }, []);

  return {
    input,
    setInput,
    handleClear,
    handleSubmit,
    handleDelete,
  };
}
