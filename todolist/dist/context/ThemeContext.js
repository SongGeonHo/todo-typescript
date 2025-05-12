import { jsx as _jsx } from "react/jsx-runtime";
// ThemeContext.tsx
import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children, }) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (_jsx(ThemeContext.Provider, { value: { darkMode, toggleTheme }, children: children }));
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
