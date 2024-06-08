import React from "react";
import { ImFacebook2 } from "react-icons/im";
import "../../styles/FooterStyles.css";
import logo from "../../assets/ImageNavBar/Logo.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div>
        <a
          href="httpsg://https://www.facebook.com/profile.php?id=61555748215327"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ImFacebook2 color="#00f" size={50} />
        </a>
      </div>
      <div className="footer">
        <nav>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: "1rem",
            }}
          >
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/sedes-page">Sedes</a>
            </li>
            <li>
              <a href="/contact-page">Contactanos</a>
            </li>
            <li>
              <a href="/cursos-page">Cursos</a>
            </li>
            <li>
              <a href="/about-page">Nosotros</a>
            </li>
            <li>
              <a href="/donaciones-page">Donaciones</a>
            </li>
          </ul>
        </nav>
      </div>
      <p>© 2024 UNGO. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
