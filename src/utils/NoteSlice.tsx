import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesItem } from "../Model/note.model";
import Notes from "./../components/Notes";

const notes: NotesItem[] = [
  {
    id: "1",
    title: "Meeting 1 from store",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
  {
    id: "2",
    title: "Meeting from store 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
  {
    id: "3",
    title: "Meeting 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
  {
    id: "4",
    title: "Meeting 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
  {
    id: "5",
    title: "Meeting 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
  {
    id: "6",
    title: "Meeting55",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
  {
    id: "7",
    title: "Meeting6",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    date: new Date().toDateString(),
  },
];

const noteSlice = createSlice({
  name: "notes",
  initialState: notes,
  reducers: {
    addNote: (state, action: PayloadAction<NotesItem>) => {
      console.log("adding user");
      state.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      console.log("deleting note", action.payload);
      const id: string = action.payload;
      return state.filter((note) => note.id !== id);
    },
    updateNotes: (state, action: PayloadAction<NotesItem>) => {
      //state.push(action.payload);

      console.log("updating note");
      const { id, title, text, color, date } = action.payload;
      console.log("first", id, title, text, color, date);
      return state.map((note) =>
        note.id === id
          ? {
              ...note,
              title: title,
              text: text,
              color: color,
              date: date,
            }
          : note
      );
    },
  },
});

export default noteSlice.reducer;
export const { addNote, deleteNote, updateNotes } = noteSlice.actions;
