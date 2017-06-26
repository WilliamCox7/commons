import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likePerson } from '../../reducers/feedReducer';
import DialWords from '../DialWords/DialWords';
import Dial from '../Dial/Dial';
import Advertisement from '../Advertisement/Advertisement';
import T1 from '../../src/triangle1.svg';
import T2 from '../../src/triangle2.svg';
import './Profile.scss';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav: 'hobbies',
      curDown: false,
      x: undefined,
      y: undefined
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.setNav = this.setNav.bind(this);
    this.startGesture = this.startGesture.bind(this);
    this.endGesture = this.endGesture.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
  }

  componentDidMount() {
    var profileDials = document.getElementsByClassName('dial-section');
    var circles0 = profileDials[0].getElementsByClassName('circle');
    var circles1 = profileDials[1].getElementsByClassName('circle');
    circles0[0].classList.add('active-circle');
    circles1[0].classList.add('active-circle');
  }

  closeProfile() {
    this.props.closeProfile();
  }

  toggleNav(e) {
    this.setState({nav: e.target.innerText});
    this.setNav(e.target.innerText)
  }

  setNav(nav) {
    var navs = document.getElementsByClassName('profile-nav')[0].children;
    var sections = document.getElementsByClassName('dial-sections')[0];
    console.log(navs);
    console.log(sections);
    if (nav === 'hobbies') {
      navs[0].classList.add('active');
      navs[1].classList.remove('active');
      navs[2].classList.remove('active');
      sections.style.left = '0%';
    } else if (nav === 'attributes') {
      navs[0].classList.remove('active');
      navs[1].classList.add('active');
      navs[2].classList.remove('active');
      sections.style.left = '-100%';
    } else {
      navs[0].classList.remove('active');
      navs[1].classList.remove('active');
      navs[2].classList.add('active');
      sections.style.left = '-200%';
    }
    this.setState({nav: nav});
    this.endGesture();
  }

  dragOver(e) {
    if (this.state.curDown) {
      var nav = '';
      if (this.state.y+50 >= e.touches[0].clientY) {
        if (this.state.x-50 > e.touches[0].clientX) {
          if (this.state.nav === 'hobbies') {
            nav = 'attributes';
          } else if (this.state.nav === 'attributes') {
            nav = 'status';
          } else {
            this.endGesture();
          }
          if (nav) { this.setNav(nav); }
        } else if (this.state.x+50 < e.touches[0].clientX) {
          if (this.state.nav === 'attributes') {
            nav = 'hobbies';
          } else if (this.state.nav === 'status') {
            nav = 'attributes';
          } else {
            this.endGesture();
          }
          if (nav) { this.setNav(nav); }
        }
      }
    }
  }

  startGesture(e) {
    this.setState({
      curDown: true,
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  }

  endGesture(e) {
    this.setState({curDown: false, x: undefined, y: undefined});
  }

  render() {

    var array = 'hobbies';
    if (this.state.nav === 'attributes') {
      array = 'attributes';
    }

    return (
      <div className="Profile" onTouchStart={this.startGesture}
        onTouchMove={this.dragOver} onTouchEnd={this.endGesture}>
        <video loop muted><source src={this.props.profile.video1}
          type="video/mp4"/></video>
        <div className="profile-info">
          <div className="pic-info">
            <h1>{this.props.profile.first + " " + this.props.profile.last}</h1>
            <p>
              {this.props.profile.age + " | " + this.props.profile.location}
              {this.props.profile.test ? (
                " | " + this.props.profile.test
              ) : (null)}
            </p>
            <img src={this.props.profile.pic1} />
          </div>
          <div className="dial-sections">
            <div className="dial-section">
              <DialWords wordkey={this.props.dial.wordkey['hobbies']}
                words={this.props.profile['hobbies']} />
              <Dial type="profile" editType={'hobbies'}
                array={this.props.profile['hobbies']} dim={[110, 30, 50]} />
            </div>
            <div className="dial-section">
              <DialWords wordkey={this.props.dial.wordkey['attributes']}
                words={this.props.profile['attributes']} />
              <Dial type="profile" editType={'attributes'}
                array={this.props.profile['attributes']} dim={[110, 30, 50]} />
            </div>
            <div className="status-section">
              <p>{this.props.profile.activity}</p>
            </div>
          </div>
          <img id="triangle1" src={T1} />
          <img id="triangle2" src={T2} />
        </div>
        <div className="profile-nav">
          <p className="active" onClick={this.toggleNav}>hobbies</p>
          <p onClick={this.toggleNav}>attributes</p>
          <p onClick={this.toggleNav}>status</p>
        </div>
        <Advertisement />
        <div onClick={this.closeProfile} className="close-button">X</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dial: state.dial
  }
}

export default connect(mapStateToProps)(Profile);
