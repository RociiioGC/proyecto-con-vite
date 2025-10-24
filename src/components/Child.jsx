const Child = ({ onButtonClick }) => {
    return (
      <div style={styles.wrapper}>
        <button onClick={onButtonClick} style={styles.btn}>
         Realizar compra 🛍️
        </button>
      </div>
    );
  };
  
  export default Child;
  
  const styles = {
    wrapper: {
      textAlign: "center",
      background: "#f9f9f9",
      padding: "20px",
      borderRadius: "12px",
      width: "300px",
      margin: "0 auto",
    },
    btn: {
      backgroundColor: "#2ecc71",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "10px 16px",
      cursor: "pointer",
      fontWeight: "600",
      marginTop: "10px",
    },
  };