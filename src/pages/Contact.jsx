import React from "react";

import "../styles/ContactStyles.css";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="main-contact">
      <ContactForm/>
      <h1 className="titulo1 titulo">Titulo </h1>
      <h1 className="titulo">Contact Page</h1>
    </div>
  );
};

export default Contact;
