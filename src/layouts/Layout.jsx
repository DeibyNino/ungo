import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/NavBar/Footer";

// El Layout es un componente que se encarga de definir la estructura de la aplicación.
// En este caso, el Layout es un componente funcional que recibe un prop children.
// El prop children es un prop especial que recibe todos los elementos hijos de un componente.
// En este caso, el Layout utiliza el prop children para renderizar el contenido de las rutas hijas.
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          paddingTop: "50px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
