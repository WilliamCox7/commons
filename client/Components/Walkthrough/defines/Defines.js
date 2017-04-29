import React, { Component } from 'react';
import { connect } from 'react-redux';
import curl from '../../../images/curl-arrow.png';
import Dial from '../../Dial/Dial';
import SearchDefines from './SearchDefines/SearchDefines';
import Navigation from '../Navigation/Navigation';
import axios from 'axios';
import './Defines.scss';

class Defines extends Component {
  render() {
    return (
      <div className="defines">
        <Navigation redirect={"hobbies"} width={"50%"} />
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
