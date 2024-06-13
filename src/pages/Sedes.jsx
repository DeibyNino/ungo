import React from "react";
import SedesCard from "../components/Sedes/SedesCard";
import dataSedes from "../assets/images/sedes/dataSedes";
import bgSedes from "../assets/images/home/cursosestudiantes.jpg";
import DevelopeByComponent from "../components/DevelopeByComponent";
import mayra from "../assets/images/students/mayra.png";

const Sedes = () => {
  console.log(dataSedes);
  return (
    <div className="min-h-screen p-8 text-slate-800 relative">
      <div
        className="mb-12 h-[50vh] bg-blue-900 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white bg-fixed bg-opacity-50 rounded-lg shadow-lg relative"
        style={{
          backgroundImage: `url(${bgSedes})`,
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-3xl lg:text-7xl font-bold text-yellow-500">
          Sedes
        </h1>
        {/* realiza una descripcion fake de sedes educativas con imagenes y texto */}
        <p className="text-xl mt-2 text-slate-50">
          Conoce nuestras sedes educativas, donde se imparten nuestros cursos y
          talleres.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {
          // Itera sobre el arreglo de sedes educativas y renderiza un componente SedesCard por cada uno
          dataSedes.map((sede, index) => (
            <SedesCard key={index} sede={sede} />
          ))
        }
      </div>
      <DevelopeByComponent name="Mayra Alejandra Ortiz Lopez" image={mayra} />
    </div>
  );
};

export default Sedes;
