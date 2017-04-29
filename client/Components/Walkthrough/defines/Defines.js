import React, { Component } from 'react';
import { connect } from 'react-redux';
import curl from '../../../images/curl-arrow.png';
import Dial from '../../Dial/Dial';
import SearchDefines from './SearchDefines/SearchDefines';
import axios from 'axios';
import './Defines.scss';

class Defines extends Component {
  render() {
    return (
      <div className="defines">
        <div className="back-section">
          <a href="/#/welcome"><div className="back-arrow">
            <div className="back-arrow-1"></div>
            <div className="back-arrow-2"></div>
          </div></a>
        </div>
        <div className="step-bar">
          <div className="progress-defines"></div>
        </div>
        <div className="header-text">
          <h1>choose five things that define you</h1>
        </div>
        <div className="define-dial">
          <img src={curl} />
          <Dial type={'defines'} />
        </div>
        <SearchDefines />
        {this.props.dial.defineCount < 6 ? (
          <div className="define-next">
            <a href="/#/activity"><div className="next-text">skip</div></a>
          </div>
        ) : (
          <div className="define-next">
            <a href="/#/activity"><div className="next-text">next</div></a>
          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dial: state.dial
  }
}

export default connect(mapStateToProps)(Defines);
