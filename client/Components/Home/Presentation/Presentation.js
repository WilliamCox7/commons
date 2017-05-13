import React, { Component } from 'react';
import heart from '../../../images/heart.svg';
import cHeart from '../../../images/cHeart.svg';
import $ from 'jquery';
import FeedDial from '../FeedDial/FeedDial';
import './Presentation.scss';

class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isColored: false
    }
    this.toggleHeart = this.toggleHeart.bind(this);
  }

  toggleHeart() {
    this.setState({isColored: !this.state.isColored});
  }

  componentDidMount() {
    $(document).ready(() => {
      var media = $('video').not("[autoplay='autoplay']");
      var toleranceTop = 280;
      var toleranceBottom = 200;

      function checkMedia(){
        var scrollTop = $(window).scrollTop() + toleranceTop;
        var scrollBottom = $(window).scrollTop() + $(window).height() - toleranceBottom;

        media.each(function(index, el) {
          var yTopMedia = $(this).offset().top;
          var yBottomMedia = $(this).height() + yTopMedia;

          if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
            $(this).get(0).play();
          } else {
            $(this).get(0).pause();
          }
        });
      }
      $(document).on('scroll', checkMedia);
    });
  }

  render() {
    return (
      <div>
        <div className="presentation">
          <div className="pres-text">
            <div className="pres-name">{this.props.info.name}</div>
            <div className="pres-info">{this.props.info.age + ' | ' + this.props.info.loc + ' | ' + this.props.info.personality}</div>
          </div>
          <img className="pres-pic" src={this.props.info.pic} />
        </div>
        <div className="pres-media">
          <video loop muted><source src={this.props.info.media} type="video/mp4"/></video>
          {this.state.isColored ? (
            <img onClick={this.toggleHeart} className="heart" src={cHeart} />
          ) : (
            <img onClick={this.toggleHeart} className="heart" src={heart} />
          )}
          <FeedDial className="feedDial" dial={this.props.info.dial} />
        </div>
      </div>
    )
  }
}

export default Presentation;
