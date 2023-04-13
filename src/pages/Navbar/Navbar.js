import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav">
        <h1>React-Router</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
};

export default Navbar;
