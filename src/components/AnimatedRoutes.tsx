import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AtomicNumber from "./AtomicNumber";
import CapitalAndCountries from "./CapitalAndCountries";
import ChemicalSymbol from "./ChemicalSymbol";
import { Home } from "./Home";
import ReverseWord from "./ReverseWord";
import ScrambleWord from "./ScrambleWord";
import MathProblemComponent from "./Math"; // Asegúrate de importar el componente correcto
import ContinentAndCountries from "./CountriesAndContinents";
import MapOfTheMobs from "./MapOfTheMob";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/imu-em-web-helper" element={<Home />} />
        <Route
          path="/imu-em-web-helper/atomicnumber"
          element={<AtomicNumber />}
        />
        <Route
          path="/imu-em-web-helper/capitalsandcountries"
          element={<CapitalAndCountries />}
        />
        <Route
          path="/imu-em-web-helper/chemicalsymbol"
          element={<ChemicalSymbol />}
        />
        <Route
          path="/imu-em-web-helper/reverseword"
          element={<ReverseWord />}
        />
        <Route path="/imu-em-web-helper/scramble" element={<ScrambleWord />} />
        <Route
          path="/imu-em-web-helper/math"
          element={<MathProblemComponent />}
        />{" "}
        {/* Usa el componente importado */}
        <Route
          path="/imu-em-web-helper/countriesandcontinent"
          element={<ContinentAndCountries />}
        />
        <Route
          path="/imu-em-web-helper/mapofthemobs"
          element={<MapOfTheMobs />}
        />
      </Routes>
    </AnimatePresence>
  );
};
