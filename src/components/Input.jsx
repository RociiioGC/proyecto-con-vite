function Input({ placeholder, type = "text" }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
    );
  }
  
  export default Input;