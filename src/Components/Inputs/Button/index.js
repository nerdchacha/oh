import React from 'react';
import { string, func, node } from 'prop-types';
import classnames from 'classnames';

import './style.css';

const Button = ({ className, children, handleClick, type }) => (
  <button className={classnames('oh-button', className)} type={type} onChange={handleClick}>{children}</button>
)

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  handleClick: func.isRequired,
  children: node.isRequired,
  className: string,
}

export default Button;