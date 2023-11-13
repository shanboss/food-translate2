// Navbar.js
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = ({ onSignIn, onSignOut, userPhoto }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = getAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigateDashboard = () => {
    router.push("/dashboard"); // Navigate the user to the dashboard page
  };

  console.log("userPhoto:", userPhoto);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white font-bold text-xl"
          onClick={handleNavigateDashboard}
        >
          Food Translate
        </div>
        <div
          className={`hidden md:flex space-x-4 items-center ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {auth.currentUser ? (
            // If currentUser exists, user is signed in
            <>
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
            </>
          ) : (
            // If currentUser is null, user is not signed in
            <div>
              {/* Add your "Sign In" logic here */}
              <button onClick={onSignIn}>Sign In</button>
            </div>
          )}
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
