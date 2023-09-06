import React, { useState } from "react";
import NotesList from "./NotesList";
import { NotesItem } from "../Model/note.model";
import { useNavigate } from "react-router-dom";

type Inote = {
  note: NotesItem;
  handleDelete: (id: string) => void;
};

const Notes: React.FC<Inote> = ({ note, handleDelete }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const [editOptionVisible, setEditOptionVisible] = useState<Boolean>(false);
  const [deleteOptionVisible, setDeleteOptionVisible] =
    useState<Boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const toggleDeleteOption = () => {
    setDeleteOptionVisible(!deleteOptionVisible);
    setEditOptionVisible(false); // Close edit option when delete is clicked
  };
  const handleUpdate = () => {
    console.log("first");
    navigate(`/update/${note.id}`);
  };
  return (
    <div className="h-full ">
      <article className="  bg-stone-200  rounded-2xl shadow-lg m-5 p-5">
        <div className="">
          <div className=" items-center gap-x-3 text-xs ">
            <div className=" justify-between ">
              <time dateTime={note.title} className="text-gray-500">
                {note.date}
              </time>
            </div>
          </div>
          <a className=" pl-2 pr-2 rounded-full bg-gray-50  text-gray-600 hover:bg-gray-100">
            {note.category}
          </a>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a>
                <span className="absolute inset-0" />
                {note.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm  leading-6 text-gray-600">
              {note.text}
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => handleDelete(note.id)}
              className=" text-white font-semibold m-5 p-2 bg-red-500 rounded-lg shadow-md shadow-stone-500"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate()}
              className=" text-white font-semibold m-5 p-2 bg-emerald-500 rounded-lg shadow-md shadow-stone-500"
            >
              Update
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Notes;
