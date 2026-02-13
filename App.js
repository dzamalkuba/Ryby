import './App.css';
import okon from './okoń.jpg'
import sandacz from './sandacz.jpg'
import halibut from './halibut.jpg'
import tunczyk from './tunczyk.png'
import wegorz from './wegorz.jpg'
import mintaj from './mintaj.jpg'

function App() {
  return (
    <div className="App">
      <h1>Ryby</h1>
      <h2>Okoń</h2>
      <div className="okon">
      <img src={okon} alt="najedź na mnie1">
    </div>
    <h3>Sandacz</h3>
     <div className="sandacz">
      <img src={okon} alt="najedź na mnie2">
    </div>
    <h4>Węgorz</h4>
     <div className="wegorz">
      <img src={okon} alt="najedź na mnie3">
    </div>
    <h5>Mintaj</h5>
     <div className="mintaj">
      <img src={okon} alt="najedź na mnie4">
    </div>
    <h6>Halibut</h6>
     <div className="halibut">
      <img src={okon} alt="najedź na mnie5">
    </div>
    <h7>Tuńczyk</h7>
     <div className="tunczyk">
      <img src={okon} alt="najedź na mnie6">
    </div>
    </div>
  );
}

export default App;
