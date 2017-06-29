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
        {!this.props.dontshow ? (
          <ProgressBar redirect={"/hobbies"} width={"50%"}
            progressText={"what defines you?"} />
        ) : (null)}
        <Dial type="edit" editType="attributes"
          array={this.props.user.attributes} dim={[150, 40, 90]} />
        {!this.props.dontshow ? (
          <SkipNext next={this.props.user.attributes.length > 0}
            redirect="/activities" />
        ) : (null)}
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
