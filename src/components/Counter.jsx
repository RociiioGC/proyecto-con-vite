import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.wrapper}>
      <h2>🧮 Counter</h2>
      <div style={styles.container}>
        <button onClick={() => setCount(count - 1)} style={styles.btn}>
          –
        </button>
        <span style={styles.number}>{count}</span>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  number: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "all 0.2s ease",
  },
};