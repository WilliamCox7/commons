import React, { Component } from 'react';
import heart from '../../../images/heart.svg';
import './Presentation.scss';

class Presentation extends Component {
  render() {
    return (
      <div>
        <div className="presentation">
          <div className="pres-text">
            <div className="pres-name">{this.props.info.name}</div>
            <div className="pres-info">{this.props.info.age + ' | ' + this.props.info.loc + ' | ' + this.props.info.personality}</div>
          </div>
          <img className="pres-pic" src={this.props.info.pic} />
        </div>
        <div className="pres-media">
          <video loop><source src={this.props.info.media} type="video/mp4"/></video>
          <img className="heart" src={heart} />
        </div>
      </div>
    )
  }
}

export default Presentation;
