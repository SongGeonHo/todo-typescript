import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (_jsxs("div", { className: "w-sm flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-700 dark:text-white", children: "\u2728 TODO" }), _jsx("button", { onClick: toggleDarkMode, className: "text-sm text-gray-500 dark:text-gray-300 hover:text-blue-500 transition", children: darkMode ? "☀️ Light" : "🌙 Dark" })] }));
};
export default Navbar;
