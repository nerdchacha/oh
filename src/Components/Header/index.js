import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';

import './style.css';

const Header = ({ children, className }) => (
  <header className={classnames('oh-header', className)}>
    {children}
  </header >
);

Header.propTypes = {
  children: node.isRequired,
  className: string,
}

export default Header;
