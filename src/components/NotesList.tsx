import React from "react";
import { NotesItem } from "../Model/note.model";
import Notes from "./Notes";

type INotesListProps = {
  notes: NotesItem[];
  setNotes: React.Dispatch<React.SetStateAction<NotesItem[]>>;
};
const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  const handleDelete = (id: string) => {
    console.log("id", id);
    setNotes(notes.filter((note) => note.id !== id));
    alert("note deleted");
  };
  return (
    <div>
      <h1 className="text-3xl p-4  m-5  bg-orange-200 shadow-md  font-semibold">
        Notes
      </h1>
      {renderNotes()}
    </div>
  );
};

export default NotesList;
