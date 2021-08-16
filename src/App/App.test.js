import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App component', () => {
  it('should render component', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render "hello world"', () => {
    render(<App />);
    const container = screen.getByText(/hello world/i);
    expect(container).toBeInTheDocument();
  });
});
