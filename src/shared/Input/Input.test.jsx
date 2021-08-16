import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('Input component', () => {
  const testObj = {
    labelText: 'labelTest',
    errorMsg: 'Value is required',
    placeholder: 'Example',
    text: 'input test',
    prefix: '$',
  };

  it('should render component', () => {
    const tree = renderer.create(<Input label={testObj.labelText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render input label', () => {
    render(<Input label={testObj.labelText} />);
    const label = screen.getByLabelText(testObj.labelText);
    expect(label).toBeInTheDocument();
  });

  it('should have input placeholder', () => {
    render(
      <Input label={testObj.labelText} placeholder={testObj.placeholder} />
    );
    const input = screen.getByPlaceholderText(testObj.placeholder);
    expect(input).toBeInTheDocument();
  });

  it('should not render input label', () => {
    render(<Input label={testObj.labelText} showLabel={false} />);
    const label = screen.queryByLabelText(testObj.labelText);
    expect(label).not.toBeInTheDocument();
  });

  it('should render input error message', () => {
    render(
      <Input label={testObj.labelText} error errorMsg={testObj.errorMsg} />
    );
    const error = screen.getByText(testObj.errorMsg);
    expect(error).toBeInTheDocument();
  });

  it('should not render input error message', () => {
    render(<Input label={testObj.labelText} errorMsg={testObj.errorMsg} />);
    const error = screen.queryByText(testObj.errorMsg);
    expect(error).not.toBeInTheDocument();
  });

  it('should render input prefix text', () => {
    render(<Input label={testObj.labelText} prefixText={testObj.prefix} />);
    const prefixText = screen.getByText(testObj.prefix);
    expect(prefixText).toBeInTheDocument();
  });

  it('should not render input prefix text', () => {
    render(<Input label={testObj.labelText} />);
    const prefixText = screen.queryByText(testObj.prefix);
    expect(prefixText).not.toBeInTheDocument();
  });

  it('should fire onBlur event', () => {
    const onBlur = jest.fn();
    render(
      <Input
        label={testObj.labelText}
        placeholder={testObj.placeholder}
        onBlur={onBlur}
      />
    );
    const input = screen.getByPlaceholderText(testObj.placeholder);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should fire onChange event', () => {
    const onChange = jest.fn();
    render(
      <Input
        label={testObj.labelText}
        placeholder={testObj.placeholder}
        onChange={onChange}
      />
    );
    const input = screen.getByPlaceholderText(testObj.placeholder);

    userEvent.type(input, 'A');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should have typed value', () => {
    const onChange = jest.fn();
    render(
      <Input
        label={testObj.labelText}
        placeholder={testObj.placeholder}
        onChange={onChange}
      />
    );
    const input = screen.getByPlaceholderText(testObj.placeholder);

    userEvent.type(input, testObj.text);
    expect(input).toHaveValue(testObj.text);
  });
});
