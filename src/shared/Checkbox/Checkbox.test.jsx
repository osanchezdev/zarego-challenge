import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

const { labelText, name, controller } = {
  labelText: 'labelTest',
  name: 'fieldName',
  controller: jest.fn(),
};
describe('Checkbox component snapshot', () => {
  it('should render component', () => {
    const tree = renderer
      .create(
        <Checkbox label={labelText} name={name} controller={controller} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Checkbox component funtional tests', () => {
  it('should not be checked', () => {
    render(<Checkbox label={labelText} name={name} controller={controller} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
});
