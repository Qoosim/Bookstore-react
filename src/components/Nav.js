import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className="px-lg py-9 bg-neutral-50 border flex gap-10">
      <NavLink
        to="/"
        className="text-primary font-bold text-3xl font-mont"
      >
        Bookstore CMS
      </NavLink>
      <ul className="flex gap-10 text-sm font-medium uppercase">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
