import React from 'react';
import { NavLink } from 'react-router-dom';

import Routes from '../../Routes/routes';

import './mainLayout.scss';
import 'nes.css/scss/nes.scss';
import control from '../../assets/game-control.png';

function MainLayout () {
  return <div className='pokedex'>
    <div className='pokedex-frame'>
      <div className='pokedex-menu'>
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/sign-up">Sign-Up</NavLink></li>
      </ul>
      </div>
      <div className='pokedex-controls'>
        {/*TODO: Draw gameboy controls with css :D!*/}
        <img alt='Control' src={control} style={{ width: '300px' }} />
      </div>
    </div>
    <div className='pokedex-content'>
      <Routes />
    </div>
  </div>
}

export default MainLayout
