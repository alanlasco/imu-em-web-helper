import React, { useState } from "react";
import "../styles/Tools.css";
import useRandomMathProblem from "../hooks/getRandomMath";

const MathProblemComponent = () => {
  const { mathProblem, generateNewProblem } = useRandomMathProblem();
  const [problemsList, setProblemsList] = useState<{ problem: string; result: number }[]>([]); // Estado para almacenar los problemas
  const [isVisible, setIsVisible] = useState<boolean>(true); // Estado para controlar la visibilidad

  const handleAddProblem = () => {
    setProblemsList((prevList) => [...prevList, mathProblem]); // Agrega el nuevo problema a la lista
    generateNewProblem(); // Genera un nuevo problema
  };

  const handleClearList = () => {
    setProblemsList([]); // Vacía la lista de problemas
  };

  const handleHide = () => {
    setIsVisible(!isVisible); // Cambia la visibilidad de la lista
  };

  return (
   
    <div className="CardContainer">
      <div className="greenLight"></div>
      <div className="card">
      <h2 className="titleEvent">
        🏹Math<span className="bow">🏹</span>
      </h2>
      <p className="description"> Press the button to get a random math problem; to get the results, the problems are solved by an internal calculator</p>
      <button onClick={handleAddProblem}>Generate Math Problem</button>
      </div>
      {/* Mostrar la lista de problemas si es visible */}
      {isVisible && (
        <>
          <ul className="listItems">
            {problemsList.map((item, index) => (
              <li key={index}>
                <p>!Math #{index + 1}</p>
                <span>! {item.problem} = ? </span>
                <p>
                  ! Answer {">"} {item.result}
                </p>
                <hr className="separador" />
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

export default MathProblemComponent;

