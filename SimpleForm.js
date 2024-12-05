import React, { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && (
        <p>
          You submitted: <strong>{submittedValue}</strong>
        </p>
      )}
    </div>
  );
};

export default SimpleForm;
