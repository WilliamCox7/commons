import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input id="placeholderImg" type="text" placeholder="search" />
      </div>
    )
  }
}

export default Search;
