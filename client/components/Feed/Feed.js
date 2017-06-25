import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainNav from '../MainNav/MainNav';
import Presentation from '../Presentation/Presentation';
import './Feed.scss';

class Feed extends Component {

  render() {

    var feed = this.props.feed.presentations.map((presentation, i) => {
      return <Presentation presentation={presentation} key={i} />;
    });

    return (
      <div className="Feed">
        <MainNav />
        <div className="buffer"></div>
        {feed}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

export default connect(mapStateToProps)(Feed);
