import React from "react";
import "../../styles/NavbarStyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sedes-page">Sedes</Link>
        </li>
        <li>
          <Link to="/contact-page">Contactanos</Link>
        </li>
        <li>
          <Link to="/cursos-page">Cursos</Link>
        </li>
        <li>
          <Link to="/about-page">About</Link>
        </li>
        <li>
          <Link to="/donaciones-page">Donaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
