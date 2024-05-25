import React from "react";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div>
        <a
          href="httpsg://www.facebook.com/UNGO-Universidad-ONG-108101394678013"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ImFacebook2 color="#00f" size={50} />
        </a>
      </div>
      <p>© 2021 UNGO. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
