import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const change = value => {
    setCount(count + value);
  };

  return (
    <div data-testid='testid' className='counter'>
      <div data-testid='countervalue' className='count'>
        {count}
      </div>
      <button
        onClick={() => change(10)}
        id='btnIncrease'
        data-testid='testIncrement'
      >
        +
      </button>
      <button
        onClick={() => change(-10)}
        id='btnDecrease'
        data-testid='testDecrement'
      >
        -
      </button>
    </div>
  );
}

export default Counter;
