import React, { Component } from 'react';
import { connect } from 'react-redux';
import curl from '../../../../images/curl-arrow.png';
import Dial from '../Dial';
import Search from '../Search/Search';
import Navigation from '../../Navigation/Navigation';
import Next from '../../Next/Next';
import axios from 'axios';
import '../HobbyDefine.scss';

class Hobbies extends Component {
  render() {
    return (
      <div className="hobby-defines">
        <Navigation redirect={"welcome"} width={"25%"} />
        <div className="header-text">
          <h1>choose five hobbies</h1>
        </div>
        <div className="hobby-define-dial">
          <img src={curl} />
          <Dial type={'hobbies'} />
        </div>
        <Search opt={'hobbies'} />
        <Next condition={this.props.walkthrough.hobbyCount < 6} redirect={'defines'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walkthrough: state.walkthrough
  }
}

export default connect(mapStateToProps)(Hobbies);