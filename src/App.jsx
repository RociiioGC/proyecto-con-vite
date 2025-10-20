import LoginStatus from "./components/LoginStatus";
import Notificaciones from "./components/Notificaciones";
import EstadoCarga from "./components/EstadoCarga";
import Mensajes from "./components/Mensajes";


const user = {
  name: "Rocio",
  isLoggedIn: true,
};

const cantidadNotificaciones = 4;
const hayMensajes = true;

function App() {
  return (
    <div>
      <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn} />
      <Notificaciones cantidad={cantidadNotificaciones} />
      <EstadoCarga loading={true} />
      <Mensajes hayMensajes={hayMensajes} />
    </div>
  );
}

export default App;