import React, { Component } from 'react';
import './EditNav.scss';

class EditNav extends Component {

  render() {
    return (
      <div className="EditNav" style={this.props.editMode === 'userinfo' ? ({
        background: 'white', boxShadow: '0px 3px 4px rgba(191, 191, 191, 0.25)'
      }): (null)}>
        {!this.props.editMode ? (
          <div onClick={this.props.done} className="done-button">done</div>
        ) : (
          <div className="action-buttons"
            style={this.props.editMode === 'status' ||
            this.props.editMode === 'userinfo' ? ({
            color: '#F26648'
          }) : (null)}>
            <div onClick={this.props.exit}>exit</div>
            <div onClick={this.props.save}>save</div>
          </div>
        )}
        {this.props.editMode !== 'status' && this.props.editMode ? (
          <div className="prompt">
            {this.props.editMode === 'hobbies' ? (
              "choose five hobbies"
            ) : (null)}
            {this.props.editMode === 'attributes' ? (
              "what defines you?"
            ) : (null)}
          </div>
        ) : (null)}
      </div>
    )
  }
}

export default (EditNav);
