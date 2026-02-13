import { useState } from 'react';
import halibut from './halibut.jpg'
import './App.css';

function App() {

  const [okon,setOkon] = useState(false)
  const [halibut1,setHalibut1] = useState(false)

const pojawienie = () => {
    setHalibut1(true);
  };

  return (
    <div className="App">
      <h1>Ryby</h1>

      <div className='halibut'>
          <img src={halibut} alt="najedź na mnie"/>
      </div>

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Informacje:</h1>
      <button onClick={pojawienie}>Pokaż</button>
  
      {halibut1 && <p>Halibut (Hippoglossus hippoglossus) – duża ryba dorszowata, mięsiste białe mięso idealne do pieczenia i grillowania.
</p>}
    </div>

    </div>
  );
}

export default App;
