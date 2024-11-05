import React, { useState } from "react";
import useRandomElement from "../hooks/getRandomElement";
import "../styles/Tools.css";
import { ChemicalElement } from "../interfaces/Inchemicalelement"; // Asegúrate de que la ruta sea correcta

const AtomicNumber = () => {
  const { randomElement, getRandomElement } = useRandomElement();
  const [elementsList, setElementsList] = useState<ChemicalElement[]>([]); // Estado para almacenar los elementos
  const [isVisible, setIsVisible] = useState<boolean>(true); // Estado para controlar la visibilidad

  const handleAddElement = () => {
    if (randomElement) {
      setElementsList((prevList) => [...prevList, randomElement]); // Agrega el nuevo elemento al array
    }
    getRandomElement(); // Obtén un nuevo elemento
  };

  const handleHide = () => {
    setIsVisible(!isVisible); // Cambia la visibilidad de la lista
  };

  return (
    <div className="ChemicalSymbolContainer">
      <h2 className="titleEvent">🏹Atomic Number<span className="bow">🏹</span> </h2>
      <button onClick={handleAddElement}>Get element + Atomic Number</button>

      {/* Mostrar la lista de elementos si es visible */}
      {isVisible && (
        <>
          <h3>Elements:</h3>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Atomic Number #{index + 1}</p>{" "}
                {/* Muestra el número del elemento basado en el índice */}
                <span>!{element.name} = ? </span>
                <p>
                  !{element.name} {">"} {element.atomicNumber}
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

export default AtomicNumber;
