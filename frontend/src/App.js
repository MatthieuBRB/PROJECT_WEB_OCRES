import React from 'react';
import {Link} from 'react-router-dom';
import Routes from './Routes';
import './App.css'; 

// import Main from './container/main/Main';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ol>
        </nav>
        <Routes />
      </header>
    </div>
  );
}

export default App;

// <img className="astronaut" src="/media/Astronaut.png" alt="astronaut" width="450px" height="400px"></img>