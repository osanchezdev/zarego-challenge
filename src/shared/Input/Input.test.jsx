import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Input from './Input';

// TODO: refactor
describe('Input component', () => {
  const controller = () => ({
    ref: jest.fn(),
    onChange: jest.fn(),
    onBlur: jest.fn(),
  });
  const { labelText, name, errorMsg, placeholder, text, prefix, icon } = {
    labelText: 'labelTest',
    name: 'nameField',
    errorMsg: 'Value is required',
    placeholder: 'Example',
    text: 'input test',
    prefix: '$',
    icon: 'search',
  };

  it('should render component', () => {
    const tree = renderer
      .create(<Input label={labelText} name={name} controller={controller} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render input label', () => {
    render(<Input label={labelText} name={name} controller={controller} />);
    const label = screen.getByLabelText(labelText);
    expect(label).toBeInTheDocument();
  });

  it('should have input placeholder', () => {
    render(
      <Input
        label={labelText}
        name={name}
        placeholder={placeholder}
        controller={controller}
      />
    );
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });

  it('should not render input label', () => {
    render(
      <Input
        label={labelText}
        name={name}
        showLabel={false}
        controller={controller}
      />
    );
    const label = screen.queryByLabelText(labelText);
    expect(label).not.toBeInTheDocument();
  });

  it('should render input error message', () => {
    render(
      <Input
        label={labelText}
        name={name}
        error
        errorMsg={errorMsg}
        controller={controller}
      />
    );
    const error = screen.getByText(errorMsg);
    expect(error).toBeInTheDocument();
  });

  it('should not render input error message', () => {
    render(
      <Input
        label={labelText}
        name={name}
        errorMsg={errorMsg}
        controller={controller}
      />
    );
    const error = screen.queryByText(errorMsg);
    expect(error).not.toBeInTheDocument();
  });

  it('should render input prefix text', () => {
    render(
      <Input
        label={labelText}
        name={name}
        prefixText={prefix}
        controller={controller}
      />
    );
    const prefixText = screen.getByText(prefix);
    expect(prefixText).toBeInTheDocument();
  });

  it('should not render input preffix text', () => {
    render(<Input label={labelText} name={name} controller={controller} />);
    const prefixText = screen.queryByText(prefix);
    expect(prefixText).not.toBeInTheDocument();
  });

  it('should render input icon', () => {
    render(
      <Input
        label={labelText}
        name={name}
        icon={icon}
        controller={controller}
      />
    );
    const iconImg = screen.getByAltText('input-icon');
    expect(iconImg).toBeInTheDocument();
  });

  it('should not render input icon', () => {
    render(<Input label={labelText} name={name} controller={controller} />);
    const iconImg = screen.queryByAltText('input-icon');
    expect(iconImg).not.toBeInTheDocument();
  });

  it('should have typed value', () => {
    render(
      <Input
        label={labelText}
        name={name}
        placeholder={placeholder}
        controller={controller}
      />
    );
    const input = screen.getByPlaceholderText(placeholder);

    userEvent.type(input, text);
    expect(input).toHaveValue(text);
  });
});
