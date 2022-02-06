
import './App.css';
import Games from './components/Games'
import Navbar from './components/Navbar'
import { Router } from './components/Routes'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
