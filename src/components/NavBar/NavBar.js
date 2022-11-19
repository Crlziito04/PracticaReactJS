import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo">
        <a Classname="nav-link" href="#">
          Logo Inicio
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
          🛒<span>0</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
