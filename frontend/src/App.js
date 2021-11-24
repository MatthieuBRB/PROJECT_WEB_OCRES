import React from 'react';
import './App.css';
import Header from './Header.js';
import POTD from './POTD.js';
import Meteo from './Meteo.js';

function App() {
  return (
    <div>
      <Header />
      <img className="rocket" src="/media/Rocket.png" alt="rocket" width="250px" height="171px"></img>
      <div className="gradient"></div>
      <POTD />
      <Meteo />
    </div>
  );
}

export default App;
