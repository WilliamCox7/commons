import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Matches.scss';

class Matches extends Component {

  constructor(props) {
    super(props);
    this.openChat = this.openChat.bind(this);
  }

  openChat(id) {
    console.log(id);
  }

  render() {

    var matches = [];
    this.props.feed.presentations.forEach((person, i) => {
      if (person.match) {
        matches.push(
          <img src={person.pic1} key={i} onClick={() => {
            this.openChat(person.id);
          }} />
        );
      }
    });

    return (
      <div className="Matches">
        {matches}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

export default connect(mapStateToProps)(Matches);
