import React, { useState, useEffect } from "react";
import { NotesItem } from "../Model/note.model";
import Notes from "./Notes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateNotes = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
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

    // You can handle saving the note data here
    console.log("Title:", title);
    console.log("Text:", text);

    if (title === "") {
      setError("Enter a title");
      return; // Do not reset fields
    } else if (text === "") {
      setError("Text is empty");
      return; // Do not reset fields
    } else {
      setError(""); // Clear any previous error messages
    }
    dispatch({
      type: "notes/addNote",
      payload: {
        id: new Date().toString(),
        title: title,
        text: text,
        color: backgroundColor,
        date: new Date().toString(),
      },
    });

    // Reset the form
    console.log("new note added");
    setTitle("");
    setText("");
    setBackgroundColor("#ffffff");
    navigate("/");
  };
  return (
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
            Create Notes
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
            Create Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotes;
