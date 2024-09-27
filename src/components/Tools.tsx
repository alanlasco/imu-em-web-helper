import React from "react";
import ChemicalSymbol from "./ChemicalSymbol";
import "../styles/Tools.css";
import AtomicNumber from "./AtomicNumber";
export const Tools = () => {
  return (
    <div className="listOfTools">
      <ChemicalSymbol />
      <AtomicNumber />
    </div>
  );
};

export default Tools;
