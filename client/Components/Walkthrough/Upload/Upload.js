import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../../redux/walkthroughReducer';
import { setMedia } from '../../../redux/walkthroughReducer';
import Navigation from '../Navigation/Navigation';
import Next from '../Next/Next';
import uploadProfile from '../../../images/upload-profile.png';
import uploadMedia from '../../../images/upload-media.png';
import uploadArrow from '../../../images/upload-arrow.png';
import './Upload.scss';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.setProfile = this.setProfile.bind(this);
    this.setMedia = this.setMedia.bind(this);
  }

  setProfile(e) {
    this.props.setProfile(e.target.value);
  }

  setMedia(e) {
    this.props.setMedia(e.target.value);
  }

  render() {
    return (
      <div className="activity">
        <Navigation redirect={"activity"} width={"100%"} />
        <div className="header-text">
          <h1>make or upload your profile video and picture</h1>
        </div>
        <div className="upload-img">
          <img src={uploadProfile} />
          <div className="upload-text">
            <h1>upload profile picture</h1>
            <div className="upload-text-img">
              <img src={uploadArrow} />
            </div>
          </div>
        </div>
        <div className="upload-img">
          <img src={uploadMedia} />
          <div className="upload-text">
            <h1>upload background media</h1>
            <div className="upload-text-img">
              <img src={uploadArrow} />
            </div>
          </div>
        </div>
        <Next condition={!this.props.walkthrough.activity} redirect={'home'} />
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
  setProfile: setProfile,
  setMedia: setMedia
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
