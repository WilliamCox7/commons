import React, { Component } from 'react';
import logo from '../../../images/white-logo.svg';
import logo_text from '../../../images/white-text.svg';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-logo">
          <img className="logo" src={logo} />
          <img className="text" src={logo_text} />
        </div>
        <div className="auth">
          <a href="/#/home"><button>log in with facebook</button></a>
          <p>or</p>
          <a href="/#/create">Create Account</a>
        </div>
      </div>
    );
  }
}

export default Login;
