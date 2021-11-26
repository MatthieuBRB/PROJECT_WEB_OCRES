import React from 'react';
import './App.css';
import Header from './Header.js';
// import POTD from './POTD.js';
// import Weather from './Weather.js';
// import Person from './Person.js';
import BuySection from './BuySection.js';

function App() {
  return (
    <div>
      <Header />
      {/*  <img className="rocket" src="/media/Rocket.png" alt="rocket" width="250px" height="171px"></img>
      <div className="gradient"></div>
      <POTD />
      <Weather />
      <Person /> */}
      <BuySection />
    </div>
  );
}

export default App;

// <img className="astronaut" src="/media/Astronaut.png" alt="astronaut" width="450px" height="400px"></img>