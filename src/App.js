import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';

import './App.css';
import 'nes.css/scss/nes.scss';

import Home from './containers/Home';
import Login from './views/Login';
import Pokemon from './views/Pokemon';
import SignUp from './views/SignUp';

const store = configureStore(initialState);

function App() {
  return  <Provider store={store}>
    <Router> 
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
  </Router>
  </Provider>
}

export default App;
