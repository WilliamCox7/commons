import React, { Component } from 'react';
import { connect } from 'react-redux';
import curl from '../../../images/curl-arrow.png';
import Dial from '../../Dial/Dial';
import SearchHobbies from './SearchHobbies/SearchHobbies';
import Navigation from '../Navigation/Navigation';
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
        {this.props.dial.hobbyCount < 6 ? (
          <div className="hobbie-next">
            <a href="/#/defines"><div className="next-text">skip</div></a>
          </div>
        ) : (
          <div className="hobbie-next">
            <a href="/#/defines"><div className="next-text">next</div></a>
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

export default connect(mapStateToProps)(Hobbies);
