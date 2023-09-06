import React, { useState } from "react";
import { NotesItem } from "../Model/note.model";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Pagination from "./Pagination";
import { RootState } from "../utils/Store";
import Header from "./Header";
import { categories } from "../constants/constants";
import { Navigate, useNavigate } from "react-router-dom";

//   notes: NotesItem[];
//   setNotes: React.Dispatch<React.SetStateAction<NotesItem[]>>;
// };
const NotesList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const pageSize: number = 8; // Number of notes per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndexFiltered = (currentPage - 1) * pageSize;
  const endIndexFiltered = startIndexFiltered + pageSize;
  const navigate = useNavigate();
  const notes = useSelector((state: RootState) => state.notes);
  const filteredNotes = notes.filter((note) => {
    return selectedCategory === "All" || note.category === selectedCategory;
  });
  console.log("filtered", filteredNotes);
  const notesToDisplay: NotesItem[] = filteredNotes.slice(
    startIndexFiltered,
    endIndexFiltered
  );
  const categoryList = categories;

  const dispatch = useDispatch();
  const renderNotes = (): JSX.Element[] => {
    if (notesToDisplay.length === 0) {
      // Render a component indicating that there are no notes
      return [<EmptyNotes />];
    }

    return notesToDisplay.map((note) => {
      return (
        <div className=" w-full md:w-1/3 lg:w-1/5  m-2  ">
          <div className=" " key={note.id}>
            <Notes note={note} handleDelete={handleDelete} />
          </div>
        </div>
      );
    });
  };
  const EmptyNotes = () => {
    return (
      <div className="h-screen   justify-center items-center">
        <p>No notes available. Add some notes!</p>
        <button
          className="bg-emerald-700 m-2 text-white p-3 rounded-full"
          onClick={() => navigate("/create")}
        >
          Add Note
        </button>
      </div>
    );
  };
  const handleDelete = (id: string) => {
    console.log("id,>>>>>>>>>", id);
    // setNotes(notes.filter((note) => note.id !== id));
    dispatch({ type: "notes/deleteNote", payload: id });
    alert("note deleted");
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const renderPageNavigation = (): JSX.Element[] => {
    const totalPageCount = Math.ceil(filteredNotes.length / pageSize);
    const pageButtons = [];

    for (let i = 1; i <= totalPageCount; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-2 px-3 py-1 flex-end rounded-full ${
            currentPage === i ? "bg-indigo-600 text-white" : "bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value); // Step 5
  };

  return (
    <div>
      <Header />
      <h1 className="text-3xl p-4  m-5  bg-orange-200 shadow-md  font-semibold">
        Notes
      </h1>
      <div>
        <label htmlFor="category">Select a category: </label>
        <select
          className="pl-2 pr-2 p-1 m-2 rounded-3xl "
          id="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="  flex  flex-wrap justify-center">{renderNotes()}</div>
      {renderPageNavigation()}
    </div>
  );
};

export default NotesList;
