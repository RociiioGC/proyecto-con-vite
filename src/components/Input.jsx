const Input = ({ type = "text", placeholder = "Escribí algo..." }) => (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        width: "100%",
        marginBottom: "8px",
        boxSizing: "border-box"
      }}
    />
  );
  
  export default Input;