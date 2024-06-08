import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sedes from "../pages/Sedes";
import Layout from "../layouts/Layout";
import Contact from "../pages/Contact";
import Cursos from "../pages/Cursos";
import About from "../pages/About";
import Sistemas from "../pages/cursos/Sistemas";
import Donaciones from "../pages/Donaciones";
import Contabilidad from "../pages/cursos/Contabilidad";
import Ingles from "../pages/cursos/Ingles";
import PrimeraInfancia from "../pages/cursos/PrimeraInfancia";
import GestionEmpresarial from "../pages/cursos/GestionEmpresarial";
import Seguridadysaludeneltrabajo from "../pages/cursos/Seguridadysaludeneltrabajo";
import Preescolar from "../pages/cursos/Preescolar";

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
          <Route path="/cursos-page" element={<Cursos />} />
          <Route path="/cursos-page/sistemas" element={<Sistemas />} />
          <Route path="/cursos-page/contabilidad" element={<Contabilidad />} />
          <Route path="/cursos-page/ingles" element={<Ingles />} />
          <Route
            path="/cursos-page/primerainfancia"
            element={<PrimeraInfancia />}
          />
          <Route
            path="/cursos-page/gestionempresarial"
            element={<GestionEmpresarial />}
          />
          <Route
            path="/cursos-page/seguridadysaludeneltrabajo"
            element={<Seguridadysaludeneltrabajo />}
          />
          <Route path="/cursos-page/preescolar" element={<Preescolar />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/donaciones-page" element={<Donaciones />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
