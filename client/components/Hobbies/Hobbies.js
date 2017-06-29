import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import Dial from '../Dial/Dial';
import SkipNext from '../SkipNext/SkipNext';
import './Hobbies.scss';

class Hobbies extends Component {

  render() {
    return (
      <div className="Hobbies">
        {!this.props.dontshow ? (
          <ProgressBar redirect={"/"} width={"25%"}
            progressText={"choose five hobbies"} />
        ) : (null)}
        <Dial type="edit" editType="hobbies"
          array={this.props.user.hobbies} dim={[150, 40, 90]} />
        {!this.props.dontshow ? (
          <SkipNext next={this.props.user.hobbies.length > 0}
            redirect="/attributes" />
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

export default connect(mapStateToProps)(Hobbies);
