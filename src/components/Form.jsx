import { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={styles.wrapper}>
      <h2>📋 Formulario</h2>
      <div style={styles.container}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <p style={styles.resultado}>
        👤 {formData.nombre} {formData.apellido}
      </p>
    </div>
  );
};

export default Form;

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "220px",
    fontSize: "16px",
  },
  resultado: {
    fontSize: "18px",
    fontWeight: "500",
  },
};