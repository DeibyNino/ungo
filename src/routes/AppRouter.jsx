import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sedes from "../pages/Sedes";
import Layout from "../layouts/Layout";
import Contact from "../pages/Contact";

// El AppRouter es el componente que se encarga de manejar las rutas de la aplicación.
// En este caso, se está utilizando el Router de React Router Dom, el cual es un componente que se encarga de manejar las rutas de la aplicación.
// Dentro del Router, se definen las rutas de la aplicación utilizando el componente Route.
// Cada ruta se define con el componente Route, el cual recibe dos propiedades: path y element.
// La propiedad path define la ruta de la aplicación, y la propiedad element define el componente que se renderizará cuando se acceda a esa ruta.
// En este caso, se está definiendo una ruta principal "/" que renderiza el componente Layout, el cual contiene el componente Home.
// Dentro del componente Layout, se utiliza el componente Outlet de React Router Dom para renderizar el contenido de las rutas hijas.
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sedes-page" element={<Sedes />} />
          <Route path="/contact-page" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
