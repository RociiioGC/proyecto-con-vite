import { useState } from "react";

export default function SimpleFormBase() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("frontend"); // ✅ valor inicial válido
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, role, active });
  };

  return (
    <section className="section">
      <h3>5) Formulario simple</h3>
      <form className="grid" onSubmit={handleSubmit}>
        <label className="grid">
          Nombre
          <input
            name="name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresá tu nombre"
          />
        </label>

        <label className="grid">
          Email
          <input
            name="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
          />
        </label>

        <label className="grid">
          Rol
          <select
            name="role"
            className="input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Diseño</option>
          </select>
        </label>

        <label className="label">
          <input
            name="active"
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Activo
        </label>

        <button type="submit" className="button">
          Enviar
        </button>
      </form>

      <div className="result">
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Rol:</strong> {role}</p>
        <p><strong>Activo:</strong> {active ? "Sí" : "No"}</p>
      </div>
    </section>
  );
}