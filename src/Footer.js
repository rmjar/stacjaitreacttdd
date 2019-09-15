import React from 'react';

const Footer = props => {
  return (
    <div data-testid='testid' className='footer'>
      {props.text}
    </div>
  );
};

export default Footer;
