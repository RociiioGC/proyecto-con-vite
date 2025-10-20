const Notificaciones = ({cantidad = 0}) => { 
    if (cantidad === 0) return null;
    return (
        <p>🔔 Tienes {cantidad} notificaciones.</p>
      );
};
    
export default Notificaciones;