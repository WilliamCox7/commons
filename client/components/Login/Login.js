import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from "react-router";
import { login } from '../../reducers/userReducer';
import logo from '../../src/logo.svg';
import './Login.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.fbAuth = this.fbAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  componentDidMount() {
    if (this.props.user.isLoggedIn) {
      hashHistory.replace("/");
    }
  }

  fbAuth() {
    this.props.login();
    hashHistory.replace("/");
  }

  createAccount() {
    hashHistory.replace("/create");
  }

  render() {
    return (
      <div className="Login">
        <img src={logo} />
        <button onClick={this.fbAuth}>log in with facebook</button>
        <p>or</p>
        <a onClick={this.createAccount}>Create Account</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
