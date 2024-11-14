import React, { useState } from "react";
import useRandomElement from "../hooks/getRandomElement";
import "../styles/Tools.css";
import { ChemicalElement } from "../interfaces/Inchemicalelement"; // Asegúrate de que la ruta sea correcta

const ChemicalSymbol = () => {
  const { randomElement, getRandomElement } = useRandomElement();
  const [elementsList, setElementsList] = useState<ChemicalElement[]>([]); // Estado para almacenar los elementos
  const [isVisible, setIsVisible] = useState<boolean>(true); // Estado para controlar la visibilidad

  const handleAddElement = () => {
    if (randomElement) {
      setElementsList((prevList) => [...prevList, randomElement]); // Agrega el nuevo elemento al array
    }
    getRandomElement(); // Obtén un nuevo elemento
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
      <h2 className="titleEvent">🏹Chemical Symbol<span className="bow">🏹</span> </h2>
      <button onClick={handleAddElement}>Get element + symbol</button>
      </div>
      {/* Mostrar la lista de elementos si es visible */}
      {isVisible && (
        <>
          <h3 className="ElementText">Elements:</h3>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Chemical element #{index + 1}</p>{" "}
                <span>!{element.symbol} = ? </span>
                <p>
                  !{element.symbol} {">"} {element.name}
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

export default ChemicalSymbol;
