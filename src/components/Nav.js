import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const activeStyle = {
    color: 'rgb(51 65 85)',
  };

  return (
    <header className="flex item-center px-lg py-9 bg-neutral-50 border gap-10">
      <NavLink
        to="/"
        className="text-primary font-bold text-3xl font-mont"
      >
        Bookstore CMS
      </NavLink>
      <ul className="flex gap-10 text-sm font-medium uppercase">
        <li className="text-slate-500 font-mont tracking-widest">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Books
          </NavLink>
        </li>
        <li className="text-slate-500 font-mont tracking-widest">
          <NavLink
            to="/category"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <div
        className="flex items-center justify-center ml-auto text-primary border-2 border-slate-200 w-10 h-10 rounded-full"
      >
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};

export default Nav;
