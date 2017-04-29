import React, { Component } from 'react';
import './Next.scss';

class Next extends Component {

  render() {
    return (
      <div>
        {this.props.condition ? (
          <div className="next">
            <a href={"/#/" + this.props.redirect}><div className="next-text">skip</div></a>
          </div>
        ) : (
          <div className="next">
            <a href={"/#/" + this.props.redirect}><div className="next-text">next</div></a>
          </div>
        )}
      </div>
    )
  }
}

export default Next;
