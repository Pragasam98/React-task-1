import React from "react";

const FavoriteColor = () => {
  const favoriteColor = "Blue"; // My favorite color

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        My favorite color is <span style={styles.color}>{favoriteColor}</span>!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  text: {
    fontSize: "1.5em",
    color: "#333",
  },
  color: {
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default FavoriteColor;
