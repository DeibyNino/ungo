import React from "react";
import fondo from "../assets/imagesContact/ungo.jpg";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/ContactStyles.css";

import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <body>
      <section className="contact-section">
        <h2 className="titulo">Contáctanos</h2>

        <div className="imagenes">
          <img src={fondo} alt="Fondo" />
        </div>

        <div className="container">
          <div className="data-contact">
            <p className="contact-info">
              <FaPhoneAlt size={30} className="icon phone" />
              Telefono: <span> +57 3160472448 </span>
            </p>
            <p className="contact-info">
              <FaMapMarkedAlt size={30} className="icon address" />
              Dirección Principal: <span> Cl 29 sur No.19d-40 </span>
            </p>
            <p className="contact-info">
              <SiGmail size={30} className="icon email" />
              Gmail: <span> estudiaungo@gmail.com </span>
            </p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </body>
  );
};

export default Contact;
