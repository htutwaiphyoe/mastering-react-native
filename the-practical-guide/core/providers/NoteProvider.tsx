import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

type NoteContextType = {
  notes: Note[];
  addNote: (input: string) => void;
  deleteNote: (id: number) => void;
};

const NoteContext = createContext<NoteContextType | null>(null);

export const NoteProvider = ({ children }: PropsWithChildren) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = useCallback((input: string) => {
    setNotes((prev): Note[] => [...prev, { id: Date.now(), data: input }]);
  }, []);

  const deleteNote = useCallback((id: number) => {
    setNotes((prev): Note[] => prev.filter(note => note.id !== id));
  }, []);

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);

  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }

  return context;
};
