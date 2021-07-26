import React, { useState } from 'react';

export const ThemeContextProvider = React.createContext();

const ThemeContext = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState('light');
  const themeToggler = () => {
    if (activeTheme === 'light') {
      setActiveTheme('dark');
    } else {
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
