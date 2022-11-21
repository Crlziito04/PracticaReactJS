import React from "react";
import "../CarWidget/CarWidget.js";
import CarWidget from "../CarWidget/CarWidget.js";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo">
        <a Classname="nav-link" href="#">
          CompraOnline
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <a className="nav-list" href="#">
            Compras
          </a>
        </li>
        <li>
          <a className="nav-list" href="#">
            Categorias
          </a>
        </li>
        <li>
          <a className="nav-list" href="#">
            Ofertas
          </a>
        </li>
        <li>
          <CarWidget />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
