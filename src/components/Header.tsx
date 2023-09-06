import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My Notes</div>
          <div className="lg:hidden">
            {/* Mobile menu button */}
            <button className="text-white p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 text-gray-800 rounded-full py-2 px-4 mr-2 focus:outline-none"
              />
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-full">
                Search
              </button>
            </div>
          </div>
          <ul className="hidden lg:flex space-x-4">
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Home
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              About
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Services
            </li>
            <li className="text-white hover:text-gray-300 cursor-pointer">
              Contact
            </li>
          </ul>
          {/* Search bar for larger screens */}
        </div>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden">
        <ul className="bg-gray-500 mt-2 space-y-2">
          <li className="text-white hover:text-gray-300 cursor-pointer p-2">
            Home
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer p-2">
            About
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer p-2">
            Services
          </li>
          <li className="text-white hover:text-gray-300 cursor-pointer p-2">
            Contact
          </li>
        </ul>
        {/* Search bar for smaller screens */}
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
    </nav>
  );
};

export default Header;
