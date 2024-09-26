import React from "react";
import { ListOfWinners } from "../components/ListOfWinners";
import Tools from "../components/Tools";
import "../styles/ToolScreen.css";
export const ToolScreen = () => {
  return (
    <>
      <div className="ToolScreenContainer">
        <aside className="left">
          <ListOfWinners />
        </aside>
        <aside className="right">
          <Tools />
        </aside>
      </div>
    </>
  );
};
