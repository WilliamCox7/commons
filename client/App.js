import React, { Component } from 'react';
import './reset.scss';
import './main.scss';
import './src/commons-icons/css/commons.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App;
