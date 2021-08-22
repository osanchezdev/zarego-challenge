import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button component snapshot', () => {
  it('should render component', () => {
    const tree = renderer
      .create(
        <Button>
          <span>Test</span>
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button component funtional tests', () => {
  it('should render children', () => {
    render(
      <Button>
        <span>Test</span>
      </Button>
    );
    const children = screen.getByText('Test');
    expect(children).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(
      <Button disabled>
        <span>Test</span>
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should fire handleClick function', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick}>
        <span>Test</span>
      </Button>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
