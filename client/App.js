import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './redux/walkthroughReducer';
import { parse } from './redux/feedReducer';
import axios from 'axios';
import './reset.scss';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/search').then((data) => {
      this.props.search(data.data);
      axios.get('/feed').then((data) => {
        this.props.parse(data.data);
      });
    });
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const mapDispatchToProps = {
  search: search,
  parse: parse
}

export default connect(null, mapDispatchToProps)(App);
