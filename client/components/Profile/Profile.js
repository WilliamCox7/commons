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
      y: undefined,
      slideshow: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.setNav = this.setNav.bind(this);
    this.startGesture = this.startGesture.bind(this);
    this.endGesture = this.endGesture.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
    this.openToSlidePic = this.openToSlidePic.bind(this);
    this.openToSlideVideo = this.openToSlideVideo.bind(this);
    this.likePerson = this.likePerson.bind(this);
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

  openToSlidePic() {
    this.props.openToSlidePic();
  }

  openToSlideVideo() {
    this.props.openToSlideVideo();
  }

  likePerson() {
    this.props.likePerson(this.props.profile.id);
  }

  render() {

    var array = 'hobbies';
    if (this.state.nav === 'attributes') {
      array = 'attributes';
    }

    return (
      <div className="Profile" onTouchStart={this.startGesture}
        onTouchMove={this.dragOver} onTouchEnd={this.endGesture}
        style={this.props.slideshow ? (this.props.isUser ? ({
          height: '100%', top: '0px', WebkitFilter: 'blur(4px)', filter: 'blur(4px)'
        }) : ({
          height: '100%', top: '0px', WebkitFilter: 'blur(4px)', filter: 'blur(4px)'
        })) : (
          this.props.isUser ? ( this.props.editing ? (
            this.props.editMode !== 'status' && this.props.editMode ? ({
              height: '100%', top: '0px', WebkitFilter: 'blur(4px)', filter: 'blur(4px)'
            }) : ({
              height: 'calc(100% - 51px)', top: '51px'
            })
          ) : ({
            height: 'calc(100% - 115px)', top: '115px'
          })) : ({
            height: '100%', top: '0px'
          })
        )}>
        <div className="background-container">
          <video onClick={this.openToSlideVideo} loop muted><source src={this.props.profile.video1}
            type="video/mp4"/></video>
          {this.props.editing ? (
            <div onClick={this.openToSlideVideo} className="editBackground">
              <i className="icon-up-arrow"></i>
              <span>update background</span>
            </div>
          ) : (null)}
          <img id="triangle1" src={T1}
            style={this.props.isUser ? {bottom: '17px'} : {bottom: '2px'}} />
          <img id="triangle2" src={T2}
            style={this.props.isUser ? {bottom: '18px'} : {bottom: '2px'}} />
        </div>
        <div className="profile-info" style={this.props.isUser ? ({
          marginTop: '-150px'
        }) : ({
          marginTop: '-135px'
        })}>
          <div className="pic-info">
            <h1 onClick={this.props.editing ? this.props.setEditMode : null}
              name="userinfo">
              {this.props.profile.first + " " + this.props.profile.last}
              {this.props.editing ? (
                <i name="userinfo" className="icon-pencil"></i>
              ) : (null)}
            </h1>
            <p onClick={this.props.editing ? this.props.setEditMode : null}
              name="userinfo">
              {this.props.profile.age + " | " + this.props.profile.location}
              {this.props.profile.test ? (
                " | " + this.props.profile.test
              ) : (null)}
            </p>
            <img onClick={this.openToSlidePic} src={this.props.profile.pic1} />
            {this.props.editing ? (
              <div onClick={this.openToSlidePic} className="editPhoto">
                <span>update picture</span>
                <i className="icon-up-arrow"></i>
              </div>
            ) : (null)}
          </div>
          {!this.props.editing ? (
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
          ) : (
            this.props.editMode !== 'status' ? (
              <div className="dial-editing">
                <div onClick={this.props.setEditMode} className="edit-button"
                  name="hobbies">
                  hobbies<i name="hobbies" className="icon-pencil"></i>
                </div>
                <div onClick={this.props.setEditMode} className="edit-button"
                  name="attributes">
                  attributes<i name="attributes" className="icon-pencil"></i>
                </div>
                <div onClick={this.props.setEditMode} className="edit-button"
                  name="status">
                  status<i name="status" className="icon-pencil"></i>
                </div>
              </div>
            ) : (
              <div className="status-editing">
                <h1>status</h1>
                <textarea value={this.props.user.activity} />
              </div>
            )
          )}
          {this.props.profile.id === this.props.user.id ? (
            !this.props.editing ? (
              <i className="icon-gears" style={{
                fontSize: '40px', margin: '20px calc(25% - 65px)'
              }} onClick={this.props.toggleEdit}></i>
            ) : (null)
          ) : (
            <i className="icon-heart" style={this.props.profile.liked ? ({
              color: '#F26648', fontSize: '30px', margin: '20px calc(25% - 60px)'
            }):({
              fontSize: '30px', margin: '20px calc(25% - 60px)'
            })} onClick={this.likePerson} ></i>
          )}
        </div>
        {!this.props.editing ? (
          <div>
            <div className="profile-nav">
              <p className="active" onClick={this.toggleNav}>hobbies</p>
              <p onClick={this.toggleNav}>attributes</p>
              <p onClick={this.toggleNav}>status</p>
            </div>
            <Advertisement />
          </div>
        ) : (null)}
        {this.props.profile.id !== this.props.user.id ? (
          <div onClick={this.closeProfile} className="close-button">X</div>
        ) : (null)}
        {this.props.editMode !== 'status' && this.props.editMode ? (
          <div className="darken"></div>
        ) : (null)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dial: state.dial,
    user: state.user,
    feed: state.feed
  }
}

const mapDispatchToProps = {
  likePerson: likePerson
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
