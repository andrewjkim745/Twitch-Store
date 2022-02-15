
import './App.css';
import Games from './components/Games'
import Navbar from './components/Navbar'
import { Router } from './components/Routes'
import { connect } from "react-redux";
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    current: state.getTopGames.currentItem,
  };
};

export default connect(mapStateToProps)(App);