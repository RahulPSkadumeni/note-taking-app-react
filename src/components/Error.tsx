import React from "react";

const Error: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500">Error</h1>
      <p className="mt-4 text-lg text-gray-600">Sorry, something went wrong.</p>
    </div>
  );
};

export default Error;
