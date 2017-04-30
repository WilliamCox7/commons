import React, { Component } from 'react';
import { connect } from 'react-redux';
import curl from '../../../images/curl-arrow.png';
import Dial from '../Dial/Dial';
import SearchDefines from './SearchDefines/SearchDefines';
import Navigation from '../Navigation/Navigation';
import Next from '../Next/Next';
import axios from 'axios';
import '../Dial/HobbyDefine.scss';

class Defines extends Component {
  render() {
    return (
      <div className="hobby-defines">
        <Navigation redirect={"hobbies"} width={"50%"} />
        <div className="header-text">
          <h1>choose five things that define you</h1>
        </div>
        <div className="hobby-define-dial">
          <img src={curl} />
          <Dial type={'defines'} />
        </div>
        <SearchDefines />
        <Next condition={this.props.walkthrough.defineCount < 6} redirect={'activity'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walkthrough: state.walkthrough
  }
}

export default connect(mapStateToProps)(Defines);
