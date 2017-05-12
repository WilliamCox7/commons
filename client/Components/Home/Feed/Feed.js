import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Presentation from '../Presentation/Presentation';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Presentation />
        <Presentation />
        <Presentation />
        <Presentation />
      </div>
    )
  }
}

export default Home;
