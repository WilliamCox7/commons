import React, { Component } from 'react';
import { hashHistory } from "react-router";
import backArrow from '../../src/back-arrow.svg';
import './ProgressBar.scss';

class ProgressBar extends Component {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    hashHistory.replace(this.props.redirect);
  }

  render() {
    return (
      <div className="ProgressBar">
        <img onClick={this.redirect} src={backArrow} />
        <div className="progress-bar">
          <div className="progress" style={{width: this.props.width}}></div>
        </div>
        <h1>{this.props.progressText}</h1>
      </div>
    )
  }
}

export default (ProgressBar);
