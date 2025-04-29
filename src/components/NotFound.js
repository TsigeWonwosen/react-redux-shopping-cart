import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center min-h-10 h-[300px]">
      <h2 className="text-2xl font-semibold text-gray-600 mt-4">
        404 : Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>
      <p className="text-gray-500 mt-2">
        Please check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="border-green-500 border text-green-500 px-4 py-2 mt-6 rounded-md hover:text-green-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
