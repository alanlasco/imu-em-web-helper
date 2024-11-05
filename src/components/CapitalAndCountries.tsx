import React, { useState } from "react";
import "../styles/Tools.css";
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

  const handleClearList = () => {
    setElementsList([]); // Vacía el array de elementos
  };

  const handleHide = () => {
    setIsVisible(!isVisible); // Cambia la visibilidad de la lista
  };

  return (
    <div className="ChemicalSymbolContainer">
      <h2 className="titleEvent">
        🏹Capitals & Countries<span className="bow">🏹</span>
      </h2>
      <button onClick={handleAddElement}>Get a Country + Capital</button>

      {/* Mostrar la lista de elementos si es visible */}
      {isVisible && (
        <>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Capitals & Countries #{index + 1}</p>
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

      {/* Botón para ocultar o mostrar la lista */}
      <button onClick={handleHide} className="hide">
        {isVisible ? "Hide List" : "Show List"}
      </button>

      {/* Botón para limpiar la lista */}
      <button onClick={handleClearList} className="buttonClear">
        Clear List
      </button>
    </div>
  );
};

export default CapitalAndCountries;

