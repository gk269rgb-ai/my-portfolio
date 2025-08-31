import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-800 font-medium transition"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;
