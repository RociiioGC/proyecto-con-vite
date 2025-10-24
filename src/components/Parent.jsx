import { useState } from "react";
import Child from "./Child.jsx";

const Parent = () => {
  const [message, setMessage] = useState("Esperando confirmación...");

  const handleChildClick = () => {
    setMessage("✅ Compra realizada con éxito!");
  };

  return (
    <div style={styles.wrapper}>
      <h2>👨‍👧 Comunicación Padre ↔ Hijo</h2>
      <p style={styles.text}>{message}</p>

      <Child onButtonClick={handleChildClick} />
    </div>
  );
};

export default Parent;

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
};