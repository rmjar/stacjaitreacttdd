import React from 'react';

const Header = props => {
  return (
    <div data-testid='testid' className='header'>
      {props.text}
    </div>
  );
};

export default Header;
