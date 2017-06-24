import React, { Component } from 'react';
import FeedFilter from '../FeedFilter/FeedFilter';
import HomeButton from '../../src/home-button.svg';
import ProfileButton from '../../src/profile-nav.svg';
import { hashHistory } from 'react-router';
import './MainNav.scss';

class MainNav extends Component {

  render() {
    var loc = hashHistory.getCurrentLocation().pathname;
    return (
      <div className="MainNav">
        {loc === '/feed' ? (
          <i className="icon-home-button active"></i>
        ) : (
          <i className="icon-home-button"></i>
        )}
        <FeedFilter />
        {loc === '/profile' ? (
          <i className="icon-profile-nav active"></i>
        ) : (
          <i className="icon-profile-nav"></i>
        )}
      </div>
    )
  }
}

export default (MainNav);
