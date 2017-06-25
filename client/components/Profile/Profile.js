import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      nav: 'hobbies'
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    var profileDial = document.getElementsByClassName('dial-section')[0];
    var circles = profileDial.getElementsByClassName('circle');
    circles[0].classList.add('active-circle');
  }

  toggleNav(e) {
    this.setState({nav: e.target.innerText});
    var navs = e.target.parentElement.children;
    if (e.target.innerText === 'hobbies') {
      navs[0].classList.add('active');
      navs[1].classList.remove('active');
      navs[2].classList.remove('active');
    } else if (e.target.innerText === 'attributes') {
      navs[0].classList.remove('active');
      navs[1].classList.add('active');
      navs[2].classList.remove('active');
    } else {
      navs[0].classList.remove('active');
      navs[1].classList.remove('active');
      navs[2].classList.add('active');
    }
  }

  render() {

    var array = 'hobbies';
    if (this.state.nav === 'attributes') {
      array = 'attributes';
    }

    return (
      <div className="Profile">
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
          {this.state.nav === 'status' ? (
            <div className="status-section">
              <p>{this.props.profile.activity}</p>
            </div>
          ) : (
            <div className="dial-section">
              <DialWords wordkey={this.props.dial.wordkey}
                words={this.props.profile[array]} />
              <Dial type="profile" editType={array}
                array={this.props.profile[array]} dim={[110, 30, 50]} />
            </div>
          )}
          <img id="triangle1" src={T1} />
          <img id="triangle2" src={T2} />
        </div>
        <div className="profile-nav">
          <p className="active" onClick={this.toggleNav}>hobbies</p>
          <p onClick={this.toggleNav}>attributes</p>
          <p onClick={this.toggleNav}>status</p>
        </div>
        <Advertisement />
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
