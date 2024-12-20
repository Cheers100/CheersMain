import { useState } from "react";

export default function ChangeTheme() {
  const savedTheme = localStorage.getItem("theme") || "root-light";
  const [theme, setTheme] = useState<string>(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "root-light" ? "root-dark" : "root-light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme }
}
