import Card from "./Card.jsx";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

function LoginForm() {
  return (
    <Card>
      <h2>Login</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Contraseña" />
      <Button label="Iniciar sesión" variant="primary" />
    </Card>
  );
}

export default LoginForm;