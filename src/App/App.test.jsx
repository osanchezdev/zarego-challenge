import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render zarego logo', () => {
    const logo = screen.getByAltText(/zarego/i);
    expect(logo).toBeInTheDocument();
  });

  it('should render popup', async () => {
    const popup = await screen.getByRole('dialog');
    expect(popup).toBeInTheDocument();
  });
});
