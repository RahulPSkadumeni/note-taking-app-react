import React, { useState } from "react";
import { NotesItem, RouteParams } from "../Model/note.model";
import Notes from "./Notes";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../utils/Store";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../utils/NoteSlice";
import Header from "./Header";
import { categories } from "../constants/constants";

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

  const [selectedCategory, setSelectedCategory] = useState(
    note?.category || ""
  );
  const [title, setTitle] = useState<string>(note?.title || "");
  const [text, setText] = useState<string>(note?.text || "");

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
  function validation(
    title: string,
    id: string,
    text: string,
    selectedCategory: string
  ): any {
    if (title === "") {
      setError("Enter a title");
      return; // Do not reset fields
    } else if (text === "") {
      setError("Text is empty");
      return;
    } else if (selectedCategory === "") {
      setError("select a category");
      return; // D // Do not reset fields
    } else {
      setError(""); // Clear any previous error messages
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("first");
    console.log("Title:", title);
    console.log("id:", id);
    console.log("text:", text);

    console.log("date:", Date);
    validation(title, validId, text, selectedCategory);
    const newNote: NotesItem = {
      id: validId, // Use the id from route parameters
      title: title,
      category: selectedCategory,
      text: text,

      date: new Date().toDateString(),
    };

    dispatch(updateNotes(newNote));

    setTitle("");
    setText("");

    navigate("/");
  };

  // Reset the form

  return (
    <>
      <Header />
      <div className="flex    m-5 p-4  justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex-wrap rounded-3xl w-full md:w-1/2  space-y-4 m-5 p-10 border-black bg-gray-300"
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
            <label
              htmlFor="title"
              className="block text-lg  font-semibold text-left   text-gray-700  "
            >
              Title
            </label>
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
              htmlFor="title"
              className="block text-lg  font-medium text-left   text-gray-700  "
            >
              category
            </label>
            <select
              className="p-2 rounded-lg "
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
          </div>

          <div>
            <label
              htmlFor="text"
              className="block  text-left  text-lg font-medium text-gray-700"
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
