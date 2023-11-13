"use client";

import React, { useState } from "react";

const Navbar = ({ onSignOut, userPhoto }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log("userPhoto:", userPhoto);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Food Translate</div>
        <div
          className={`hidden md:flex space-x-4 items-center ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <div>
            <button onClick={onSignOut}>Sign Out</button>
          </div>
          <a>
            {userPhoto && (
              <img
                className="rounded-full w-10 h-10"
                src={userPhoto}
                alt="user"
              />
            )}
          </a>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
