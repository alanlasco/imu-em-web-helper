import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./Home";
import { ListOfWinners } from "./ListOfWinners";
import { ScriptBox } from "./ScriptBox";

// Ensure that this component is used within a BrowserRouter context
export const AnimatedRoutesLeft = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ListOfWinners />} />
        <Route path="/script" element={<ScriptBox />} />
      </Routes>
    </AnimatePresence>
  );
};
