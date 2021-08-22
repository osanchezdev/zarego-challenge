import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ZaregoLogo from './ZaregoLogo';

describe('ZaregoLogo component', () => {
  it('should render component', () => {
    const tree = renderer.create(<ZaregoLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should execute handleClick', () => {
    const handleClick = jest.fn();
    render(<ZaregoLogo handleClick={handleClick} />);
    const logo = screen.getByAltText(/zarego/i);

    fireEvent.click(logo);

    expect(handleClick).toBeCalledTimes(1);
  });
});
