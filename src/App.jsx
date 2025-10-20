import LoginStatus from "./components/LoginStatus";
import Notificaciones from "./components/Notificaciones";

const user = {
  name: "Rocio",
  isLoggedIn: true,
};

const cantidadNotificaciones = 4;

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