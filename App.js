import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [czas, setCzas] = useState(new Date());
const [tekst, setTekst] = useState();

  const [count,setCount]= useState(0);
  useEffect(() => {
    console.log(`Licznik zmienił się na: ${count}`);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCzas(new Date());
    }, 1000);
  }, []);

  const urodzenie = new Date(2008,0,6);
  const dni = Math.ceil((czas-urodzenie) / (1000 * 60 * 60 * 24 ));

  return (
    <div className="App">
      <h2>Wartość licznika: {count}</h2>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Zwiększ licznik</button><br/><br/><br/><br/>
      <h3>{czas.toLocaleString()}</h3><br/>
      <h4>{czas.toString()}</h4>
      <h4>{czas.toDateString()}</h4>
      <h4>{czas.toTimeString()}</h4>
      <br/><br/>
      <h3>{czas.toLocaleString("en-US",
      { weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })};
      </h3>

      <h3>{czas.toLocaleString("pl-PL",
      { weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })};
      </h3><br/>
      <h1>
        Żyje: {dni} dni
      </h1>
      <h3><br/>
        <input type="text" onChange={(e) => setTekst(e.target.value)}></input><br/>
        {tekst}
      </h3>
    </div>
  );
}

export default App;
