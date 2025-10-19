const Button = ({ label = "Enviar", disabled = false, variant = "primary" }) => {
    const colors = {
      primary: "#3b82f6",
      secondary: "#64748b",
      danger: "#ef4444",
      success: "#10b981",
    };
  
    const backgroundColor = disabled ? "#94a3b8" : colors[variant] || colors.primary;
  
    return (
      <button
        disabled={disabled}
        style={{
          backgroundColor,
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          cursor: disabled ? "not-allowed" : "pointer",
          width: "100%",
          marginTop: "8px",
        }}
      >
        {label}
      </button>
    );
  };
  
  export default Button;