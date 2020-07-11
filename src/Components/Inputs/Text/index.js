import React, { Component } from 'react';
import { string, func } from 'prop-types';
import classnames from 'classnames';

import './style.css';

const noop = () => null;

export default class Text extends Component {
  state = { value: '' }

  handleChange = (e) => {
    const { handleChange } = this.props;
    const value = e.target.value;
    this.setState({ value });
    handleChange(value);
  }

  render() {
    const { value } = this.state;
    const { className } = this.props;
    return (
      <input className={classnames('oh-input', className)} type="text" value={value} onChange={this.handleChange} />
    )
  }
}

Text.defaultProps = {
  handleChange: noop
}

Text.propTypes = {
  handleChange: func,
  className: string,
}
