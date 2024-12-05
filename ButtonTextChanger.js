import React, { useState } from "react";

const ButtonTextChanger = () => {
  const [text, setText] = useState("This is the initial text.");

  const changeText = () => {
    setText("The text has been changed!");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default ButtonTextChanger;
