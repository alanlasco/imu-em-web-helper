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
    <div className="CardContainer">
      <div className="greenLight"></div>
      <div className="card">
      <h2 className="titleEvent">
        🏹Capitals & Countries<span className="bow">🏹</span>
      </h2>
      <p className="description"> Press the button to get a random country</p>
      <p className="description"> and its capital; Suggestion: keep an eye</p>
      <p className="description"> on Player's answers.</p>
      <p className="description"> Some capitals are out-dated </p>
      <button onClick={handleAddElement}>Get a Country + Capital</button>
      </div>
      {/* Mostrar la lista de elementos si es visible */}
      {isVisible && (
        <>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Cap!tals & Countries #{index + 1}</p>
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

