import React from 'react';
import { Link } from 'react-router-dom';

import { validateEmail } from '../utils/validators';
import USERS from '../data/users';

class SignUp extends React.Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleValidations = (name, value) => {
    if (name === 'email') {
      if(validateEmail(value)) {
        this.setState({ isValidEmail: true });
      } else {
        this.setState({ isValidEmail: false });
      }
    }
    if (name === 'confirmPassword') {
      if(value === this.state.password) {
        this.setState({ isSamePassword: true });
      } else {
        this.setState({ isSamePassword: false });
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
    const { email } = this.state;
    const pokemonMaster = USERS.find((user) => user.email === email);
    if(!!pokemonMaster) {
      alert(`Your email is already registered`);
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    const { fullName, email, password, confirmPassword, isValidEmail, isSamePassword } = this.state;
    const emailClassName = (isValidEmail !== undefined)
      ? isValidEmail 
        ? 'is-success' 
        : 'is-error' 
      : '';
      const passwordClassName = (isSamePassword !== undefined)
      ? isSamePassword 
        ? 'is-success' 
        : 'is-error' 
      : '';
    return <div>
      <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="nes-field">
        <label htmlFor="fullName">Name:</label>
        <input name='fullName' type="text" className="nes-input" value={fullName} onChange={this.handleChange} />
      </div>
      <div className="nes-field">
        <label htmlFor="email">Email:</label>
        <input name='email' type="email" className={`nes-input ${emailClassName}`} value={email} onChange={this.handleChange} />
      </div>
      <div className="nes-field">
        <label htmlFor="password">Password:</label>
        <input name='password' type="password" className={`nes-input ${passwordClassName}`} value={password} onChange={this.handleChange} />
      </div>
      <div className="nes-field">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input name='confirmPassword' type="password" className={`nes-input ${passwordClassName}`} value={confirmPassword} onChange={this.handleChange} />
      </div>
      <div className='button-container'>
        <button type="submit" disabled={!isValidEmail} className={`nes-btn ${isValidEmail ? 'is-primary' : 'is-disabled'}`}>Confirm</button>
        <Link className="nes-btn" to='/login'>Cancel</Link>
      </div>
      </form>
    </div>
  }
}

export default SignUp;