import Card from "./Card.jsx";
import { useState } from "react";

const List = ({ title, users, showFilter = true }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [userStates, setUserStates] = useState(
    users.map((user) => ({ ...user }))
  );

  const filteredUsers = filterActive
    ? userStates.filter((user) => user.isActive)
    : userStates;

  const toggleUserActive = (id) => {
    setUserStates((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div style={styles.section}>
      <h2>{title}</h2>

      {showFilter && (
        <button
          onClick={() => setFilterActive(!filterActive)}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#27ae60")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2ecc71")}
        >
          {filterActive ? "Mostrar todos" : "Mostrar usuarios activos"}
        </button>
      )}

      <div style={styles.container}>
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user} toggleActive={() => toggleUserActive(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;

const styles = {
  section: { marginTop: "28px", maxWidth: "1100px", marginInline: "auto" },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "16px",
    alignItems: "stretch",
  },
  button: {
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    transition: "all 0.2s ease-in-out",
    marginBottom: "16px",
  },
};