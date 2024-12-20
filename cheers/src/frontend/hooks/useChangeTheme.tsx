import { useState } from "react";

export default function ChangeTheme() {
  const [theme, setTheme] = useState("root-light");

  const toggleTheme = () => {
    const newTheme = theme === "root-light" ? "root-dark" : "root-light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };
  
  return {theme, toggleTheme}
}
