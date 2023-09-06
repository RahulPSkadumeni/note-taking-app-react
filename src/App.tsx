import React, { useState } from "react";

import "./App.css";
import { NotesItem } from "./Model/note.model";
import Header from "./components/Header";

import Notes from "./components/Notes";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
import UpdateNotes from "./components/UpdateNotes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import Error from "./components/Error";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <NotesList />,
      errorElement: <Error />,
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
    {
      path: "/search",
      element: <SearchResult />,
      children: [],
    },
  ]);

  return (
    <div className="App">
      {/* <Header /> */}
      <RouterProvider router={appRoutes} />
      {/*      
      <NotesList />
      <CreateNotes /> */}
      {/* <UpdateNotes notes={notes} note={notes[0]} setNotes={setNotes} /> */}
    </div>
  );
}

export default App;
