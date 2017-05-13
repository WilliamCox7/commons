import React, { Component } from 'react';
import $ from 'jquery';
import './FeedDial.scss';

class FeedDial extends Component {

  constructor(props) {
    super(props);
    this.rotateDial = this.rotateDial.bind(this);
  }

  rotateDial(e) {
    var element = $(e.target)["0"].parentElement.parentElement.parentElement.parentElement;
    $(document).ready(() => {

      if ($(element).data('angle')) {
        var deg = $(element).data('angle') - 72;
        $(element).data('angle', deg);
      } else {
        $(element).data('angle', 0);
        var deg = $(element).data('angle') - 72;
        $(element).data('angle', deg);
      }

      var d1 = -deg;
      var d2 = d1 - 72;
      var d3 = d2 - 72;
      var d4 = d3 - 72;
      var d5 = d4 - 72;

      $(element).css('transform', 'rotate(' + deg + 'deg)');
      $(element.children["0"].firstChild).css('transform', 'rotate(' + d1 + 'deg)');
      $(element.children["1"].firstChild).css('transform', 'rotate(' + d2 + 'deg)');
      $(element.children["2"].firstChild).css('transform', 'rotate(' + d3 + 'deg)');
      $(element.children["3"].firstChild).css('transform', 'rotate(' + d4 + 'deg)');
      $(element.children["4"].firstChild).css('transform', 'rotate(' + d5 + 'deg)');

      if ($(element).data('pos')) {
        var pos = $(element).data('pos') + 1;
        if (pos > 4) { $(element).data('pos', 0); pos = 0; }
        else { $(element).data('pos', pos); }
      } else {
        $(element).data('pos', 1);
        var pos = 1;
      }

      var nextPos = pos + 1;
      if (nextPos > 4) { nextPos = 0; }

      $(element.children[pos.toString()].firstChild.firstChild.children["0"]).css('opacity', '0');
      $(element.children[nextPos.toString()].firstChild.firstChild.children["0"]).css('opacity', '1');

    });
  }

  render() {
    return (
      <div className="dial-container">
        <div className="feedDial">
          <span className="spoke" id="dial-1">
            <div><p onClick={this.rotateDial}>
              {this.props.dial[0][0].toUpperCase()}
              <h1>{this.props.dial[0].toLowerCase()}</h1>
            </p></div>
          </span>
          <span className="spoke" id="dial-2">
            <div><p onClick={this.rotateDial}>
              {this.props.dial[1][0].toUpperCase()}
              <h1 style={{opacity: '1'}}>{this.props.dial[1].toLowerCase()}</h1>
            </p></div>
          </span>
          <span className="spoke" id="dial-3">
            <div><p onClick={this.rotateDial}>
              {this.props.dial[2][0].toUpperCase()}
              <h1>{this.props.dial[2].toLowerCase()}</h1>
            </p></div>
          </span>
          <span className="spoke" id="dial-4">
            <div><p onClick={this.rotateDial}>
              {this.props.dial[3][0].toUpperCase()}
              <h1>{this.props.dial[3].toLowerCase()}</h1>
            </p></div>
          </span>
          <span className="spoke" id="dial-5">
            <div><p onClick={this.rotateDial}>
              {this.props.dial[4][0].toUpperCase()}
              <h1>{this.props.dial[4].toLowerCase()}</h1>
            </p></div>
          </span>
        </div>
      </div>
    )
  }
}

export default FeedDial;
