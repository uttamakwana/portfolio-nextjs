"use client";
import { useThemeSwitcher } from "@/context/ThemeContextProvider";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeSwitcher();
  return (
    <button
      className="fixed bottom-5 right-5 p-4 rounded-full shadow-2xl bg-gray-950 dark:bg-white dark:text-gray-950 text-white font-bold bg-opacity-80 backdrop-blur-[0.5rem] hover:scale-105 active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
