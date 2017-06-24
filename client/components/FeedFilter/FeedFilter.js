import React, { Component } from 'react';
import './FeedFilter.scss';

class FeedFilter extends Component {

  render() {
    return (
      <div className="FeedFilter">
        <input type="text" placeholder="search" />
      </div>
    )
  }
}

export default (FeedFilter);
