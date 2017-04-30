import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHobby } from '../../../../redux/walkthroughReducer';
import { setDefine } from '../../../../redux/walkthroughReducer';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parsed: [],
      gotData: false
    }
    this.searchParsed = this.searchParsed.bind(this);
    this.set = this.set.bind(this);
  }

  searchParsed(e) {
    var str = e.target.value;
    if (str) {
      var firstLetter = str[0].toUpperCase();
      var parsed = [];
      parsed = this.props.walkthrough[this.props.opt][firstLetter].filter((item) => {
        item = item.toLowerCase();
        if (item.indexOf(str.toLowerCase()) >= 0) {
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
          <input type="text" id="srch" placeholder=" search" onChange={this.searchParsed} />
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
  setHobby: setHobby,
  setDefine: setDefine
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
