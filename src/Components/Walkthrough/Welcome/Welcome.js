import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="above-welcome">
          <h1>W E L C O M E</h1>
          <a href="/#/hobbies"><button>let's get started</button></a>
        </div>
      </div>
    );
  }
}

export default Welcome;
