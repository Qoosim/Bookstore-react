import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header>
      <NavLink to="/" className="text-logo">Bookstore CMS</NavLink>
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
          Categories
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
