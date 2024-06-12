import Welcome from "../components/Home/Welcome";
import SedesHome from "../components/Home/section/SedesHome";
import CarruselHome from "../components/Home/CarruselHome";
import AboutHome from "../components/Home/section/AboutHome";
import DonationsHome from "../components/Home/section/DonationsHome";
import FooterHome from "../components/Home/section/FooterHome";
import Santiago from "../assets/images/students/santi.png";
import DevelopedByComponent from "../components/DevelopeByComponent";

import "../styles/HomeStyles.css"; // de esta manera solo se importan archivos con estilos css //

const Home = () => {
  return (
    <div className="main-home">
      {/* <h1 className="titulo-home">Home</h1> */}
      <CarruselHome />
      <Welcome />
      <SedesHome />
      <AboutHome />
      <DonationsHome />
      <FooterHome />
      <DevelopedByComponent name={"Santiago Torres Perdomo"} image={Santiago} />
    </div>
  );
};

export default Home;
