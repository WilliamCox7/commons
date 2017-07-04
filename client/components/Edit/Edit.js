import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hobbies from '../Hobbies/Hobbies';
import Attributes from '../Attributes/Attributes';
import Create from '../Create/Create';
import './Edit.scss';

class Edit extends Component {

  render() {
    return (
      <div className="Edit" style={this.props.editMode !== 'userinfo' ? {
        background: 'none', top: '100px', height: 'calc(100% - 100px)'
      } : null}>
        {this.props.editMode === 'hobbies' ? (
          <Hobbies dontshow={true} />
        ) : (null)}
        {this.props.editMode === 'attributes' ? (
          <Attributes dontshow={true} />
        ) : (null)}
        {this.props.editMode === 'userinfo' ? (
          <Create dontshow={true} />
        ) : (null)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Edit);
