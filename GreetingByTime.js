import React from "react";

const GreetingByTime = () => {
  const currentHour = new Date().getHours(); // Get the current hour (0-23)
  const greeting = currentHour < 12 ? "Good Morning" : "Good Evening";

  return (
    <div>
      <h1>{greeting}!</h1>
    </div>
  );
};

export default GreetingByTime;
