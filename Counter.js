import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state with 0

  const increment = () => setCount(count + 1); // Increment count
  const decrement = () => setCount(count - 1); // Decrement count

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
