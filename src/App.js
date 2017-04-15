import React, { Component } from 'react';
import logo from './images/logo.png';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-logo">
          <img src={logo} />
          <h1>commons</h1>
        </div>
        <div className="auth">
          <button>log in with facebook</button>
          <p>or</p>
          <a>Create Account</a>
        </div>
      </div>
    );
  }
}

export default App;
