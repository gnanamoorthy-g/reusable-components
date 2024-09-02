import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, route }) => {
  return (
    <Link to={route}>
      <div className="flex items-center justify-center h-56 w-full bg-gradient-to-r from-blue-200 via-purple-300 to-indigo-200 rounded-lg shadow-md text-gray-800 text-xl font-semibold hover:scale-105 transform transition-transform duration-300">
        {title}
      </div>
    </Link>
  );
};

export default Card;
