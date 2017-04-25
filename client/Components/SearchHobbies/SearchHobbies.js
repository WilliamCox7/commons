import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchHobbies } from '../../redux/hobbyReducer';
import { setHobby } from '../../redux/hobbyReducer';
import axios from 'axios';

class SearchHobbies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parseHobbies: []
    }
    this.getSearchHobbies = this.getSearchHobbies.bind(this);
    this.searchParsedHobbies = this.searchParsedHobbies.bind(this);
    this.setHobby = this.setHobby.bind(this);
  }
  //need to set state for parsedHobbies
  getSearchHobbies() {
    axios.get('/hobbies').then((hobbies) => {
      this.props.searchHobbies(hobbies.data);
    });
  }

  searchParsedHobbies(e) {
    var str = e.target.value;
    if (str) {
      var firstLetter = str[0].toUpperCase();
      var parsedHobbies = [];
      parsedHobbies = this.props.hobbies[firstLetter].filter((hobby) => {
        hobby = hobby.toLowerCase();
        if (hobby.indexOf(str) >= 0) {
          return hobby;
        }
      });
      this.setState({ parsedHobbies: parsedHobbies });
    }
  }

  setHobby(hobby) {
    this.props.setHobby(hobby);
  }

  componentDidMount() {
    this.getSearchHobbies();
  }

  render() {
    if (this.state.parsedHobbies) {
      var parsedHobbies = this.state.parsedHobbies.map((hobby, i) => {
        if (i < 4) {
          return (
            <div className="hobby-result" key={i} onClick={() => {this.setHobby(hobby);}}>
              {hobby.toLowerCase()}
              <div className="hobby-letter"><p>{hobby[0].toUpperCase()}</p></div>
            </div>
          )
        }
      });
    }

    return (
      <div className="search-hobbies">
        <div className="search">
          <input type="text" placeholder=" search" onChange={this.searchParsedHobbies} />
        </div>
        <div className="hobby-results">
          {parsedHobbies}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hobbies: state.hobby.hobbies
  }
}

const mapDispatchToProps = {
  searchHobbies: searchHobbies,
  setHobby: setHobby
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHobbies);
