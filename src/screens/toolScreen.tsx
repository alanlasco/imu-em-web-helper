import React from "react";
import { BrowserRouter } from "react-router-dom";

import Tools from "../components/Tools";
import "../styles/ToolScreen.css";
import { ScriptPlusWinners } from "../components/ScriptPlusWinners";
export const ToolScreen = () => {
  return (
    <>
      <BrowserRouter>
        <div className="ToolScreenContainer">
          <aside className="left">
            <ScriptPlusWinners />
          </aside>
          <aside className="right">
            <Tools />
          </aside>
        </div>
      </BrowserRouter>
    </>
  );
};
