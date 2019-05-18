import React from 'react';
import './App.css';
import 'nes.css/scss/nes.scss';

function App() {
  return (
    <div className='pokedex'>
      <div className='pokedex-frame'>
        <div className='pokedex-menu'>Menu</div>
        <div className='pokedex-controls'>Controls</div>
      </div>
      <div className='pokedex-content'>Content</div>
    </div>
  );
}

export default App;
