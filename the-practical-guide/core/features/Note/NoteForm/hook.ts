import { useCallback, useState } from 'react';
import { useNoteContext } from '../../../providers/NoteProvider';

export function useNoteForm() {
  const [input, setInput] = useState<string>('');
  const { addNote, deleteNote } = useNoteContext();

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  const handleSubmit = useCallback((input: string) => {
    addNote(input);
    setInput('');
  }, []);

  const handleDelete = useCallback((id: number) => {
    deleteNote(id);
  }, []);

  return {
    input,
    setInput,
    handleClear,
    handleSubmit,
    handleDelete,
  };
}
