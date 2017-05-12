import React, { Component } from 'react';
import norman from '../../../images/match-girl-1.jpg';
import './Presentation.scss';

class Presentation extends Component {
  render() {
    return (
      <div>
        <div className="presentation">
          <div className="pres-text">
            <div className="pres-name">Norman Toth</div>
            <div className="pres-info">25 | Cedar City, UT | INFJ</div>
          </div>
          <div className="pres-pic"></div>
        </div>
        <div className="pres-media">
          <img src={norman} />
        </div>
      </div>
    )
  }
}

export default Presentation;
