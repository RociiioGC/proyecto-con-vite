import { useState } from "react";

const ToDoList = () => {
 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return; 
    setTasks([...tasks, newTask]); 
    setNewTask("");
  };

  return (
    <div style={styles.wrapper}>
      <h2>📝 Lista de Tareas</h2>

     
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Escribí una tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.btn}>
          Agregar
        </button>
      </form>


      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.item}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "40px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "220px",
    fontSize: "16px",
  },
  btn: {
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
    fontWeight: "600",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    background: "#f6f6f6",
    padding: "8px 12px",
    borderRadius: "6px",
    marginBottom: "8px",
    display: "inline-block",
    width: "250px",
  },
};