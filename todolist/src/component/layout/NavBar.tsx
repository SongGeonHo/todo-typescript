import React from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="w-sm flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
        ✨ TODO
      </h2>
      <button
        onClick={toggleDarkMode}
        className="text-sm text-gray-500 dark:text-gray-300 hover:text-blue-500 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default Navbar;
