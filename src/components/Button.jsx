function Button({ label = "Enviar", disabled = false, variant = "primary" }) {
    const colors = {
      primary: "#007bff",
      secondary: "#6c757d",
      danger: "#dc3545",
    };
  
    const background = disabled ? "#ccc" : colors[variant] || colors.primary;
  
    return (
      <button
        disabled={disabled}
        style={{
          backgroundColor: background,
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          width: "100%",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {label}
      </button>
    );
  }
  
  export default Button;