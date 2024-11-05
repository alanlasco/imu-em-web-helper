import React, { useState } from "react";
import "../styles/Tools.css";
import { ReversedWord } from "../interfaces/InReversedWord";

const ScrambleWord = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [elementsList, setElementsList] = useState<ReversedWord[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

  const shuffleWord = (word: string): string => {
    return word
      .split("") // Convierte la palabra en un array de letras
      .sort(() => Math.random() - 0.5) // Desordena el array aleatoriamente
      .join("");
  };

  const handleAddElement = () => {
    if (inputValue) {
      const shuffledValue = shuffleWord(inputValue);
      const newElement: ReversedWord = {
        original: inputValue,
        reversed: shuffledValue,
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
    <div className="ChemicalSymbolContainer">
      <h2 className="titleEvent">🏹Scramble<span className="bow">🏹</span> </h2>
      <label>
        <span className="inputToolsText">Word to be Scrambled: </span>
        <input
          className="inputTools"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="e.g Lorencia"
        />
      </label>
      <button onClick={handleAddElement}>Add word</button>

      {/* Mostrar la lista de palabras desordenadas si es visible */}
      {isVisible && (
        <>
          <ul className="listItems">
            {elementsList.map((element, index) => (
              <li key={index}>
                <p>!Scramble #{index + 1}</p>
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

      {/* Botón para limpiar la lista */}
      <button onClick={handleClearList}className="buttonClear">
        Clear List
      </button>
    </div>
  );
};

export default ScrambleWord;
