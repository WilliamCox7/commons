import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import Dial from '../Dial/Dial';
import SkipNext from '../SkipNext/SkipNext';
import './Attributes.scss';

class Attributes extends Component {

  render() {
    return (
      <div className="Attributes">
        <ProgressBar redirect={"/hobbies"} width={"50%"}
          progressText={"what defines you?"} />
        <Dial type="edit" editType="attributes" />
        <SkipNext next={this.props.user.attributes.length > 0}
          redirect="/activities" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Attributes);
