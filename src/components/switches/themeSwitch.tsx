import React from "react";
import { useTheme } from "../../ThemeProvider"; // Import the custom ThemeProvider

const ThemeSwitch: React.FC = () => {
  // Destructure theme (current mode) and toggleTheme (function to switch mode) from ThemeProvider
  const { theme, toggleTheme } = useTheme();

  return (
    // Label wraps the entire toggle for accessibility and click area
    <label
      className="flex items-center cursor-pointer gap-2"
      htmlFor="theme-switch"
    >
      {/* Hidden Checkbox for Accessibility */}
      <input
        id="theme-switch"
        type="checkbox"
        checked={theme === "dark"} // Set checked state based on the current theme
        onChange={toggleTheme} // Call toggleTheme on change
        className="sr-only peer" // Hidden from view but accessible
      />

      {/* Toggle Switch Background */}
      <div className="w-12 h-6 bg-sur-l dark:bg-sur-d rounded-full flex items-center px-1 transition-colors duration-300">
        {/* Toggle Handle */}
        <div
          className={`w-5 h-5 flex items-center justify-center bg-white rounded-full shadow-sm transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "-translate-x-1"
          }`}
        >
          {/* Dynamic Icon Inside Handle */}
          {theme === "dark" ? (
            // Moon Icon for Dark Mode
            <svg
              className="w-4 h-4 text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.354a8 8 0 1 0 7.285 12.244 6 6 0 1 1-7.285-12.244z" />
            </svg>
          ) : (
            // Sun Icon for Light Mode
            <svg
              className="w-4 h-4 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41L4.22 5.64a1 1 0 0 1 0-1.42zm12.02 12.02a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41l-1.41-1.41a1 1 0 0 1 0-1.41zM2 11h2a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm17 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zM5.64 17.36a1 1 0 0 1 1.41-1.41l1.41 1.41a1 1 0 1 1-1.41 1.41L5.64 18.77a1 1 0 0 1-1.41 0zm12.02-12.02a1 1 0 0 1 1.41-1.41l1.41 1.41a1 1 0 1 1-1.41 1.41l-1.41-1.41z" />
            </svg>
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeSwitch;
