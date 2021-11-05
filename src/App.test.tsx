import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the QuillUI icon', () => {
  render(<App />);
  const linkElement = screen.getByAltText('QuillUI');
  expect(linkElement).toBeInTheDocument();
});
