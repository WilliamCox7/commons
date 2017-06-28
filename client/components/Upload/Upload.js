import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar';
import SkipNext from '../SkipNext/SkipNext';
import profilePlus from '../../src/profile-plus.svg';
import backgroundPlus from '../../src/background-plus.svg';
import uploadBlock from '../../src/upload-block.svg';
import { addFile } from '../../reducers/userReducer';
import './Upload.scss';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.storeFile = this.storeFile.bind(this);
    this.openPictures = this.openPictures.bind(this);
    this.openVideos = this.openVideos.bind(this);
  }

  storeFile(e) {
    if (e.currentTarget.files) {
      var name = e.currentTarget.files[0].name;
      var type = 'vid';
      if (e.currentTarget.files[0].type.indexOf("image") > -1) {
        type = 'image';
      }
      var reader = new FileReader();
      reader.onloadend = () => {
        this.props.addFile(type, reader.result, name);
      }
      reader.readAsDataURL(e.currentTarget.files[0]);
    }
  }

  openPictures() {
    document.getElementById('picButton').click();
  }

  openVideos() {
    document.getElementById('vidButton').click();
  }

  render() {
    return (
      <div className="Upload">
        <ProgressBar redirect={"/activities"} width={"100%"}
          progressText={"make or upload your profile video and picture"} />
        <div className="upload-sections">
          <div onClick={this.storeFile} className="upload-section">
            <input type="file" id="picButton"
              accept="image/x-png,image/jpeg" onChange={this.storeFile} />
            <img onClick={this.openPictures} className="graphic" src={profilePlus} />
            <div className="upload-inform">
              <span>upload profile picture</span>
              <img src={uploadBlock} />
            </div>
          </div>
          <div onClick={this.getVideo} className="upload-section">
            <input type="file" id="vidButton"
              accept="video/mp4,video/x-m4v,video/*" onChange={this.storeFile} />
            <img onClick={this.openVideos} className="graphic" src={backgroundPlus} />
            <div className="upload-inform">
              <span>upload background media</span>
              <img src={uploadBlock} />
            </div>
          </div>
        </div>
        <SkipNext next={this.props.user.video || this.props.user.image}
          redirect="/feed" />
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
  addFile: addFile
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
