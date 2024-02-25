"use client";
import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("portfolio-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (localTheme) {
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
      setTheme(localTheme);
    } else if (matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeSwitcher() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("Theme context is not provided or might be null!");
  }
  return context;
}
