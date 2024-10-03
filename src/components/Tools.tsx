import React from "react";
import ChemicalSymbol from "./ChemicalSymbol";
import "../styles/Tools.css";
import AtomicNumber from "./AtomicNumber";
import CapitalAndCountries from "./CapitalAndCountries";
import ReverseWord from "./ReverseWord";

export const Tools = () => {
  return (
    <div className="listOfTools">
      <ChemicalSymbol />
      <AtomicNumber />
      <CapitalAndCountries />
      <ReverseWord />
    </div>
  );
};

export default Tools;
