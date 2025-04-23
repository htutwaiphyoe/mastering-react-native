import { useCallback, useState } from 'react';
import { useNoteContext } from '../../providers/NoteProvider';

export function useNoteForm() {
  const { setNotes } = useNoteContext();
  const [input, setInput] = useState<string>('');

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  const handleSubmit = useCallback((input: string) => {
    setNotes((prev): Note[] => [...prev, { id: Date.now(), data: input }]);
    setInput('');
  }, []);

  const handleDelete = useCallback((id: number) => {
    setNotes((prev): Note[] => prev.filter(note => note.id !== id));
  }, []);

  return {
    input,
    setInput,
    handleClear,
    handleSubmit,
    handleDelete,
  };
}
