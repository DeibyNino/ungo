import React from "react";

import "../styles/ContactStyles.css";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="main-contact">
      <ContactForm/>
      <h1 className="titulo1 titulo">CONTACTANOS </h1>
      <section className="contact">
      <div className="data-contact">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <form className="form-contact">
                        <div className="input-box-contact">
                            <input type="text" name="username" ></input>
                           </div>  
                           <div className="input-box-contact">
                            <input type="text" name="correoelectronico"></input>
                            <div className="input-box-contact">
                            <input type="text" placeholder="Asunto"></input>
                           
                        </div>
            
                        <div className="input-box-contact">
                            <textarea placeholder="Escribe tu mensaje..."></textarea>
                        </div>
                        <button type="submit">contactanos</button>
                           
                        </div>
                     </form>
      </section>
    </div>
  );
};

export default Contact;
