import React, { Component } from 'react';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default App;
