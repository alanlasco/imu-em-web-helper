import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./NavBar";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { AnimatedRoutesLeft } from "./AnimatedRoutesLeft";
import { NavbarScript } from "./NavbarScript";

export const ScriptPlusWinners = () => {
  return (
    <div className="listForScript">
      <BrowserRouter>
        <NavbarScript />
        <AnimatedRoutesLeft />
      </BrowserRouter>
    </div>
  );
};
