import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Books
        </NavLink>
        <NavLink
          to="/category"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Category
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
