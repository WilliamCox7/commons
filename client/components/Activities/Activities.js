import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import SkipNext from '../SkipNext/SkipNext';
import { updActivity } from '../../reducers/userReducer';
import './Activities.scss';

class Activities extends Component {

  constructor(props) {
    super(props);
    this.updActivity = this.updActivity.bind(this);
  }

  updActivity(e) {
    this.props.updActivity(e.target.value)
  }

  render() {
    return (
      <div className="Activities">
        <ProgressBar redirect={"/attributes"} width={"75%"}
          progressText={"what are you up to this week?"}  />
        <textarea onChange={this.updActivity}
          placeholder="tell us here..." />
        <SkipNext next={this.props.user.activity}
          redirect="/upload" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  updActivity: updActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
