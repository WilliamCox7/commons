import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from "react-router";
import './Welcome.scss';

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.toHobbies = this.toHobbies.bind(this);
  }

  componentDidMount() {
    if (!this.props.user.isFirstTime) {
      hashHistory.replace("/feed");
    }
  }

  toHobbies() {
    hashHistory.replace("/hobbies");
  }

  render() {
    return (
      <div className="Welcome">
        <h1>W E L C O M E</h1>
        <p>
          The commons app is the
          most unique dating with its
          signature matching user
          interface. The five circle
          dial is where it’s at yo.
        </p>
        <button onClick={this.toHobbies}>let's get started</button>
        <div className="orange-overlay"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Welcome);
