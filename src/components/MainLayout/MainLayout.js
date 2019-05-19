import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './mainLayout.scss';
import 'nes.css/scss/nes.scss';

import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Pokemon from '../../views/Pokemon';
import SignUp from '../../containers/SignUp';

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
      <div className='pokedex-controls'>Controls</div>
    </div>
    <div className='pokedex-content'>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
    </div>
  </div>
}

export default MainLayout
