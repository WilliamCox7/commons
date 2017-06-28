import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainNav from '../MainNav/MainNav';
import Profile from '../Profile/Profile';
import SlideShow from '../SlideShow/SlideShow';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideshow: false,
      slidetype: ''
    }
    this.openProfile = this.openProfile.bind(this);
    this.openToSlideVideo = this.openToSlideVideo.bind(this);
    this.openToSlidePic = this.openToSlidePic.bind(this);
    this.closeSlideShow = this.closeSlideShow.bind(this);
  }

  openToSlideVideo() {
    this.setState({
      slideshow: true,
      slidetype: 'video'
    });
  }

  openToSlidePic() {
    this.setState({
      slideshow: true,
      slidetype: 'pic'
    });
  }

  openProfile() {
    this.setState({
      slideshow: false,
      slidetype: ''
    });
  }

  closeSlideShow() {
    this.setState({
      slideshow: false,
      slidetype: ''
    });
  }

  render() {
    return (
      <div className="UserProfile">
        <MainNav />
        <Profile profile={this.props.user}
          closeProfile={this.openProfile}
          openToSlidePic={this.openToSlidePic}
          openToSlideVideo={this.openToSlideVideo}
          slideshow={this.state.slideshow} isUser={true} />
        {this.state.slideshow ? (
          <SlideShow profile={this.props.user} numSlides={3}
            type={this.state.slidetype} closeSlideShow={this.closeSlideShow}
            isUser={true} />
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
