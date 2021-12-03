import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import logo from './media/Logo.png';

function App() {
  return (
    <div>
      <header>
        <div className="title">
          <img className="logo" src={logo} alt="logo" width="48px" height="48px"></img>
          <h1 className="name">ExoProperty</h1>
        </div>
        <nav>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/admin">Admin</Link></span>
        </nav>
      </header>
      <Routes />
    </div>
  );
}

export default App;