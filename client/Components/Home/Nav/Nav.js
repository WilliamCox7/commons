import React, { Component } from 'react';
import feed from '../../../images/feed.png';
import Search from '../Search/Search';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={feed} />
        <Search />
        <div className="nav-profile"></div>
      </div>
    )
  }
}

export default Nav;
