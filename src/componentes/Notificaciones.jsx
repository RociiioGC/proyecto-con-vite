const Notificaciones = ({cantidad = 0}) => { 
    if (cantidad === 0) return null;
    return (
        <p style={{ textAlign: "center", marginTop: "10px", color: "#1e293b" }}>
          🔔 Tienes {cantidad} notificaciones.
        </p>
      );
};
    
export default LoginStatus;