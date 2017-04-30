import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../../../redux/walkthroughReducer';
import { setHobby } from '../../../../redux/walkthroughReducer';
import { setDefine } from '../../../../redux/walkthroughReducer';
import axios from 'axios';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parsed: []
    }
    this.getSearch = this.getSearch.bind(this);
    this.searchParsed = this.searchParsed.bind(this);
    this.set = this.set.bind(this);
  }

  getSearch() {
    axios.get('/' + this.props.opt).then((data) => {
      this.props.search(data.data, this.props.opt);
    });
  }

  searchParsed(e) {
    var str = e.target.value;
    if (str) {
      var firstLetter = str[0].toUpperCase();
      var parsed = [];
      parsed = this.props.walkthrough[this.props.opt][firstLetter].filter((item) => {
        item = item.toLowerCase();
        if (item.indexOf(str) >= 0) {
          return item;
        }
      });
      this.setState({ parsed: parsed });
    }
  }

  set(item) {
    if (this.props.opt === 'hobbies') {
      this.props.setHobby(item);
    } else {
      this.props.setDefine(item);
    }

  }

  componentDidMount() {
    this.getSearch();
  }

  render() {
    if (this.state.parsed) {
      var parsed = this.state.parsed.map((item, i) => {
        if (i < 4) {
          return (
            <div className="hobby-define-result" key={i} onClick={() => {this.set(item);}}>
              {item.toLowerCase()}
              <div className="hobby-define-letter"><p>{item[0].toUpperCase()}</p></div>
            </div>
          )
        }
      });
    }

    return (
      <div className="search-hobbies">
        <div className="search">
          <input type="text" placeholder=" search" onChange={this.searchParsed} />
        </div>
        <div className="hobby-define-results">
          {parsed}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    walkthrough: state.walkthrough
  }
}

const mapDispatchToProps = {
  search: search,
  setHobby: setHobby,
  setDefine: setDefine
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
