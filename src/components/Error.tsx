import React from "react";
import Header from "./Header";
import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const err: any = useRouteError();
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold text-red-500">Error</h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, something went wrong.
        </p>
        <h2 className="text-4xl font-bold text-red-500">
          {err.status + " :  " + err.statusText}
        </h2>
      </div>
    </div>
  );
};

export default Error;
