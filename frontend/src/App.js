import React from 'react';
import './App.css';
import Header from './Header.js';
import POTD from './POTD.js';
import Meteo from './Meteo.js';
import Person from './Person.js';

function App() {
  return (
    <div>
      <Header />
      <img className="rocket" src="/media/Rocket.png" alt="rocket" width="250px" height="171px"></img>
      {/*<img className="astronaut" src="/media/Astronaut.png" alt="astronaut" width="450px" height="400px"></img>*/}
      <div className="gradient"></div>
      <POTD />
      <Meteo />
      <Person />
    </div>
  );
}

export default App;
