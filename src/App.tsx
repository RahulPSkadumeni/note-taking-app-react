import React, { useState } from "react";

import "./App.css";
import { NotesItem } from "./Model/note.model";
import Header from "./components/Header";

import Notes from "./components/Notes";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState<NotesItem[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      color: "red",
      date: new Date().toDateString(),
    },
  ]);

  return (
    <div className="App">
      <Header />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
