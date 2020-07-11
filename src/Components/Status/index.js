import React, { Component } from 'react';

class Status extends Component {
  render() {
    const { hashedUrl } = this.props;
    return (
      <a href={`${window.origin}/api/redirect?hadhedUrl=${hashedUrl}`} target="blank">{`${window.origin}/${hashedUrl}`}</a>
    )
  }
}

export default Status;