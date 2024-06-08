// CONFIGURACIÓN SECTION HOME //

import Welcome from "../components/Home/Welcome";
import SedesHome from "../components/Home/section/SedesHome";
import CarruselHome from "../components/Home/CarruselHome";
import AboutHome from "../components/Home/section/AboutHome";
import DonationsHome from "../components/Home/section/DonationsHome";
import FooterHome from "../components/Home/section/FooterHome";



import "../styles/HomeStyles.css"; // de esta manera solo se importan archivos con estilos css //

const Home = () => {
  return (
    <div>
      {/* <h1 className="titulo-home">Home</h1> */}
      <CarruselHome/>
      <Welcome/>
      <SedesHome/>
      <AboutHome/>
      <DonationsHome/>
      <FooterHome/>
      
      {/* <div className="section section3">section 3</div> */}
    </div>
  );
};

export default Home;
