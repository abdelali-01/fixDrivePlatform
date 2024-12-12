// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Function to toggle between themes
  const toggleTheme = () => { 
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Apply the theme to the document root
  useEffect(() => {
    
    const root = document.body;
    root.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
