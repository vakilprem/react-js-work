import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default Counter;
