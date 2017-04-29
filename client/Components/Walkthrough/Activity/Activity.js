import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../../../redux/walkthroughReducer';
import Navigation from '../Navigation/Navigation';
import Next from '../Next/Next';
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
    return (
      <div className="activity">
        <Navigation redirect={"defines"} width={"75%"} />
        <div className="header-text">
          <h1>what are you up to this week?</h1>
        </div>
        <div className="activity-text">
          <textarea onChange={this.setActivity}></textarea>
        </div>
        <Next condition={!this.props.walkthrough.activity} redirect={'upload'} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    walkthrough: state.walkthrough
  }
}

const mapDispatchToProps = {
  setActivity: setActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
