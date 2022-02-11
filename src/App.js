
import './App.css';
import Games from './components/Games'
import Navbar from './components/Navbar'
import { Router } from './components/Routes'
import { connect } from "react-redux";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    current: state.getTopGames.currentItem,
  };
};

export default connect(mapStateToProps)(App);