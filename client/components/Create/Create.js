import React, { Component } from 'react';
import { connect } from "react-redux";
import { hashHistory } from "react-router";
import logo from '../../src/orange-logo-text.svg';
import { setUser } from '../../reducers/userReducer';
import './Create.scss';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      age: '',
      password: '',
      confirm: '',
      gender: undefined,
      error: undefined
    }
    this.update = this.update.bind(this);
    this.toggleGender = this.toggleGender.bind(this);
    this.createUser = this.createUser.bind(this);
    this.throwError = this.throwError.bind(this);
  }

  update(e) {
    if (e.target.value) {
      e.currentTarget.style.backgroundSize = '0px';
    } else {
      e.currentTarget.style.backgroundSize = '14px';
    }
    var updState = {};
    updState[e.target.name] = e.target.value;
    this.setState(updState);
  }

  toggleGender(male) {
    if (male) {
      this.setState({gender: true});
    } else {
      this.setState({gender: false});
    }
  }

  createUser(e) {
    if (this.state.first) {
      if (this.state.last) {
        if (this.state.email) {
          if (this.state.age) {
            if (this.state.gender !== undefined) {
              if (this.state.password === this.state.confirm &&
              this.state.password && this.state.confirm) {
                this.props.setUser({
                  isLoggedIn: true,
                  isFirstTime: true,
                  first: this.state.first,
                  last: this.state.last,
                  email: this.state.email,
                  age: this.state.age,
                  gender: this.state.gender
                });
                hashHistory.replace("/");
              } else { this.throwError(e, 'password'); }
            } else { this.throwError(e, 'gender'); }
          } else { this.throwError(e, 'age'); }
        } else { this.throwError(e, 'email'); }
      } else { this.throwError(e, 'last name'); }
    } else { this.throwError(e, 'first name'); }
  }

  throwError(e, error) {
    var message;
    if (error === 'password') {
      message = "passwords don't match";
    } else {
      message = 'missing ' + error;
    }
    this.setState({error: message});
    e.target.children[0].style.display = 'block';
  }

  render() {

    var options = [
      <option key={9}></option>
    ];
    for (var i = 10; i < 70; i++) {
      options.push(<option key={i}>{i}</option>);
    }

    return (
      <div className="Create">
        <img src={logo} />
        <div className="create-input">
          <h1>first name</h1>
          <input name="first" onChange={this.update} type="text" />
        </div>
        <div className="create-input">
          <h1>last name</h1>
          <input name="last" onChange={this.update} type="text" />
        </div>
        <div className="create-input">
          <h1>email</h1>
          <input name="email" onChange={this.update} type="text" />
        </div>
        <div className="create-other-input">
          <span>
            <h1>age</h1>
            <select name="age" onChange={this.update}>{options}</select>
          </span>
          <span>
            {this.state.gender && this.state.gender !== undefined ? (
              <i onClick={() => {this.toggleGender(true);}}
                className="fa fa-male" id="selected" aria-hidden="true"></i>
            ) : (
              <i onClick={() => {this.toggleGender(true);}}
                className="fa fa-male" aria-hidden="true"></i>
            )}
            {!this.state.gender && this.state.gender !== undefined ? (
              <i onClick={() => {this.toggleGender(false);}}
                className="fa fa-female" id="selected" aria-hidden="true"></i>
            ) : (
              <i onClick={() => {this.toggleGender(false);}}
                className="fa fa-female" aria-hidden="true"></i>
            )}
          </span>
        </div>
        <div className="create-input">
          <h1>password</h1>
          <input name="password" onChange={this.update} type="password" />
        </div>
        <div className="create-input">
          <h1>confirm password</h1>
          <input name="confirm" onChange={this.update} type="password" />
        </div>
        <button onClick={this.createUser}>
          continue
          <span className="error-msg">{this.state.error}</span>
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setUser: setUser
}

export default connect(null, mapDispatchToProps)(Create);
