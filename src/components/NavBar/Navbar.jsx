import React from "react";
import "../../styles/NavbarStyles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/ImageNavBar/Logo.png";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
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
          <Link to="/about-page">Nosotros</Link>
        </li>
        <li>
          <Link to="/donaciones-page">Donaciones</Link>
        </li>
      </ul>
      <div className="logos">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
