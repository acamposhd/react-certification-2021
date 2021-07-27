import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

test('renders title', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
  const helloElement = screen.getByText(/Challenge 1/i);
  expect(helloElement).toBeInTheDocument();
});
