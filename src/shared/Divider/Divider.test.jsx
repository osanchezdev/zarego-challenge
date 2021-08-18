import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Divider from './Divider';

describe('Divider component snapshot', () => {
  it('should render component', () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Divider component funtional tests', () => {
  it('should not render text, only separator line', () => {
    const dividerText = 'This is a test';
    render(<Divider />);

    const separatorLine = screen.getByRole('separator');
    const text = screen.queryByText(dividerText);
    expect(text).not.toBeInTheDocument();
    expect(separatorLine).toBeInTheDocument();
  });

  it('should render text', () => {
    const dividerText = 'This is a test';
    render(<Divider text={dividerText} />);

    const text = screen.queryByText(dividerText);
    expect(text).toBeInTheDocument();
  });
});
