import Header from './components/Header.jsx';
import Greeting from './components/Greeting.jsx';
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import UserProfile from './components/UserProfile.jsx';
import { TaskList } from './components/TaskList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Greeting />
      <WelcomeMessage />
      <UserProfile />
      <TaskList />
      <Footer />
    </>
  );
}

export default App;
