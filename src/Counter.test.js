import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

afterEach(cleanup);

describe('Counter Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should correctly increment', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('testIncrement'));
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should correctly decrement', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('testDecrement'));
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
