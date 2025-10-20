const Mensajes = ({ hayMensajes = false }) => {
    return (
      <div>
        {hayMensajes && <p>📩 Tienes nuevos mensajes.</p>}
      </div>
    );
  };
  
  export default Mensajes;