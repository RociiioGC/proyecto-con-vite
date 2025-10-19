import Card from "./Card.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const LoginForm = () => (
  <Card>
    <h3 style={{ textAlign: "center", marginBottom: "12px" }}>Login</h3>
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Contraseña" />
    <Button label="Iniciar sesión" variant="primary" />
    <Button label="Cancelar" variant="secondary" />
  </Card>
);

export default LoginForm;