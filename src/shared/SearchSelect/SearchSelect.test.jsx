import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import SearchSelect from './SearchSelect';

import { COLLEGES_DATA as testData } from '../../data';

describe('SearchSelect component', () => {
  const { labelText, controller, onSelectListItem, placeholder } = {
    placeholder: 'Type to search',
    labelText: 'labelTest',
    controller: {
      ref: () => {},
      onChange: () => {},
      onBlur: () => {},
    },
    onSelectListItem: () => {},
  };
  it('should render component', () => {
    const tree = renderer
      .create(
        <SearchSelect
          label={labelText}
          controller={controller}
          data={testData}
          onSelectListItem={onSelectListItem}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render list items on focus', () => {
    render(
      <SearchSelect
        label={labelText}
        controller={controller}
        data={testData}
        onSelectListItem={onSelectListItem}
      />
    );
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.focus(input);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(testData.length);
  });

  it('should render no results', async () => {
    render(
      <SearchSelect
        label={labelText}
        controller={controller}
        data={testData}
        onSelectListItem={onSelectListItem}
      />
    );
    const input = screen.getByPlaceholderText(placeholder);
    act(() => {
      userEvent.type(input, 'wasrereqw');
    });
    await waitFor(() => {
      screen.getByText(/No items/i);
    });
    const noResultsItem = screen.getByText(/No items/i);
    expect(noResultsItem).toBeInTheDocument();
  });

  it('should hide list in outside click', async () => {
    render(
      <SearchSelect
        label={labelText}
        controller={controller}
        data={testData}
        onSelectListItem={onSelectListItem}
      />
    );
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.focus(input);
    let listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(testData.length);
    act(() => {
      userEvent.click(document.body);
    });
    listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
