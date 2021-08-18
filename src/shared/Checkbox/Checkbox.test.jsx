import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

const { labelText, onBlur, onChange } = {
  labelText: 'labelTest',
  onBlur: jest.fn(),
  onChange: jest.fn(),
};
describe('Checkbox component snapshot', () => {
  it('should render component', () => {
    const tree = renderer
      .create(
        <Checkbox label={labelText} onChange={onChange} onBlur={onBlur} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Checkbox component funtional tests', () => {
  it('should not be checked', () => {
    render(<Checkbox label={labelText} onChange={onChange} onBlur={onBlur} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('should be checked', () => {
    render(
      <Checkbox checked label={labelText} onChange={onChange} onBlur={onBlur} />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('should fire onChange event', () => {
    render(
      <Checkbox checked label={labelText} onChange={onChange} onBlur={onBlur} />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toBeCalledTimes(1);
  });

  it('should fire onBlur event', () => {
    render(
      <Checkbox checked label={labelText} onChange={onChange} onBlur={onBlur} />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.blur(checkbox);
    expect(onBlur).toBeCalledTimes(1);
  });
});
