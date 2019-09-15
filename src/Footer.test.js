import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

afterEach(cleanup);

describe('Footer Component', () => {
  it('should correctly render component', () => {
    const { getByTestId, getByText } = render(<Footer text='Hello from Footer Component!' />);
    expect(getByTestId('testid')).toHaveTextContent('Hello from Footer Component!');
    expect(getByText('Hello from Footer Component!')).toHaveClass('footer');
  });
});
