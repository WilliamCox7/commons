import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dial from '../Dial/Dial';
import Profile from '../Profile/Profile';
import { likePerson } from '../../reducers/feedReducer';
import './Presentation.scss';

class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showProfile: false
    }
    this.likePerson = this.likePerson.bind(this);
    this.openProfile = this.openProfile.bind(this);
  }

  componentDidMount() {
    var media = document.getElementsByTagName('video');
    var topScreen = 40, botScreen = screen.height;
    document.addEventListener('scroll', () => {
      for (var i = 0; i < media.length; i++) {
        var elementTop = media[i].getBoundingClientRect().top;
        var elementBot = media[i].getBoundingClientRect().bottom;
        if (elementTop < botScreen && elementTop >= topScreen &&
        elementBot <= botScreen && elementBot > topScreen) {
          media[i].play();
        } else {
          media[i].pause();
        }
      }
    });
  }

  likePerson() {
    this.props.likePerson(this.props.presentation.id);
  }

  openProfile() {
    this.setState({showProfile: !this.state.showProfile});
  }

  render() {

    return (
      <div className="Presentation">
        <div className="pres-info">
          <div className="pres-name">
            {this.props.presentation.first + " " + this.props.presentation.last}
          </div>
          <div className="pres-other">
            {this.props.presentation.age + " | " + this.props.presentation.location}
            {this.props.presentation.test ? (
              " | " + this.props.presentation.test
            ) : (null)}
          </div>
        </div>
        <div className="pres-media">
          <video loop muted onClick={this.openProfile}>
            <source src={this.props.presentation.video1} type="video/mp4"/>
          </video>
          {this.props.presentation.liked ? (
            <i onClick={this.likePerson} className="icon-heart liked"></i>
          ) : (
            <i onClick={this.likePerson} className="icon-heart"></i>
          )}
          <div className="dial-div">
            <Dial type="feed" editType="hobbies" dim={[110, 30, 50]}
              array={this.props.presentation.hobbies} />
          </div>
        </div>
        <div className="pres-activity">
          <img src={this.props.presentation.pic1} />
          <p>{this.props.presentation.activity}
            <div>{this.props.presentation.posted}</div>
          </p>
        </div>
        {this.state.showProfile ? (
          <Profile profile={this.props.presentation}
            closeProfile={this.openProfile} />
        ) : (null)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const mapDispatchToProps = {
  likePerson: likePerson
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
