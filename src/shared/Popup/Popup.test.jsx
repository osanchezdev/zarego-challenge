import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Popup from './Popup';

describe('Popup component', () => {
  it('should render component', () => {
    const tree = renderer
      .create(
        <Popup handleClose={() => {}}>
          <span>children</span>
        </Popup>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render children component', () => {
    const childrenText = 'childrenComponent';
    render(
      <Popup handleClose={() => {}}>
        <div>{childrenText}</div>
      </Popup>
    );
    const children = screen.getByText(childrenText);
    expect(children).toBeInTheDocument();
  });

  it('should execute handleClose when overlay is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Popup handleClose={handleClose}>
        <div>children content</div>
      </Popup>
    );
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
