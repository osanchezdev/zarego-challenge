import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DropdownSelect from './DropdownSelect';

import { ADMISION_TYPES as testData } from '../../data';

const controller = () => ({
  ref: jest.fn(),
  onBlur: jest.fn(),
  onChange: jest.fn(),
});
const { labelText, name } = {
  labelText: 'labelTest',
  name: 'nameField',
};

describe('DropdownSelect component snapshot', () => {
  it('should render component', () => {
    const tree = renderer
      .create(
        <DropdownSelect
          label={labelText}
          name={name}
          data={testData}
          controller={controller}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('DropdownSelect component funtional tests', () => {
  beforeAll(() =>
    render(
      <DropdownSelect
        label={labelText}
        name={name}
        data={testData}
        controller={controller}
      />
    )
  );

  it('should render all options', () => {
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(testData.length + 1);
  });
});
