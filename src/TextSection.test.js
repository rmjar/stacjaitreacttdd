import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextSection from './TextSection';

afterEach(cleanup);

describe('TextSection Component', () => {
  it('should correctly render component', () => {
    const { getByTestId, getByText } = render(<TextSection text='Hello from TextSection Component!' />);
    expect(getByTestId('testid')).toHaveTextContent('Hello from TextSection Component!');
    expect(getByText('Hello from TextSection Component!')).toHaveClass('textSection');
  });
});