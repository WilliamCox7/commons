import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {

  render() {
    return (
      <div>
        <div className="back-section">
          <a href={"/#/" + this.props.redirect}><div className="back-arrow">
            <div className="back-arrow-1"></div>
            <div className="back-arrow-2"></div>
          </div></a>
        </div>
        <div className="step-bar">
          <div className="progress" style={{width: this.props.width}}></div>
        </div>
      </div>
    )
  }
}

export default Navigation;
