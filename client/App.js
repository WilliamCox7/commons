import React, { Component } from 'react';
import './reset.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default App;