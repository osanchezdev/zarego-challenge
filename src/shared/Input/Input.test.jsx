import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Input from './Input';

// TODO: refactor
describe('Input component', () => {
  const { labelText, errorMsg, placeholder, text, prefix, icon } = {
    labelText: 'labelTest',
    errorMsg: 'Value is required',
    placeholder: 'Example',
    text: 'input test',
    prefix: '$',
    icon: 'search',
  };

  it('should render component', () => {
    const tree = renderer.create(<Input label={labelText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render input label', () => {
    render(<Input label={labelText} />);
    const label = screen.getByLabelText(labelText);
    expect(label).toBeInTheDocument();
  });

  it('should have input placeholder', () => {
    render(<Input label={labelText} placeholder={placeholder} />);
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });

  it('should not render input label', () => {
    render(<Input label={labelText} showLabel={false} />);
    const label = screen.queryByLabelText(labelText);
    expect(label).not.toBeInTheDocument();
  });

  it('should render input error message', () => {
    render(<Input label={labelText} error errorMsg={errorMsg} />);
    const error = screen.getByText(errorMsg);
    expect(error).toBeInTheDocument();
  });

  it('should not render input error message', () => {
    render(<Input label={labelText} errorMsg={errorMsg} />);
    const error = screen.queryByText(errorMsg);
    expect(error).not.toBeInTheDocument();
  });

  it('should render input prefix text', () => {
    render(<Input label={labelText} prefixText={prefix} />);
    const prefixText = screen.getByText(prefix);
    expect(prefixText).toBeInTheDocument();
  });

  it('should not render input preffix text', () => {
    render(<Input label={labelText} />);
    const prefixText = screen.queryByText(prefix);
    expect(prefixText).not.toBeInTheDocument();
  });

  it('should render input icon', () => {
    render(<Input label={labelText} icon={icon} />);
    const iconImg = screen.getByAltText('input-icon');
    expect(iconImg).toBeInTheDocument();
  });

  it('should not render input icon', () => {
    render(<Input label={labelText} />);
    const iconImg = screen.queryByAltText('input-icon');
    expect(iconImg).not.toBeInTheDocument();
  });

  it('should fire onBlur event', () => {
    const onBlur = jest.fn();
    render(
      <Input label={labelText} placeholder={placeholder} onBlur={onBlur} />
    );
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should fire onFocus event', () => {
    const onFocus = jest.fn();
    render(
      <Input label={labelText} placeholder={placeholder} onFocus={onFocus} />
    );
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.focusIn(input);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should fire onChange event', () => {
    const onChange = jest.fn();
    render(
      <Input label={labelText} placeholder={placeholder} onChange={onChange} />
    );
    const input = screen.getByPlaceholderText(placeholder);

    userEvent.type(input, 'A');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should have typed value', () => {
    const onChange = jest.fn();
    render(
      <Input label={labelText} placeholder={placeholder} onChange={onChange} />
    );
    const input = screen.getByPlaceholderText(placeholder);

    userEvent.type(input, text);
    expect(input).toHaveValue(text);
  });
});
