import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './redux/walkthroughReducer';
import axios from 'axios';
import './reset.scss';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.getSearch = this.getSearch.bind(this);
  }

  getSearch() {
    axios.get('/search').then((data) => {
      this.props.search(data.data);
    });
  }

  componentDidMount() {
    this.getSearch();
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const mapDispatchToProps = {
  search: search
}

export default connect(null, mapDispatchToProps)(App);
