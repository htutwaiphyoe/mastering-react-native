declare global {
  type Note = {
    id: number;
    data: string;
    date: Date;
  };

  type NoteContextType = {
    notes: Note[];
    addNote: (input: string) => void;
    deleteNote: (id: number) => void;

    modal: boolean;
    openModal: () => void;
    closeModal: () => void;
  };
}

export {};
