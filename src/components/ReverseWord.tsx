import React, { useState } from "react";
import "../styles/Tools.css";
import { ReversedWord } from "../interfaces/InReversedWord";

const ReverseWord = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [elementsList, setElementsList] = useState<ReversedWord[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

  const handleAddElement = () => {
    if (inputValue) {
      const reversedValue = inputValue.split("").reverse().join("");
      const newElement: ReversedWord = {
        original: inputValue,
        reversed: reversedValue,
      };
      setElementsList((prevList) => [...prevList, newElement]);
      setInputValue(""); // Limpia el input después de agregarlo a la lista
    }
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
        🏹Reversed Words<span className="bow">🏹</span>
      </h2>
      <label>
        <span className="inputToolsText">Word to be Reversed: </span>
        <input
          className="inputTools"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="e.g Lorencia"
        />
      </label>
      <button onClick={handleAddElement}>Add word</button>
      </div>

      {/* Mostrar la lista de palabras invertidas si es visible */}
      {isVisible && (
        <>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Reversed Word #{index + 1}</p>
                <p>!{element.reversed} = ?</p>
                <p>
                  !Answer {">"} {element.original}
                </p>
                <hr className="separador" />
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Botón para ocultar o mostrar la lista */}
      <button onClick={handleHide} className="hide">
        {isVisible ? "Hide list" : "Show list"}
      </button>

      {/* Botón para limpiar la lista */}
      <button onClick={handleClearList} className="buttonClear">
        Clear List
      </button>
    </div>
  );
};

export default ReverseWord;
