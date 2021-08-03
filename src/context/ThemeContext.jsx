import React, { useState } from 'react';

export const ThemeContextProvider = React.createContext();

const ThemeContext = ({ children }) => {
  const currentTheme = localStorage.getItem('theme');
  const [activeTheme, setActiveTheme] = useState(currentTheme ?? 'light');
  const themeToggler = () => {
    if (activeTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      setActiveTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setActiveTheme('light');
    }
  };

  return (
    <ThemeContextProvider.Provider
      value={{
        activeTheme,
        setActiveTheme,
        themeToggler,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};

export default ThemeContext;
