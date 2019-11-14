import React from 'react';

const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </div>
  </nav>
);

export default NavBar;
