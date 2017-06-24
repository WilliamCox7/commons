import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialSearch from '../DialSearch/DialSearch';
import { addToDial, removeFromDial } from '../../reducers/userReducer';
import './Dial.scss';

class Dial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curCirc: 4,
      curDown: false,
      y: undefined
    }
    this.rotate = this.rotate.bind(this);
    this.startGesture = this.startGesture.bind(this);
    this.endGesture = this.endGesture.bind(this);
    this.dragDown = this.dragDown.bind(this);
    this.addToDial = this.addToDial.bind(this);
    this.removeFromDial = this.removeFromDial.bind(this);
  }

  dragDown(e) {
    if (this.state.curDown) {
      if (this.state.y < e.touches[0].clientY) {
        this.rotate(e.currentTarget.parentElement, 72);
        this.endGesture();
      }
    }
  }

  rotate(el, dir) {
    var r = el.style.transform;
    r = r.substring(7, r.length-1);
    r = r.substring(0, r.length-3);
    r = Number(r) + dir;
    el.style.transform = "rotate("+r+"deg)";
    var circles = document.getElementsByClassName('circle');
    for (var i = 0; i < 5; i++) {
      var cr = circles[i].style.transform;
      cr = cr.substring(7, cr.length-1);
      cr = cr.substring(0, cr.length-3);
      cr = Number(cr) - dir;
      circles[i].style.transform = "rotate("+cr+"deg)";
    }
    if (this.props.type === 'feed') {
      circles[this.state.curCirc].children[0].style.opacity = '0.0';
      var nextUp = this.state.curCirc-1;
      if (nextUp < 0) { nextUp = 4; }
      circles[nextUp].children[0].style.opacity = '1.0';
      this.setState({curCirc: nextUp});
    }
  }

  startGesture(e) {
    this.setState({curDown: true, y: e.touches[0].clientY});
  }

  endGesture(e) {
    this.setState({curDown: false, y: undefined});
  }

  addToDial(el, item) {
    this.props.addToDial(item, this.props.editType);
    if (this.props.user[this.props.editType].length < 5) {
      this.rotate(el, 72);
    }
  }

  removeFromDial(e) {
    if (this.props.user[this.props.editType].length > 0) {
      this.props.removeFromDial(this.props.editType);
      this.rotate(e.currentTarget.parentElement, -72);
    }
  }

  render() {

    var circles = document.getElementsByClassName('circle');
    if (circles.length > 1) {
      for (var i = 0; i < 5; i++) {
        if (this.props.user[this.props.editType][i]) {
          if (i === 0) {
            circles[i].style.background = "#F26648";
            circles[i].style.color = "white";
          } else {
            circles[5-i].style.background = "#F26648";
            circles[5-i].style.color = "white";
          }
        } else {
          if (i === 0) {
            circles[i].style.background = "#E6E6E6";
            circles[i].style.color = "black";
          } else {
            circles[5-i].style.background = "#E6E6E6";
            circles[5-i].style.color = "black";
          }
        }
      }
    }

    return (
      <div>
        <div className="Dial"
          style={{transform: 'rotate(0deg)', WebkitTransform: 'rotate(0deg)'}}>
          <div className="spoke">
            <div className="circle"
              style={{
                transform: 'rotate(0deg)',
                WebkitTransform: 'rotate(0deg)'
              }}>{this.props.user[this.props.editType][0] ? (
                this.props.user[this.props.editType][0][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.user[this.props.editType][0]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke">
            <div className="circle"
              style={{
                transform: 'rotate(-72deg)',
                WebkitTransform: 'rotate(-72deg)'
              }}>{this.props.user[this.props.editType][4] ? (
                this.props.user[this.props.editType][4][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.user[this.props.editType][4]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke">
            <div className="circle"
              style={{
                transform: 'rotate(-144deg)',
                WebkitTransform: 'rotate(-144deg)'
              }}>{this.props.user[this.props.editType][3] ? (
                this.props.user[this.props.editType][3][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.user[this.props.editType][3]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke">
            <div className="circle"
              style={{
                transform: 'rotate(-216deg)',
                WebkitTransform: 'rotate(-216deg)'
              }}>{this.props.user[this.props.editType][2] ? (
                this.props.user[this.props.editType][2][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.user[this.props.editType][2]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke">
            <div className="circle"
              style={{
                transform: 'rotate(-288deg)',
                WebkitTransform: 'rotate(-288deg)'
              }}>{this.props.user[this.props.editType][1] ? (
                this.props.user[this.props.editType][1][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word"
                  style={{opacity: '1.0'}}>
                  {this.props.user[this.props.editType][1]}
                </div>
              ): (null)}
            </div>
          </div>
          {this.props.type !== 'edit' ? (
            <div id="drag-overlay" onTouchStart={this.startGesture}
              onTouchMove={this.dragDown} onTouchEnd={this.endGesture}></div>
          ) : (
            <div id="drag-overlay" onClick={this.removeFromDial}></div>
          )}
        </div>
        {this.props.type === 'edit' ? (
          <DialSearch addToDial={this.addToDial}
            editType={this.props.editType} />
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

const mapDispatchToProps = {
  addToDial: addToDial,
  removeFromDial: removeFromDial
}

export default connect(mapStateToProps, mapDispatchToProps)(Dial);
