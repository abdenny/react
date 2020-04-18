import React, { useState } from 'react';

function UseState() {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  return (
    <div>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
            count2: currentState.count2 + 1,
          }))
        }
      >
        plus 1
      </button>
      <div>{count}</div>
      <div>{count2}</div>
    </div>
  );
}

export default UseState;
