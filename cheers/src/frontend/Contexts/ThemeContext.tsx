import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") || "root-light";
  const [theme, setTheme] = useState<string>(savedTheme);

  useEffect(() => {
    document.documentElement.className = theme; // Define o tema no <html>
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "root-light" ? "root-dark" : "root-light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Salva no localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};