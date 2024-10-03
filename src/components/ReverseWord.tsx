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

  const handleHide = () => {
    setIsVisible(!isVisible); // Cambia la visibilidad de la lista
  };

  return (
    <div className="ChemicalSymbolContainer">
      <h2>Reverse Word</h2>
      <label>
        Word to be Reversed:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="e.g Lorencia"
        />
      </label>
      <button onClick={handleAddElement}>Add word</button>

      {/* Mostrar la lista de palabras invertidas si es visible */}
      {isVisible && (
        <>
          <ul className="list">
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
      <button onClick={handleHide} className="hide">
        {isVisible ? "Hide list" : "Show list"}
      </button>
    </div>
  );
};

export default ReverseWord;
