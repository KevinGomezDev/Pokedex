import React from 'react';
import { Link } from 'react-router-dom';

import { validateEmail } from '../utils/validators';
import USERS from '../data/users';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleValidations = (name, value) => {
    if (name === 'email') {
      if(validateEmail(value)) {
        this.setState({ isValidEmail: true });
      } else {
        this.setState({ isValidEmail: false });
      }
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {[name]: value},
      this.handleValidations(name, value),
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const pokemonMaster = USERS.find((user) => user.email === email && user.password === password);
    if(!!pokemonMaster) {
      alert(`Welcome back ${pokemonMaster.name}`);
    } else {
      alert(`Oops, Your user or password is incorrect`);
    }
  }

  render() {
    const { email, password, isValidEmail } = this.state;
    const emailClassName = (isValidEmail !== undefined)
      ? isValidEmail 
        ? 'is-success' 
        : 'is-error' 
      : '';
    return <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="nes-field">
        <label htmlFor="email">Email:</label>
        <input name='email' type="email" className={`nes-input ${emailClassName}`} value={email} onChange={this.handleChange} />
      </div>
      <div className="nes-field">
        <label htmlFor="password">Password:</label>
        <input name='password' type="password" className="nes-input" value={password} onChange={this.handleChange} />
      </div>
      <div className='button-container'>
        <button type="submit" disabled={!isValidEmail} className={`nes-btn ${isValidEmail ? 'is-primary' : 'is-disabled'}`}>Login</button>
        <Link className="nes-btn" to='/sign-up'>Sign-up</Link>
      </div>
      </form>
    </React.Fragment>
  }
}

export default Login;