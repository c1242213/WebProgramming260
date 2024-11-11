// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar fixed-top navbar-dark">
        <a className="navbar-brand" href="#">Picture Perfect<sup>&reg;</sup></a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/play">Play</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
