import React, { Component } from 'react';
import { connect } from 'react-redux';
import curl from '../../../images/curl-arrow.png';
import Dial from '../Dial/Dial';
import SearchHobbies from './SearchHobbies/SearchHobbies';
import Navigation from '../Navigation/Navigation';
import Next from '../Next/Next';
import axios from 'axios';
import './Hobbies.scss';

class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies">
        <Navigation redirect={"welcome"} width={"25%"} />
        <div className="header-text">
          <h1>choose five hobbies</h1>
        </div>
        <div className="hobbie-dial">
          <img src={curl} />
          <Dial type={'hobbies'} />
        </div>
        <SearchHobbies />
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
