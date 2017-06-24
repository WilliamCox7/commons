import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DialSearch.scss';

class DialSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.addToDial = this.addToDial.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  addToDial(e) {
    var el = e.currentTarget.parentElement.parentElement.parentElement.children[0];
    this.props.addToDial(el, e.currentTarget.attributes[0].value);
  }

  updateSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {

    var count = 0;
    var searchResults = this.props.dial[this.props.editType+"List"].filter((result) => {
      if (result.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 &&
      this.state.search && count < 4) {
        count++;
        return true;
      }
    });

    searchResults = searchResults.map((result, i) => {
      var word = result.toLowerCase();
      var firstLetter = result[0].toUpperCase();
      return (
        <div name={word} key={i} onClick={this.addToDial}>
          {word}<span>{firstLetter}</span>
        </div>
      );
    });

    return (
      <div className="DialSearch">
        <input onChange={this.updateSearch} type="text"
          placeholder={"my "+this.props.editType+" are..."} />
        <div className="searchResults">
          {searchResults}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dial: state.dial
  }
}

export default connect(mapStateToProps)(DialSearch);
