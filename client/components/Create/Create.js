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
      first: this.props.user.first,
      last: this.props.user.last,
      email: this.props.user.email,
      age: this.props.user.age,
      password: '',
      confirm: '',
      gender: this.props.user.gender,
      error: undefined
    }
    this.update = this.update.bind(this);
    this.toggleGender = this.toggleGender.bind(this);
    this.createUser = this.createUser.bind(this);
    this.throwError = this.throwError.bind(this);
  }

  componentDidMount() {
    var create = document.getElementsByClassName('Create')[0];
    var inputDivs = create.getElementsByClassName('create-input');
    for (var i = 0; i < 5; i++) {
      var input = inputDivs[i].children[1];
      if (input.getAttribute("type") === "text") {
        if (input.value) {
          input.style.backgroundSize = '0px'
        }
      }
    }
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
              if (this.props.dontshow) {
                this.props.setUser({
                  isLoggedIn: true,
                  isFirstTime: true,
                  first: this.state.first,
                  last: this.state.last,
                  email: this.state.email,
                  age: this.state.age,
                  gender: this.state.gender
                });
              } else {
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
              }
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
      <div className="Create" style={this.props.dontshow ? ({
        minHeight: '500px', padding: '0px 50px'
      }) : ({
        minHeight: '580px', padding: '30px 50px'
      })}>
        {this.props.dontshow ? (null) : (
          <img src={logo} />
        )}
        <div className="create-input">
          <h1>first name</h1>
          <input name="first" onChange={this.update} type="text"
            value={this.state.first} />
        </div>
        <div className="create-input">
          <h1>last name</h1>
          <input name="last" onChange={this.update} type="text"
            value={this.state.last} />
        </div>
        <div className="create-input">
          <h1>email</h1>
          <input name="email" onChange={this.update} type="text"
            value={this.state.email} />
        </div>
        <div className="create-other-input">
          <span>
            <h1>age</h1>
            <select name="age" onChange={this.update}
              value={this.state.age}>{options}</select>
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
          <h1>{this.props.dontshow ? "new " : null}password</h1>
          <input name="password" onChange={this.update} type="password" />
        </div>
        <div className="create-input">
          <h1>confirm password</h1>
          <input name="confirm" onChange={this.update} type="password" />
        </div>
        <button id="create-user-btn" onClick={this.createUser}
          style={this.props.dontshow ? ({
            display: 'none'
          }) : (null)}>
          continue
          <span className="error-msg">{this.state.error}</span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser: setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
