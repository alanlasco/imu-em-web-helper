import React from "react";

import useRandomElement from "../hooks/getRandomElement";
import "../styles/Tools.css";

const Tools = () => {
  const { randomElement, getRandomElement } = useRandomElement();

  return (
    <div className="listOfTools">
      <h2>Chemical Symbol</h2>
      {randomElement ? (
        <div>
          <span>!{randomElement.name} = ? </span>
          <p>
            !Chemical Symbol {">"} {randomElement.symbol}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={getRandomElement}>Obtener otro elemento</button>
    </div>
  );
};

export default Tools;
