import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DropdownSelect from './DropdownSelect';

import { ADMISION_TYPES as testData } from '../../data';

const { labelText, controller } = {
  labelText: 'labelTest',
  controller: {
    ref: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
  },
};

describe('DropdownSelect component snapshot', () => {
  it('should render component', () => {
    const tree = renderer
      .create(
        <DropdownSelect label={labelText} data={testData} {...controller} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('DropdownSelect component funtional tests', () => {
  beforeAll(() =>
    render(<DropdownSelect label={labelText} data={testData} {...controller} />)
  );

  it('should render all options', () => {
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(testData.length);
  });
});
