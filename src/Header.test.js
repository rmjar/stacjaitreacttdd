import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

describe('Header Component', () => {
  it('should correctly render component', () => {
    const { getByTestId, getByText } = render(<Header text='Hello from Header Component!' />);
    expect(getByTestId('testid')).toHaveTextContent('Hello from Header Component!');
    expect(getByText('Hello from Header Component!')).toHaveClass('header');
  });
});
