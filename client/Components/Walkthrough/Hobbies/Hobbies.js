import React, { Component } from 'react';
import curl from '../../../images/curl-arrow.png';
import Dial from '../../Dial/Dial';
import SearchHobbies from '../../SearchHobbies/SearchHobbies';
import axios from 'axios';
import './Hobbies.scss';

class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies">
        <div className="back-section">
          <a href="/#/welcome"><div className="back-arrow">
            <div className="back-arrow-1"></div>
            <div className="back-arrow-2"></div>
          </div></a>
        </div>
        <div className="step-bar">
          <div className="progress-hobbies"></div>
        </div>
        <div className="header-text">
          <h1>choose five hobbies</h1>
        </div>
        <div className="hobbie-dial">
          <img src={curl} />
          <Dial />
        </div>
        <SearchHobbies />
      </div>
    );
  }
}

export default Hobbies;
