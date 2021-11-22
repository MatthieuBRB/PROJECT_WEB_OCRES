import React from 'react';
import './App.css';
import Header from './Header.js';
import POTD from './POTD.js';

function App() {
  return (
    <div>
      <Header />
      <div className="gradient"></div>
      <POTD />
    </div>
  );
}

export default App;
