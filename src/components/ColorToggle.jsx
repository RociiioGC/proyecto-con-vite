import { useState } from "react";

const ColorToggle = () => {
  const [isColored, setIsColored] = useState(false);

  const handleToggle = () => {
    setIsColored(!isColored);
  };

  return (
    <div style={styles.wrapper}>
      <h2>🎨 Cambiar color de texto</h2>
      <p
        style={{
          ...styles.text,
          color: isColored ? "#e74c3c" : "#2c3e50",
        }}
      >
        HOLA
      </p>

      <button onClick={handleToggle} style={styles.btn}>
        Cambiar color
      </button>
    </div>
  );
};

export default ColorToggle;

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  text: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  },
  btn: {
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: "600",
  },
};