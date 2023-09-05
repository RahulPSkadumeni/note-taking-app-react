import React from "react";
import NotesList from "./NotesList";
import { NotesItem } from "../Model/note.model";

type Inote = {
  note: NotesItem;
  handleDelete: (id: string) => void;
};

const Notes: React.FC<Inote> = ({ note, handleDelete }) => {
  return (
    <div>
      <article className="flex max-w-xl flex-col items-start justify-between shadow-lg  bg-stone-100 m-5 p-3">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={note.title} className="text-gray-500">
            {note.date}
          </time>
          <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {note.title}
          </a>
        </div>
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
        <button
          onClick={() => handleDelete(note.id)}
          className="text-white font-semibold m-5 p-2 bg-red-500 rounded-lg shadow-md shadow-stone-500"
        >
          Delete
        </button>
      </article>
    </div>
  );
};

export default Notes;
