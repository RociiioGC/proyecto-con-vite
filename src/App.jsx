
import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/ToDoList.jsx";


function App() {
  return (
    <div style={styles.wrapper}>
      <h1>Ejercicios Clase 05.1</h1>
      <Counter />
      <hr />
      <h1>Formulario de Nombre y Apellido</h1>
      <Form />
      <hr />
      <TodoList />
    </div>
  );
}

const styles = {
  wrapper: { textAlign: "center", padding: "32px 20px" },
};

export default App;