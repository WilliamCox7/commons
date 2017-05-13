import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Presentation from '../Presentation/Presentation';
import './Feed.scss';

class Feed extends Component {
  render() {
    var feed = this.props.feed.presentations.map((presentation) => {
      return <Presentation info={presentation} />;
    });
    return (
      <div>
        <Nav />
        <div className="feed">
          {feed}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feed
  }
}

export default connect(mapStateToProps)(Feed);
