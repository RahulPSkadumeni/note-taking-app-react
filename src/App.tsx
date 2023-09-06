import React, { useState } from "react";

import "./App.css";
import { NotesItem } from "./Model/note.model";
import Header from "./components/Header";

import Notes from "./components/Notes";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
import UpdateNotes from "./components/UpdateNotes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // const [notes, setNotes] = useState<NotesItem[]>([
  //   {
  //     id: "1",
  //     title: "Meeting 1",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     color: "red",
  //     date: new Date().toDateString(),
  //   },
  //   {
  //     id: "2",
  //     title: "Meeting",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     color: "red",
  //     date: new Date().toDateString(),
  //   },
  //   {
  //     id: "3",
  //     title: "Meeting",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     color: "red",
  //     date: new Date().toDateString(),
  //   },
  //   {
  //     id: new Date().toString(),
  //     title: "Meeting",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     color: "red",
  //     date: new Date().toDateString(),
  //   },
  //   {
  //     id: new Date().toString(),
  //     title: "Meeting5",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     color: "red",
  //     date: new Date().toDateString(),
  //   },
  // ]);
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <NotesList />,
      children: [],
    },
    {
      path: "/create",
      element: <CreateNotes />,
      children: [],
    },
    {
      path: "/update/:id",
      element: <UpdateNotes />,
      children: [],
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRoutes} />
      {/*      
      <NotesList />
      <CreateNotes /> */}
      {/* <UpdateNotes notes={notes} note={notes[0]} setNotes={setNotes} /> */}
    </div>
  );
}

export default App;
