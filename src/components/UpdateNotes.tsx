import React, { useState } from "react";
import { NotesItem, RouteParams } from "../Model/note.model";
import Notes from "./Notes";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../utils/Store";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../utils/NoteSlice";

const UpdateNotes: React.FC = () => {
  const { id } = useParams<RouteParams>() || {};
  const validId: string = id || "";
  const note = useSelector((state: RootState) =>
    state.notes.find((n) => n.id === id)
  );
  if (!note) {
    console.error(`Note with id ${id} not found in state.`);
    // return;
  }

  console.log(note?.id, "iddddddddddddddddddee");
  const [title, setTitle] = useState<string>(note?.title || "");
  const [text, setText] = useState<string>(note?.text || "");
  const [backgroundColor, setBackgroundColor] = useState<string>(
    note?.color || "#ffffff"
  );

  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleBackgroundColorChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("first");
    console.log("Title:", title);
    console.log("id:", id);
    console.log("text:", text);
    console.log("colorext:", backgroundColor);
    console.log("date:", Date);

    if (title === "") {
      setError("Enter a title");
      return; // Do not reset fields
    } else if (text === "") {
      setError("Text is empty");
      return; // Do not reset fields
    } else {
      setError(""); // Clear any previous error messages
    }
    const newNote: NotesItem = {
      id: validId, // Use the id from route parameters
      title: title,
      text: text,
      color: backgroundColor,
      date: new Date().toDateString(),
    };
    // Create a copy of the notes array
    dispatch(updateNotes(newNote));

    // Find the index of the note to update
    // const updatedNoteIndex = updatedNotes.findIndex(
    //   (existingNote) => existingNote.id === note.id
    // );

    // if (updatedNoteIndex !== -1) {
    //   // Update the note in the copied array
    //   updatedNotes[updatedNoteIndex] = {
    //     ...note, // Preserve the existing properties
    //     title,
    //     text,
    //     color: backgroundColor,
    //     date: new Date().toString(),
    //   };

    //   // Set the state with the updated notes array
    //   setNotes(updatedNotes);
    // }
    setTitle("");
    setText("");
    setBackgroundColor("#ffffff");
    navigate("/");
  };

  // Reset the form

  return (
    <>
      <div className="min-w-md mx-auto m-5 p-4 ">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 m-5 p-10  border-black bg-gray-300"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-3xl  font-semibold text-center   text-gray-700  "
            >
              Update Notes
            </label>
            {error && (
              <div className="mt-3 bg-red-200  rounded-lg  text-center p-2 text-red-600  text-lg">
                {error}
              </div>
            )}
            <input
              type="text"
              id="title"
              name="title"
              placeholder="heading"
              value={title}
              onChange={handleTitleChange}
              className="mt-5 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="backgroundColor"
              className="block text-sm font-medium  text-left  text-gray-700"
            >
              Background Color
            </label>
            <input
              type="color"
              id="backgroundColor"
              name="backgroundColor"
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
              className="mt-1 block w-10 "
            />
          </div>
          {/* <div>{backgroundColor}</div> */}
          <div>
            <label
              htmlFor="text"
              className="block  text-left  text-sm font-medium text-gray-700"
            >
              Text
            </label>
            <textarea
              id="text"
              name="text"
              value={text}
              onChange={handleTextChange}
              className="mt-1 p-2 block w-full border  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={8}
              // required
              placeholder="Enter your notes............"
            ></textarea>
          </div>
          <div className="md:flex md:justify-between md:items-center">
            <button
              type="submit"
              className="w-full md:w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateNotes;
