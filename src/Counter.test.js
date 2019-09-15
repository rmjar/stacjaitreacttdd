import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

let wrapper;

afterEach(cleanup);

// beforeEach(() => {
//   wrapper = shallow(<Counter />);
// });

describe('Counter Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(<Counter />);
    // expect(asFragment()).toMatchSnapshot();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should correctly increment', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('testIncrement'));
    // const { asFragment } = render(<Counter />);
    const component = shallow(<Counter />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should correctly increment 2', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('testIncrement'));
    // const { asFragment } = render(<Counter />);
    const component = shallow(<Counter />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should correctly decrement', () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId('testDecrement'));
    // const { asFragment } = render(<Counter />);
    const component = shallow(<Counter />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
