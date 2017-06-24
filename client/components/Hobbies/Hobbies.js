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
        <ProgressBar redirect={"/"} width={"25%"}
          progressText={"choose five hobbies"} />
        <Dial type="edit" editType="hobbies" />
        <SkipNext next={this.props.user.hobbies.length > 0}
          redirect="/attributes" />
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
