import { ChevronRightIcon } from "@heroicons/react/20/solid";
import * as React from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

interface IPaginationProps {}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <a
        href="#"
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </a>
      {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
      <a
        href="#"
        aria-current="page"
        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        1
      </a>

      <a
        href="#"
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </a>
    </nav>
  );
};

export default Pagination;
