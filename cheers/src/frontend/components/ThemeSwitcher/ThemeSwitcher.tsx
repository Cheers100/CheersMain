import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mudar para {theme === "root-light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;