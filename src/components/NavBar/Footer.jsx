import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { ImYoutube2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { AiFillTikTok } from "react-icons/ai";
import "../../styles/FooterStyles.css";
import logo from "../../assets/ImageNavBar/Logo.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-around",
              gap: "0.5rem",
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
        <div>
          <div>
            <p> Contáctanos: 3160472448</p>
            <p> Gmail: estudiaungo@gmail.com</p>
            <p> Direccion: Cl 29 Sur No.19d-40</p>
            <p> Whatsapp: +57 3185233294</p>
          </div>
          <div className="redes">
            <a
              href="https://www.facebook.com/profile.php?id=61555748215327&mibextid=JKhxCcgn07XyEHyd"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImFacebook2 color="#fff" size={50} />
            </a>
            <a
              href="httpsg://https://www.facebook.com/profile.php?id=61555748215327"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImYoutube2 color="#fff" size={50} />
            </a>
            <a
              href="httpsg://https://www.facebook.com/profile.php?id=61555748215327"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImInstagram color="#fff" size={50} />
            </a>
            <a
              href="httpsg://https://www.facebook.com/profile.php?id=61555748215327"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillTikTok color="#fff" size={50} />
            </a>
          </div>
        </div>
      </div>
      <p>© 2024 UNGO. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
