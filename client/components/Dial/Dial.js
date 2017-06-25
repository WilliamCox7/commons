import React, { Component } from 'react';
import { connect } from 'react-redux';
import DialSearch from '../DialSearch/DialSearch';
import { addToDial, removeFromDial } from '../../reducers/userReducer';
import { updKey } from '../../reducers/dialReducer';
import './Dial.scss';

class Dial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curCirc: 4,
      curDown: false,
      y: undefined,
      x: undefined
    }
    this.rotate = this.rotate.bind(this);
    this.startGesture = this.startGesture.bind(this);
    this.endGesture = this.endGesture.bind(this);
    this.dragDown = this.dragDown.bind(this);
    this.addToDial = this.addToDial.bind(this);
    this.removeFromDial = this.removeFromDial.bind(this);
    this.updCurCircle = this.updCurCircle.bind(this);
  }

  dragDown(e) {
    if (this.state.curDown) {
      if (this.state.y+50 < e.touches[0].clientY &&
      Math.abs(this.state.x - e.touches[0].clientX) < 50) {
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
    var circles = el.getElementsByClassName('circle');
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
    } else if (this.props.type === 'profile') {
      this.props.updKey(this.props.editType);
    }
  }

  startGesture(e) {
    this.setState({
      curDown: true,
      y: e.touches[0].clientY,
      x: e.touches[0].clientX
    });
  }

  endGesture(e) {
    this.setState({curDown: false, y: undefined, x: undefined});
  }

  updCurCircle(e) {
    if (this.props.type === "profile") {
      var el = e.currentTarget.parentElement;
      var circles = el.getElementsByClassName('circle');
      if (circles.length > 1) {
        for (var i = 0; i < 5; i++) {
          if (this.props.dial.wordkey[this.props.editType]-1 === i+1 ||
          (this.props.dial.wordkey[this.props.editType]-1 === 0 && i === 4)) {
            circles[4-i].classList.add('active-circle');
          } else {
            circles[4-i].classList.remove('active-circle');
          }
        }
      }
    }
  }

  addToDial(el, item) {
    this.props.addToDial(item, this.props.editType);
    if (this.props.array.length < 5) {
      this.rotate(el, 72);
    }
  }

  removeFromDial(e) {
    if (this.props.array.length > 0) {
      this.props.removeFromDial(this.props.editType);
      this.rotate(e.currentTarget.parentElement, -72);
    }
  }

  render() {

    var color = 'white', background = '#BFBFBF';
    if (this.props.type === "edit") {
      var circles = document.getElementsByClassName('circle');
      if (circles.length > 1) {
        for (var i = 0; i < 5; i++) {
          if (this.props.array[i]) {
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
      color = '#3B3B3B'; background = '#E6E6E6';
    }

    return (
      <div>
        <div className="Dial"
          style={{transform: 'rotate(0deg)',
          WebkitTransform: 'rotate(0deg)',
          width: this.props.dim[0],
          height: this.props.dim[0]}}>
          <div className="spoke" style={{
            width: this.props.dim[1],
            height: this.props.dim[2]}}>
            <div className="circle"
              style={{
                transform: 'rotate(0deg)',
                WebkitTransform: 'rotate(0deg)',
                width: this.props.dim[1],
                height: this.props.dim[1],
                color: color, background: background
              }}>{this.props.array[0] ? (
                this.props.array[0][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.array[0]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke" style={{
            width: this.props.dim[1],
            height: this.props.dim[2]}}>
            <div className="circle"
              style={{
                transform: 'rotate(-72deg)',
                WebkitTransform: 'rotate(-72deg)',
                width: this.props.dim[1],
                height: this.props.dim[1],
                color: color, background: background
              }}>{this.props.array[4] ? (
                this.props.array[4][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.array[4]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke" style={{
            width: this.props.dim[1],
            height: this.props.dim[2]}}>
            <div className="circle"
              style={{
                transform: 'rotate(-144deg)',
                WebkitTransform: 'rotate(-144deg)',
                width: this.props.dim[1],
                height: this.props.dim[1],
                color: color, background: background
              }}>{this.props.array[3] ? (
                this.props.array[3][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.array[3]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke" style={{
            width: this.props.dim[1],
            height: this.props.dim[2]}}>
            <div className="circle"
              style={{
                transform: 'rotate(-216deg)',
                WebkitTransform: 'rotate(-216deg)',
                width: this.props.dim[1],
                height: this.props.dim[1],
                color: color, background: background
              }}>{this.props.array[2] ? (
                this.props.array[2][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word">
                  {this.props.array[2]}
                </div>
              ): (null)}
            </div>
          </div>
          <div className="spoke" style={{
            width: this.props.dim[1],
            height: this.props.dim[2]}}>
            <div className="circle"
              style={{
                transform: 'rotate(-288deg)',
                WebkitTransform: 'rotate(-288deg)',
                width: this.props.dim[1],
                height: this.props.dim[1],
                color: color, background: background
              }}>{this.props.array[1] ? (
                this.props.array[1][0].toUpperCase()
              ) : ("+")}
              {this.props.type === 'feed' ? (
                <div className="current-word"
                  style={{opacity: '1.0'}}>
                  {this.props.array[1]}
                </div>
              ): (null)}
            </div>
          </div>
          {this.props.type !== 'edit' ? (
            <div id="drag-overlay" onTouchStart={this.startGesture}
              onTouchMove={this.dragDown} onTouchEnd={this.endGesture}
              onTouchEnd={this.updCurCircle}></div>
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
    user: state.user,
    dial: state.dial
  }
}

const mapDispatchToProps = {
  addToDial: addToDial,
  removeFromDial: removeFromDial,
  updKey: updKey
}

export default connect(mapStateToProps, mapDispatchToProps)(Dial);
