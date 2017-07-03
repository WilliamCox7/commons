import React, { Component } from 'react';
import { connect } from 'react-redux';
import { router } from 'react-router';
import Chat from '../Chat/Chat';
import './Matches.scss';

class Matches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matchId: undefined,
      matchPhoto: undefined
    }
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }

  openChat(person) {
    this.setState({matchId: person.id, matchPhoto: person.pic1});
  }

  closeChat() {
    this.setState({matchId: undefined, matchPhoto: undefined});
  }

  render() {

    var matches = [];
    this.props.feed.presentations.forEach((person, i) => {
      if (person.match) {
        matches.push(
          <img className="matchImg" src={person.pic1} key={i} onClick={() => {
            this.openChat(person);
          }} />
        );
      }
    });

    return (
      <div className="Matches">
        {matches}
        {this.state.matchId ? (
          <Chat match={this.state} closeChat={this.closeChat} />
        ) : (null)}
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
