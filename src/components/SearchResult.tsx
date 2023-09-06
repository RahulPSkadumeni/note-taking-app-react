import * as React from "react";
import { useLocation } from "react-router-dom";
import Notes from "./Notes";
import { NotesItem } from "../Model/note.model";
import { useDispatch } from "react-redux";
import Header from "./Header";

const SearchResult: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const renderNotes = (): JSX.Element[] => {
    if (searchResults.length > 0) {
      return searchResults.map((note: NotesItem) => {
        return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
      });
    } else {
      return [
        <div className="flex flex-col items-center bg-gray-200   h-screen  justify-center ">
          <h1 className="text-black">No matching result</h1>
        </div>,
      ];
    }
  };

  const handleDelete = (id: string) => {
    console.log("id,>>>>>>>>>", id);
    // setNotes(notes.filter((note) => note.id !== id));
    dispatch({ type: "notes/deleteNote", payload: id });
    alert("note deleted");
  };

  return (
    <div>
      <Header />
      {renderNotes()}
    </div>
  );
};

export default SearchResult;
