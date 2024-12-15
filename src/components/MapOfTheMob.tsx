import React, { useState } from "react";
import useRandomElement from "../hooks/getRandomElement";
import "../styles/Tools.css";
import { ChemicalElement } from "../interfaces/Inchemicalelement"; // Asegúrate de que la ruta sea correcta
import { Mob } from "../interfaces/InMob";
import useRandomMob from "../hooks/getRandomMob";

const MapOfTheMobs = () => {
  const { randomMob, getRandomMob } = useRandomMob();
  const [elementsList, setElementsList] = useState<Mob[]>([]); // Estado para almacenar los elementos
  const [isVisible, setIsVisible] = useState<boolean>(true); // Estado para controlar la visibilidad

  const handleAddElement = () => {
    if (randomMob) {
      setElementsList((prevList) => [...prevList, randomMob]); // Agrega el nuevo elemento al array
    }
    getRandomMob(); 
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
      <h2 className="titleEvent">🏹Map of the mobs<span className="bow">🏹</span> </h2>
      <p className="description">Press the button to get a Random Mob and the map where it belongs</p>
      <button onClick={handleAddElement}>Get Mob + Map</button>
      </div>
      {/* Mostrar la lista de elementos si es visible */}
      {isVisible && (
        <>
          <h3 className="ElementText">Elements:</h3>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Map of the Mobs #{index + 1}</p>{" "}
                <span>!{element.name} = ? </span>
                <p>
                  !{element.name} {">"} {element.map}
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

export default MapOfTheMobs;
