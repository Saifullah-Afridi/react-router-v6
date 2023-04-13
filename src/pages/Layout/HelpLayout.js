import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="page">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quas.
      </p>

      <nav className="help-nav">
        <NavLink to="faq">Veiw the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
