import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DialWords.scss';

class DialWords extends Component {

  render() {

    var words = this.props.words.map((word, i) => {
      if (i+1 === this.props.wordkey) {
        return <div id="active-word" key={i}>{word.toLowerCase()}</div>
      } else {
        return <div key={i}>{word.toLowerCase()}</div>
      }
    });

    return (
      <div className="DialWords">
        {words}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dial: state.dial
  }
}

export default connect(mapStateToProps)(DialWords);
