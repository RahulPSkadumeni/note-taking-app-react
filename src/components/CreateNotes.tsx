import React, { useState, useEffect } from "react";
import { NotesItem } from "../Model/note.model";
import Notes from "./Notes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categories } from "../constants/constants";
import Header from "./Header";
const CreateNotes = () => {
  const currentDateTime = new Date();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can handle saving the note data here
    console.log("Title:", title);
    console.log("Text:", text);

    if (title === "") {
      setError("Enter a title");
      return;
    } else if (selectedCategory === "") {
      setError("select a category");
      return; // D // Do not reset fields
    } else if (text === "") {
      setError("Text is empty");
      return; // Do not reset fields
    } else {
      setError(""); // Clear any previous error messages
    }
    dispatch({
      type: "notes/addNote",
      payload: {
        id: currentDateTime.getTime().toString(),
        title: title,
        text: text,
        date: new Date().toString(),
        category: selectedCategory,
      },
    });

    // Reset the form
    console.log("new note added");
    setTitle("");
    setText("");

    navigate("/");
  };
  return (
    <div>
      {" "}
      <Header />
      <div className="flex m-5 p-4  justify-center">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl flex-wrap w-full md:w-1/2  space-y-4 m-5 p-10  border-black bg-gray-300"
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
          <select
            className="mt-5 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

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
    </div>
  );
};

export default CreateNotes;
