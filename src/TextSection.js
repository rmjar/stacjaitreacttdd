import React from 'react';

const TextSection = props => {
  return (
    <div data-testid='testid' className='textSection'>
      {props.text}
    </div>
  );
};

export default TextSection;
