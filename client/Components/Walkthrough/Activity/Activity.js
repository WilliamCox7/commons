import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../../../redux/dialReducer';
import axios from 'axios';
import './Activity.scss';

class Activity extends Component {

  constructor(props) {
    super(props);
    this.setActivity = this.setActivity.bind(this);
  }

  setActivity(e) {
    this.props.setActivity(e.target.value);
  }

  render() {
    console.log(this.props.dial);
    return (
      <div className="activity">
        <div className="back-section">
          <a href="/#/defines"><div className="back-arrow">
            <div className="back-arrow-1"></div>
            <div className="back-arrow-2"></div>
          </div></a>
        </div>
        <div className="step-bar">
          <div className="progress-activity"></div>
        </div>
        <div className="header-text">
          <h1>what are you up to this week?</h1>
        </div>
        <div className="activity-text">
          <textarea onChange={this.setActivity}></textarea>
        </div>
        {!this.props.dial.activity ? (
          <div className="activity-next">
            <a href="/#/upload"><div className="next-text">skip</div></a>
          </div>
        ) : (
          <div className="activity-next">
            <a href="/#/upload"><div className="next-text">next</div></a>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dial: state.dial
  }
}

const mapDispatchToProps = {
  setActivity: setActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
