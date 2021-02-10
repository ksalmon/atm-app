import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders account balance text', () => {
  render(<App />);
  const textElement = screen.getByText(/Account Balance/i);
  expect(textElement).toBeInTheDocument();
});
