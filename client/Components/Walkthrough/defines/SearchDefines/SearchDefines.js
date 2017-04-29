import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDefines } from '../../../../redux/walkthroughReducer';
import { setDefine } from '../../../../redux/walkthroughReducer';
import axios from 'axios';

class SearchDefines extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parseDefines: []
    }
    this.getSearchDefines = this.getSearchDefines.bind(this);
    this.searchParsedDefines = this.searchParsedDefines.bind(this);
    this.setDefine = this.setDefine.bind(this);
  }
  //need to set state for parsedDefines
  getSearchDefines() {
    axios.get('/defines').then((defines) => {
      this.props.searchDefines(defines.data);
    });
  }

  searchParsedDefines(e) {
    var str = e.target.value;
    if (str) {
      var firstLetter = str[0].toUpperCase();
      var parsedDefines = [];
      parsedDefines = this.props.defines[firstLetter].filter((define) => {
        define = define.toLowerCase();
        if (define.indexOf(str) >= 0) {
          return define;
        }
      });
      this.setState({ parsedDefines: parsedDefines });
    }
  }

  setDefine(define) {
    this.props.setDefine(define);
  }

  componentDidMount() {
    this.getSearchDefines();
  }

  render() {
    if (this.state.parsedDefines) {
      var parsedDefines = this.state.parsedDefines.map((define, i) => {
        if (i < 4) {
          return (
            <div className="define-result" key={i} onClick={() => {this.setDefine(define);}}>
              {define.toLowerCase()}
              <div className="define-letter"><p>{define[0].toUpperCase()}</p></div>
            </div>
          )
        }
      });
    }

    return (
      <div className="search-defines">
        <div className="search">
          <input type="text" placeholder=" search" onChange={this.searchParsedDefines} />
        </div>
        <div className="define-results">
          {parsedDefines}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    defines: state.walkthrough.defines
  }
}

const mapDispatchToProps = {
  searchDefines: searchDefines,
  setDefine: setDefine
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDefines);
