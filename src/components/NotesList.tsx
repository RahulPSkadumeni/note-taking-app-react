import React, { useState } from "react";
import { NotesItem } from "../Model/note.model";
import Notes from "./Notes";
import { useSelector, useDispatch } from "react-redux";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Pagination from "./Pagination";
import { RootState } from "../utils/Store";
// type INotesListProps = {
//   notes: NotesItem[];
//   setNotes: React.Dispatch<React.SetStateAction<NotesItem[]>>;
// };
const NotesList = () => {
  const pageSize = 5; // Number of notes per page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const notes = useSelector((state: RootState) => state.notes);
  const notesToDisplay = notes.slice(startIndex, endIndex);

  const dispatch = useDispatch();
  const renderNotes = (): JSX.Element[] => {
    return notesToDisplay.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  const handleDelete = (id: string) => {
    console.log("id,>>>>>>>>>", id);
    // setNotes(notes.filter((note) => note.id !== id));
    dispatch({ type: "notes/deleteNote", payload: id });
    alert("note deleted");
  };
  const renderPageNavigation = (): JSX.Element[] => {
    const totalPageCount = Math.ceil(notes.length / pageSize);
    const pageButtons = [];
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

    for (let i = 1; i <= totalPageCount; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-2 px-3 py-1 rounded-full ${
            currentPage === i ? "bg-indigo-600 text-white" : "bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div>
      <h1 className="text-3xl p-4  m-5  bg-orange-200 shadow-md  font-semibold">
        Notes
      </h1>
      {renderNotes()}
      {/* <Pagination /> */}

      {renderPageNavigation()}
    </div>
  );
};

export default NotesList;
