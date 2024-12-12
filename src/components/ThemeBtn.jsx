// src/components/ThemeBtn.js
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeBtn() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleSelectChange = (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme !== theme) {
      toggleTheme();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: 100,
      }}
    >
      <select
        id="theme-select"
        className="form-select bg-primary text-white"
        value={theme}
        onChange={handleSelectChange}
        style={{
          cursor: "pointer",
          paddingLeft: "30px ",
          paddingRight: "10px",
          position : "relative"
        }}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <div className="sun-moon position-absolute" style={{
        top : "50%",
        transform : "translateY(-50%)" ,
        left : "5px"
      }}>
        {theme === "dark" ? (
          <i class="fa-regular fa-moon text-light fs-5"></i>
        ) : (
          <i class="fa-regular fa-sun text-light fs-5"></i>
        )}
      </div>
    </div>
  );
}
