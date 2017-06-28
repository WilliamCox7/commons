import React, { Component } from 'react';
import FeedFilter from '../FeedFilter/FeedFilter';
import HomeButton from '../../src/home-button.svg';
import ProfileButton from '../../src/profile-nav.svg';
import { hashHistory } from 'react-router';
import './MainNav.scss';

class MainNav extends Component {

  constructor(props) {
    super(props);
    this.gotoFeed = this.gotoFeed.bind(this);
    this.gotoProfile = this.gotoProfile.bind(this);
  }

  gotoFeed() {
    hashHistory.replace('/feed');
  }

  gotoProfile() {
    hashHistory.replace('/profile');
  }

  render() {
    var loc = hashHistory.getCurrentLocation().pathname;
    return (
      <div className="MainNav">
        {loc === '/feed' ? (
          <i className="icon-home-button active"></i>
        ) : (
          <i onClick={this.gotoFeed} className="icon-home-button"></i>
        )}
        <FeedFilter />
        {loc === '/profile' ? (
          <i className="icon-profile-nav active"></i>
        ) : (
          <i onClick={this.gotoProfile} className="icon-profile-nav"></i>
        )}
      </div>
    )
  }
}

export default (MainNav);
