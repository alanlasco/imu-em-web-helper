import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AtomicNumber from "./AtomicNumber";
import CapitalAndCountries from "./CapitalAndCountries";
import ChemicalSymbol from "./ChemicalSymbol";
import { Home } from "./Home";
import ReverseWord from "./ReverseWord";
import ScrambleWord from "./ScrambleWord";

export const AnimatedRoutes = () => {
  const location = useLocation(); // Asegúrate de que useLocation esté en el contexto de BrowserRouter

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/atomicnumber" element={<AtomicNumber />} />
        <Route path="/capitalsandcountries" element={<CapitalAndCountries />} />
        <Route path="/chemicalsymbol" element={<ChemicalSymbol />} />
        <Route path="/reverseword" element={<ReverseWord />} />
        <Route path="/scramble" element={<ScrambleWord />} />
      </Routes>
    </AnimatePresence>
  );
};
