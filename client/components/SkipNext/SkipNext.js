import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import './SkipNext.scss';

class SkipNext extends Component {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    hashHistory.replace(this.props.redirect);
  }

  render() {
    return (
      <div className="SkipNext">
        {this.props.next ? (
          <p onClick={this.redirect}>next</p>
        ) : (
          <p onClick={this.redirect}>skip</p>
        )}
      </div>
    )
  }
}

export default (SkipNext);
