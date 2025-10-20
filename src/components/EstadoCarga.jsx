const EstadoCarga = ({ loading }) => {
    return (
      <p>
        {loading ? "Cargando..." : "Datos listos ✅"}
      </p>
    );
  };
  
  export default EstadoCarga;