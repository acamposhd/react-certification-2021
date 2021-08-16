import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import NavBar from '../NavBar';
import { ThemeContextProvider } from '../../context/ThemeContext';
import { darkTheme, lightTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global';

function Layout({ children }) {
  const { activeTheme } = useContext(ThemeContextProvider);
  const themeMode = activeTheme === 'light' ? lightTheme : darkTheme;
  return (
    <main>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <NavBar />
        {children}
      </ThemeProvider>
    </main>
  );
}

export default Layout;
