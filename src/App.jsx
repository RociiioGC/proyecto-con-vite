import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";

const App = () => {
  return (
    <div style={{ backgroundColor: "#f1f5f9", minHeight: "100vh", padding: "20px" }}>
      <Header />

      <main style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Proyecto React - Ejercicios 1 a 5</h2>

        <LoginForm />

        <Card>
          <h4>Lista del día ☀️</h4>
          <ul style={{ textAlign: "left" }}>
           <li>Preparar el mate</li>
           <li>Hacer algo de ejercicio</li>
           <li>Avanzar con el curso de React 💻</li>
          </ul>
          <Button label="Hecho!" variant="success" disabled />
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default App;