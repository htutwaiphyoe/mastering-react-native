import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

const NoteContext = createContext<NoteContextType | null>(null);

export const NoteProvider = ({ children }: PropsWithChildren) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const addNote = useCallback((input: string) => {
    setNotes((prev): Note[] => [
      ...prev,
      { id: Date.now(), data: input, date: new Date() },
    ]);
  }, []);

  const deleteNote = useCallback((id: number) => {
    setNotes((prev): Note[] => prev.filter(note => note.id !== id));
  }, []);

  const openModal = useCallback(() => setModal(true), []);

  const closeModal = useCallback(() => setModal(false), []);

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, openModal, closeModal, modal }}>
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
