import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeHobby } from '../../redux/dialReducer';
import { removeDefine } from '../../redux/dialReducer';
import $ from 'jquery';
import './Dial.scss';

class Dial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: ''
    }
    this.updateStyle = this.updateStyle.bind(this);
    this.rotateDial = this.rotateDial.bind(this);
    this.removeData = this.removeData.bind(this);
  }

  rotateDial() {
    $(document).ready(() => {

      if ($(".dial").data('dir') === 'rev') { var r = 72;}
      else { var r = -72; }

      if ($(".dial").data('angle')) {
        var deg = $(".dial").data('angle') + r;
        $(".dial").data('angle', deg);
      } else {
        $(".dial").data('angle', 0);
        var deg = $(".dial").data('angle') + r;
        $(".dial").data('angle', deg);
      }

      var d1 = -deg;
      var d2 = d1 - 72;
      var d3 = d2 - 72;
      var d4 = d3 - 72;
      var d5 = d4 - 72;

      $(".dial").css('transform', 'rotate(' + deg + 'deg)');
      $("#dial-1 div").css('transform', 'rotate(' + d1 + 'deg)');
      $("#dial-2 div").css('transform', 'rotate(' + d2 + 'deg)');
      $("#dial-3 div").css('transform', 'rotate(' + d3 + 'deg)');
      $("#dial-4 div").css('transform', 'rotate(' + d4 + 'deg)');
      $("#dial-5 div").css('transform', 'rotate(' + d5 + 'deg)');

      $(".dial").data('dir', 'for');

    });
  }

  removeData() {
    if (this.props.type === 'hobbies') {
      this.props.removeHobby();
      if (this.props.dial.hobbyCount > 1) {
        $(document).ready(() => {
          $(".dial").data('dir', 'rev');
        });
      }
    } else {
      this.props.removeDefine();
      if (this.props.dial.defineCount > 1) {
        $(document).ready(() => {
          $(".dial").data('dir', 'rev');
        });
      }
    }
  }

  updateStyle() {
    $(document).ready(() => {
      if ($('#dial-1')["0"].innerText.indexOf('+') === -1) {
        $('#dial-1 div').css('background', '#FF7553');
        $('#dial-1 div').css('color', 'white');
        this.rotateDial();
      } else {
        $('#dial-1 div').css('background', '#EFEFEF');
        $('#dial-1 div').css('color', 'black');
        if ($(".dial").data('dir')) { this.rotateDial(); }
      }
      if ($('#dial-2')["0"].innerText.indexOf('+') === -1) {
        $('#dial-2 div').css('background', '#FF7553');
        $('#dial-2 div').css('color', 'white');
      } else {
        $('#dial-2 div').css('background', '#EFEFEF');
        $('#dial-2 div').css('color', 'black');
      }
      if ($('#dial-3')["0"].innerText.indexOf('+') === -1) {
        $('#dial-3 div').css('background', '#FF7553');
        $('#dial-3 div').css('color', 'white');
      } else {
        $('#dial-3 div').css('background', '#EFEFEF');
        $('#dial-3 div').css('color', 'black');
      }
      if ($('#dial-4')["0"].innerText.indexOf('+') === -1) {
        $('#dial-4 div').css('background', '#FF7553');
        $('#dial-4 div').css('color', 'white');
      } else {
        $('#dial-4 div').css('background', '#EFEFEF');
        $('#dial-4 div').css('color', 'black');
      }
      if ($('#dial-5')["0"].innerText.indexOf('+') === -1) {
        $('#dial-5 div').css('background', '#FF7553');
        $('#dial-5 div').css('color', 'white');
      } else {
        $('#dial-5 div').css('background', '#EFEFEF');
        $('#dial-5 div').css('color', 'black');
      }
    });
  }

  render() {
    this.updateStyle();
    if (this.props.type === 'hobbies') {
      var dial1 = this.props.dial.hobbySelected[1] ? this.props.dial.hobbySelected[1][0] : '+';
      var dial2 = this.props.dial.hobbySelected[2] ? this.props.dial.hobbySelected[2][0] : '+';
      var dial3 = this.props.dial.hobbySelected[3] ? this.props.dial.hobbySelected[3][0] : '+';
      var dial4 = this.props.dial.hobbySelected[4] ? this.props.dial.hobbySelected[4][0] : '+';
      var dial5 = this.props.dial.hobbySelected[5] ? this.props.dial.hobbySelected[5][0] : '+';
    } else {
      var dial1 = this.props.dial.defineSelected[1] ? this.props.dial.defineSelected[1][0] : '+';
      var dial2 = this.props.dial.defineSelected[2] ? this.props.dial.defineSelected[2][0] : '+';
      var dial3 = this.props.dial.defineSelected[3] ? this.props.dial.defineSelected[3][0] : '+';
      var dial4 = this.props.dial.defineSelected[4] ? this.props.dial.defineSelected[4][0] : '+';
      var dial5 = this.props.dial.defineSelected[5] ? this.props.dial.defineSelected[5][0] : '+';
    }
    return (
      <div className="dial">
        <span className="spoke" id="dial-1">
          <div onClick={this.removeData}><p>{dial1}</p></div>
        </span>
        <span className="spoke" id="dial-2">
          <div onClick={this.removeData}><p>{dial2}</p></div>
        </span>
        <span className="spoke" id="dial-3">
          <div onClick={this.removeData}><p>{dial3}</p></div>
        </span>
        <span className="spoke" id="dial-4">
          <div onClick={this.removeData}><p>{dial4}</p></div>
        </span>
        <span className="spoke" id="dial-5">
          <div onClick={this.removeData}><p>{dial5}</p></div>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dial: state.dial
  }
}

const mapDispatchToProps = {
  removeHobby: removeHobby,
  removeDefine: removeDefine
}

export default connect(mapStateToProps, mapDispatchToProps)(Dial);
