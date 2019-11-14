import React from 'react';
import {Link } from 'react-router-dom'

const NavItem = ({label, ...rest}) => (
  <li className="nav-item">
    <Link className='nav-link' {...rest}>{label}</Link>
  </li>
);

export default NavItem;
