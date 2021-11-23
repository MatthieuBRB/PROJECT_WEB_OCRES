import React from 'react';
import './App.css';
import Header from './Header.js';
import POTD from './POTD.js';
import Meteo from './Meteo.js';

function App() {
  return (
    <div>
      <Header />
      <div className="gradient"></div>
      <POTD />
      <Meteo />
    </div>
  );
}

export default App;
