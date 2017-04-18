import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dial.scss';

class Dial extends Component {
  render() {
    console.log('rendering');
    var dial1 = this.props.hobbies.selected[1] ? this.props.hobbies.selected[1][0].toLowerCase() : '+';
    var dial2 = this.props.hobbies.selected[2] ? this.props.hobbies.selected[2][0].toLowerCase() : '+';
    var dial3 = this.props.hobbies.selected[3] ? this.props.hobbies.selected[3][0].toLowerCase() : '+';
    var dial4 = this.props.hobbies.selected[4] ? this.props.hobbies.selected[4][0].toLowerCase() : '+';
    var dial5 = this.props.hobbies.selected[5] ? this.props.hobbies.selected[5][0].toLowerCase() : '+';
    return (
      <div className="dial">
        <span className="spoke dial-1">
          <div><p>{dial1}</p></div>
        </span>
        <span className="spoke dial-2">
          <div><p>{dial2}</p></div>
        </span>
        <span className="spoke dial-3">
          <div><p>{dial3}</p></div>
        </span>
        <span className="spoke dial-4">
          <div><p>{dial4}</p></div>
        </span>
        <span className="spoke dial-5">
          <div><p>{dial5}</p></div>
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

export default connect(mapStateToProps)(Dial);
