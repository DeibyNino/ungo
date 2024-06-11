import React from "react";
import "../styles/DevCompoent.css";
const DevelopeByComponent = ({ name, image }) => {
  return (
    <div className="dev-section">
      <h2>Desarrollado por:</h2>
      <div className="student">
        <p>{name}</p>
        <img src={image} alt="developer" />
      </div>
    </div>
  );
};

export default DevelopeByComponent;
