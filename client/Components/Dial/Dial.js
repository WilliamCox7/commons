import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeHobby } from '../../redux/hobbyReducer';
import $ from 'jquery';
import './Dial.scss';

class Dial extends Component {

  constructor(props) {
    super(props);
    this.updateStyle = this.updateStyle.bind(this);
    this.rotateDial = this.rotateDial.bind(this);
    this.removeHobby = this.removeHobby.bind(this);
  }

  rotateDial(r) {
    $(document).ready(() => {

      if ($("#dial-1").data('angle')) {
        var d1 = $("#dial-1").data('angle') + r;
        $("#dial-1").data('angle', d1);
      } else {
        $("#dial-1").data('angle', 0);
        var d1 = $("#dial-1").data('angle') + r;
        $("#dial-1").data('angle', d1);
      }

      var d2 = d1 - r;
      var d3 = d2 - r;
      var d4 = d3 - r;
      var d5 = d4 - r;

      $('#dial-1').css('transform', 'rotate(' + d1 + 'deg)');
      $('#dial-2').css('transform', 'rotate(' + d2 + 'deg)');
      $('#dial-3').css('transform', 'rotate(' + d3 + 'deg)');
      $('#dial-4').css('transform', 'rotate(' + d4 + 'deg)');
      $('#dial-5').css('transform', 'rotate(' + d5 + 'deg)');
      $('#dial-1 div').css('transform', 'rotate(' + -d1 + 'deg)');
      $('#dial-2 div').css('transform', 'rotate(' + -d2 + 'deg)');
      $('#dial-3 div').css('transform', 'rotate(' + -d3 + 'deg)');
      $('#dial-4 div').css('transform', 'rotate(' + -d4 + 'deg)');
      $('#dial-5 div').css('transform', 'rotate(' + -d5 + 'deg)');

    });
  }

  removeHobby() {
    this.props.removeHobby();
    if ($("#dial-5")["0"].innerText.indexOf('+') === -1) {
      $('#dial-5 div').css('background', '#EFEFEF');
      $('#dial-5 div').css('color', 'black');
    } else if ($("#dial-4")["0"].innerText.indexOf('+') === -1) {
      $('#dial-4 div').css('background', '#EFEFEF');
      $('#dial-4 div').css('color', 'black');
    } else if ($("#dial-3")["0"].innerText.indexOf('+') === -1) {
      $('#dial-3 div').css('background', '#EFEFEF');
      $('#dial-3 div').css('color', 'black');
    } else if ($("#dial-2")["0"].innerText.indexOf('+') === -1) {
      $('#dial-2 div').css('background', '#EFEFEF');
      $('#dial-2 div').css('color', 'black');
    } else if ($("#dial-1")["0"].innerText.indexOf('+') === -1) {
      $('#dial-1 div').css('background', '#EFEFEF');
      $('#dial-1 div').css('color', 'black');
    }
    this.rotateDial(72);
  }

  updateStyle() {
    $(document).ready(() => {
      if ($('#dial-1')["0"].innerText.indexOf('+') === -1) {
        $('#dial-1 div').css('background', '#FF7553');
        $('#dial-1 div').css('color', 'white');
        this.rotateDial(-72);
      }
      if ($('#dial-2')["0"].innerText.indexOf('+') === -1) {
        $('#dial-2 div').css('background', '#FF7553');
        $('#dial-2 div').css('color', 'white');
      }
      if ($('#dial-3')["0"].innerText.indexOf('+') === -1) {
        $('#dial-3 div').css('background', '#FF7553');
        $('#dial-3 div').css('color', 'white');
      }
      if ($('#dial-4')["0"].innerText.indexOf('+') === -1) {
        $('#dial-4 div').css('background', '#FF7553');
        $('#dial-4 div').css('color', 'white');
      }
      if ($('#dial-5')["0"].innerText.indexOf('+') === -1) {
        $('#dial-5 div').css('background', '#FF7553');
        $('#dial-5 div').css('color', 'white');
      }
    });
  }

  render() {
    this.updateStyle();
    var dial1 = this.props.hobbies.selected[1] ? this.props.hobbies.selected[1][0] : '+';
    var dial2 = this.props.hobbies.selected[2] ? this.props.hobbies.selected[2][0] : '+';
    var dial3 = this.props.hobbies.selected[3] ? this.props.hobbies.selected[3][0] : '+';
    var dial4 = this.props.hobbies.selected[4] ? this.props.hobbies.selected[4][0] : '+';
    var dial5 = this.props.hobbies.selected[5] ? this.props.hobbies.selected[5][0] : '+';
    return (
      <div className="dial">
        <span className="spoke" id="dial-1">
          <div onClick={this.removeHobby}><p>{dial1}</p></div>
        </span>
        <span className="spoke" id="dial-2">
          <div onClick={this.removeHobby}><p>{dial2}</p></div>
        </span>
        <span className="spoke" id="dial-3">
          <div onClick={this.removeHobby}><p>{dial3}</p></div>
        </span>
        <span className="spoke" id="dial-4">
          <div onClick={this.removeHobby}><p>{dial4}</p></div>
        </span>
        <span className="spoke" id="dial-5">
          <div onClick={this.removeHobby}><p>{dial5}</p></div>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hobbies: state.hobby
  }
}

const mapDispatchToProps = {
  removeHobby: removeHobby
}

export default connect(mapStateToProps, mapDispatchToProps)(Dial);
