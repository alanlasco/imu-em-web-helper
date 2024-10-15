import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import { AnimatedRoutes } from "./AnimatedRoutes";
import "../styles/Tools.css"; // Asegúrate de que la ruta de los estilos sea correcta

export const Tools = () => {
  return (
    <div className="listOfTools">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
};

export default Tools;
