import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">Queerness in Sports</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <NavLink
            className="nav-link fw-bold"
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link fw-bold"
            activeClassName="active"
            to="/queer-athletes"
          >
            Queer Athletes
          </NavLink>
          <NavLink
            className="nav-link fw-bold"
            activeClassName="active"
            to="/media-analysis"
          >
            Media Analysis
          </NavLink>
          <NavLink
            className="nav-link fw-bold"
            activeClassName="active"
            to="/trans-athletes"
          >
            Trans Athletes
          </NavLink>
          <NavLink
            className="nav-link fw-bold"
            activeClassName="active"
            to="/league-actions"
          >
            League Actions
          </NavLink>
          <NavLink
            className="nav-link fw-bold"
            activeClassName="active"
            to="/attitude-changes"
          >
            Attitude Changes
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
