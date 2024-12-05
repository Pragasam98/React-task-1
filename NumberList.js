import React from "react";

const NumberList = () => {
  const numbers = [5, 10, 15, 20, 25];

  return (
    <div>
      <h2>Number List</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
