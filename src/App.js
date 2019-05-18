import React from 'react';
import './App.css';
import 'nes.css/scss/nes.scss';
import Login from './views/Login'
import SignUp from './views/SignUp'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return <Router> 
    <div className='pokedex'>
      <div className='pokedex-frame'>
        <div className='pokedex-menu'>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign-Up</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
        </ul>
        </div>
        <div className='pokedex-controls'>Controls</div>
      </div>
      <div className='pokedex-content'>
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </div>
  </div>
  </Router>
}

export default App;
