import React, { Component } from 'react';
import './SlideShow.scss';

class SlideShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curDown: false,
      x: undefined,
      y: undefined,
      slide: 1
    }
    this.dragOver = this.dragOver.bind(this);
    this.startGesture = this.startGesture.bind(this);
    this.endGesture = this.endGesture.bind(this);
  }

  dragOver(e) {
    if (this.state.curDown) {
      if (this.state.y+50 >= e.touches[0].clientY) {
        if (this.state.x-50 > e.touches[0].clientX) {
          if (this.state.slide <= this.props.numSlides) {
            this.state.slide++;
            if (this.state.slide > this.props.numSlides) {
              this.props.closeSlideShow();
            }
          } else {
            this.props.closeSlideShow();
          }
          this.endGesture();
        } else if (this.state.x+50 < e.touches[0].clientX) {
          if (this.state.slide >= 1) {
            this.state.slide--;
            if (this.state.slide === 0) {
              this.props.closeSlideShow();
            }
          } else {
            this.props.closeSlideShow();
          }
          this.endGesture();
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

    return (
      <div onTouchStart={this.startGesture} onTouchMove={this.dragOver}
        onTouchEnd={this.endGesture} className="SlideShow">
        {this.props.type === 'video' ? (
          <video loop muted>
            <source src={this.props.profile["video"+this.state.slide]}
            type="video/mp4"/>
          </video>
        ) : (
          <img src={this.props.profile["pic"+this.state.slide]} />
        )}
        <div onClick={this.props.closeSlideShow} className="close-button">X</div>
        <div className="cur-slide-show">
          {this.state.slide === 1 ? (
            <div style={this.props.numSlides > 0 ? {
              display: 'block',
              background: '#F26648'
            } : {
              display: 'none'
            }}></div>
          ) : (
            <div style={this.props.numSlides > 0 ? {
              display: 'block'
            } : {
              display: 'none'
            }}></div>
          )}
          {this.state.slide === 2 ? (
            <div style={this.props.numSlides > 1 ? {
              display: 'block',
              background: '#F26648'
            } : {
              display: 'none'
            }}></div>
          ) : (
            <div style={this.props.numSlides > 1 ? {
              display: 'block'
            } : {
              display: 'none'
            }}></div>
          )}
          {this.state.slide === 3 ? (
            <div style={this.props.numSlides > 2 ? {
              display: 'block',
              background: '#F26648'
            } : {
              display: 'none'
            }}></div>
          ) : (
            <div style={this.props.numSlides > 2 ? {
              display: 'block'
            } : {
              display: 'none'
            }}></div>
          )}
        </div>
        {this.props.isUser ? (
          <i className="fa fa-trash" aria-hidden="true"></i>
        ) : (null)}
      </div>
    )
  }
}

export default (SlideShow);
