import { users } from "./utils/data.js";
import List from "./components/List.jsx";
import { useState } from "react";

let counter = 0;

function App() {
  const [count, setCount] = useState(10);
  const activeUsers = users.filter((user) => user.isActive);

  return (
    <div style={styles.wrapper}>
      <h1>Gestión de Usuarios</h1>

      <List title="Todos los usuarios" users={users} showFilter />
    </div>
  );
}

const styles = {
  wrapper: { padding: "32px 20px", textAlign: "center" },
  filterBtn: {
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "10px",
  },
};

export default App;