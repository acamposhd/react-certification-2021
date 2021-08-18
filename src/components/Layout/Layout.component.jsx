import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavBar from '../NavBar';
import { darkTheme, lightTheme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/global';
import useTheme from '../../hooks/useTheme';

function Layout({ children }) {
  const { activeTheme } = useTheme();
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
