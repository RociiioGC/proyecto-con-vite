import LoginStatus from "./componentes/LoginStatus";
import Notificaciones from "./componentes/Notificaciones";

const user = {
  name: "Rocio",
  isLoggedIn: true,
};

const cantidadNotificaciones = 3;

function App() {
  return (
    <div>
      <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn} />
      {/* 🔔 Notificaciones */}
      <Notificaciones cantidad={cantidadNotificaciones} />
    </div>
  );
}

export default App;