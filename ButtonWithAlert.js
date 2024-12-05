import React from "react";

const ButtonWithAlert = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ButtonWithAlert;
