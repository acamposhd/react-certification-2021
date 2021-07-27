import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeContext from '../../context/ThemeContext';
import Navbar from './NavBar.component';

test('renders NavBar', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(
    <ThemeContext>
      <Navbar />
    </ThemeContext>
  );
});
test('checks if navbar has search box with placeholder text', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(
    <ThemeContext>
      <Navbar />
    </ThemeContext>
  );
  const searchInputElement = screen.queryByPlaceholderText(/search/i);
  expect(searchInputElement).toBeInTheDocument();
});
