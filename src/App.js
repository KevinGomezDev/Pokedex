import React from 'react';
import './App.css';
import 'nes.css/scss/nes.scss';
import Login from './views/Login'

function App() {
  return <div className='pokedex'>
      <div className='pokedex-frame'>
        <div className='pokedex-menu'>Menu</div>
        <div className='pokedex-controls'>Controls</div>
      </div>
      <div className='pokedex-content'>
        <Login />
      </div>
  </div>
}

export default App;
