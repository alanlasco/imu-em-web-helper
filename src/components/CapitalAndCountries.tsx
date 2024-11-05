import React, { useState } from "react";

import "../styles/Tools.css";
// Asegúrate de que la ruta sea correcta
import useRandomCountry from "../hooks/getRandomCountry";
import { Country } from "../interfaces/Incountry";

const CapitalAndCountries = () => {
  const { randomCountry, getRandomCountry } = useRandomCountry();
  const [elementsList, setElementsList] = useState<Country[]>([]); // Estado para almacenar los elementos
  const [isVisible, setIsVisible] = useState<boolean>(true); // Estado para controlar la visibilidad

  const handleAddElement = () => {
    if (randomCountry) {
      setElementsList((prevList) => [...prevList, randomCountry]); // Agrega el nuevo elemento al array
    }
    getRandomCountry(); // Obtén un nuevo elemento
  };

  const handleHide = () => {
    setIsVisible(!isVisible); // Cambia la visibilidad de la lista
  };

  return (
    <div className="ChemicalSymbolContainer">
      <h2 className="titleEvent">🏹Capitals & Countries<span className="bow">🏹</span> </h2>
      <button onClick={handleAddElement}>Get a Country + Capital</button>

      {/* Mostrar la lista de elementos si es visible */}
      {isVisible && (
        <>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Cap!tals & Countries #{index + 1}</p>{" "}
                {/* Muestra el número del elemento basado en el índice */}
                <span>!{element.country} = ? </span>
                <p>
                  !{element.country} {">"} {element.capital}
                </p>
                <hr className="separador"></hr>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={handleHide} className="hide">
        {isVisible ? "Hide List" : "Show List"}
      </button>
    </div>
  );
};

export default CapitalAndCountries;
