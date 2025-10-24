const Card = ({ user, toggleActive }) => {
    const { name, email, country, role, isActive } = user;
  
    const cardStyle = {
      padding: "16px",
      borderRadius: "12px",
      border: `2px solid ${isActive ? "#2ecc71" : "#e74c3c"}`,
      background: isActive ? "rgba(46, 204, 113, 0.06)" : "rgba(231, 76, 60, 0.06)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
      textAlign: "left",
    };
  
    const titleStyle = { marginTop: 0, marginBottom: "8px" };
    const rowStyle = { margin: "6px 0" };
  
    return (
      <div style={cardStyle}>
        <h3 style={titleStyle}>{name}</h3>
        <p style={rowStyle}><strong>Email:</strong> {email}</p>
        <p style={rowStyle}><strong>País:</strong> {country}</p>
        <p style={rowStyle}><strong>Rol:</strong> {role}</p>
        <p style={rowStyle}>
          <strong>Estado:</strong> {isActive ? "Activo" : "Baja"}
          <button onClick = {toggleActive}> </button>
        </p>
      </div>
    );
  };


export default Card 