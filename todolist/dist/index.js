import { jsx as _jsx } from "react/jsx-runtime";
// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "../src/context/ThemeContext";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }));
