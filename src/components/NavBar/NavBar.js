import React from "react";
import "../CarWidget/CarWidget.js";
import CarWidget from "../CarWidget/CarWidget.js";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo">
        <NavLink as={Link} Classname="nav-link" to="/">
          CompraOnline
        </NavLink>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink as={Link} className="nav-list" to="/categoria/tv">
            TV
          </NavLink>
        </li>
        <li>
          <NavLink as={Link} className="nav-list" to="/categoria/consolas">
            Consolas
          </NavLink>
        </li>
        <li>
          <NavLink as={Link} className="nav-list" to="cart">
            <CarWidget />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
