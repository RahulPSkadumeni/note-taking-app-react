import React, { useState } from "react";
import { NotesItem } from "../Model/note.model";
import { useSelector } from "react-redux";
import { RootState } from "../utils/Store";
import { useNavigate } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestion, setSuggestion] = useState<NotesItem[]>([]);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<Boolean>(false);
  console.log("mobileMenu", mobileMenu);
  console.log(searchQuery);
  const notes: NotesItem[] = useSelector((state: RootState) => state.notes);
  console.log("for search", notes);

  const searchFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (!searchQuery || !searchQuery?.length > 0) {
    if (searchQuery.length <= 0) {
      return;
    }
    console.log("searchQuery", searchQuery);
    const filteredNote = notes.filter(
      (note) =>
        note?.title?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
        note?.text?.toLowerCase()?.includes(searchQuery.toLowerCase())
    );
    console.log("search result", filteredNote);
    navigate("/search", { state: { searchResults: filteredNote } });
  };

  const navtoCreate = () => {
    navigate("/create");
  };

  const navtoHome = () => {
    navigate("/");
  };
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div
            onClick={navtoHome}
            className="text-white text-2xl font-bold flex flex-row cursor-pointer"
          >
            <img
              className="h-11 mx-2"
              src="https://www.pngitem.com/pimgs/m/25-255518_notes-icon-notes-app-icon-png-transparent-png.png"
              alt="logo"
            />
            My Notes
          </div>

          <div className="lg:hidden ml-52 justify-end ">
            {/* Mobile menu button */}
            <button className="text-white p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div>
            <div className="hidden lg:flex items-center">
              {/* <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-gray-200 text-gray-800 rounded-full py-2 px-4 mr-2 focus:outline-none"
              />
              <button
                onClick={searchFunction}
                className="bg-indigo-600 text-white py-2 px-4 rounded-full"
              >
                Search
              </button> */}
            </div>
          </div>

          <ul className="hidden lg:flex space-x-4">
            <li
              onClick={navtoCreate}
              className=" bg-emerald-600 m-2  p-2  rounded-full text-white  cursor-pointer"
            >
              Add Note
            </li>
          </ul>
          {/* Search bar for larger screens */}
        </div>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden">
        {mobileMenu ? (
          <div>
            <ul className="bg-gray-500 mt-2 space-y-2">
              <li
                onClick={navtoCreate}
                className="text-white hover:text-gray-300 cursor-pointer p-2"
              >
                Add Note
              </li>
            </ul>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-200 text-gray-800 rounded-full py-2 px-4 focus:outline-none"
              />
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full mt-2">
                Search
              </button>
            </div>
          </div>
        ) : null}
        {/* Search bar for smaller screens */}
      </div>
    </nav>
  );
};

export default Header;
