import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';
import 'nes.css/scss/nes.scss';

import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';

function App() {
  return <Router> 
    <div className='pokedex'>
      <div className='pokedex-frame'>
        <div className='pokedex-menu'>
          <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign-Up</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon">Pokemon</NavLink>
          </li>
        </ul>
        </div>
        <div className='pokedex-controls'>Controls</div>
      </div>
      <div className='pokedex-content'>
      <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </div>
  </div>
  </Router>
}

export default App;
