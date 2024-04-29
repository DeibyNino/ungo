import Welcome from "../components/Home/Welcome";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <div>
      <h1 className="titulo-home">Home</h1>
      <Welcome />
      <div className="section section2">seccion 2</div>
      <div className="section section3">seccion 3</div>
    </div>
  );
};

export default Home;
