import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainNav from '../MainNav/MainNav';
import EditNav from '../EditNav/EditNav';
import Edit from '../Edit/Edit';
import Matches from '../Matches/Matches';
import Profile from '../Profile/Profile';
import SlideShow from '../SlideShow/SlideShow';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideshow: false,
      slidetype: '',
      editing: false,
      numSlides: undefined,
      editMode: ''
    }
    this.openProfile = this.openProfile.bind(this);
    this.openToSlideVideo = this.openToSlideVideo.bind(this);
    this.openToSlidePic = this.openToSlidePic.bind(this);
    this.closeSlideShow = this.closeSlideShow.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setEditMode = this.setEditMode.bind(this);
    this.save = this.save.bind(this);
    this.exit = this.exit.bind(this);
  }

  openToSlideVideo() {
    var numSlides = 0;
    if (!this.state.editing) {
      for (var prop in this.props.user) {
        if (prop.indexOf('video') > -1) {
          if (this.props.user[prop]) {
            numSlides++;
          }
        }
      }
    }
    this.setState({
      slideshow: true,
      slidetype: 'video',
      numSlides: numSlides
    });
  }

  openToSlidePic() {
    var numSlides = 0;
    if (!this.state.editing) {
      for (var prop in this.props.user) {
        if (prop.indexOf('pic') > -1) {
          if (this.props.user[prop]) {
            numSlides++;
          }
        }
      }
    }
    this.setState({
      slideshow: true,
      slidetype: 'pic',
      numSlides: numSlides
    });
  }

  openProfile() {
    this.setState({
      slideshow: false,
      slidetype: '',
      numSlides: 0
    });
  }

  closeSlideShow() {
    this.setState({
      slideshow: false,
      slidetype: '',
      numSlides: undefined
    });
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  setEditMode(e) {
    this.setState({editMode: e.target.attributes.name.value});
  }

  exit() {
    this.setState({editMode: ''});
  }

  save() {
    console.log('saving to db');
    if (this.state.editMode === "userinfo") {
      document.getElementById("create-user-btn").click();
    }
    this.exit();
  }

  render() {
    return (
      <div className="UserProfile">
        {this.state.editing ? (
          <EditNav editMode={this.state.editMode}
            save={this.save} exit={this.exit} done={this.toggleEdit} />
        ) : (
          <MainNav />
        )}
        {this.state.editing ? (null) : (
          <Matches />
        )}
        <Profile profile={this.props.user}
          closeProfile={this.openProfile}
          openToSlidePic={this.openToSlidePic}
          openToSlideVideo={this.openToSlideVideo}
          slideshow={this.state.slideshow} isUser={true}
          editing={this.state.editing} toggleEdit={this.toggleEdit}
          setEditMode={this.setEditMode} editMode={this.state.editMode} />
        {this.state.slideshow ? (
          <SlideShow profile={this.props.user} numSlides={this.state.numSlides || 3}
            type={this.state.slidetype} closeSlideShow={this.closeSlideShow}
            isUser={this.state.editing} />
        ) : (null)}
        {this.state.editMode !== 'status' && this.state.editMode ? (
          <Edit editMode={this.state.editMode} />
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

export default connect(mapStateToProps)(UserProfile);
