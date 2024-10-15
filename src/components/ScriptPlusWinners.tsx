import React, { useState } from "react";

import NavbarScript from "./NavbarScript";
import { ScriptBox } from "./ScriptBox";
import { ListOfWinners } from "./ListOfWinners";

export const ScriptPlusWinners = () => {
  const [activeComponent, setActiveComponent] = useState<
    "winnerslist" | "script"
  >("winnerslist");

  const renderComponent = () => {
    if (activeComponent === "winnerslist") {
      return <ListOfWinners />;
    } else {
      return <ScriptBox />;
    }
  };

  return (
    <div>
      <NavbarScript setActiveComponent={setActiveComponent} />
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ScriptPlusWinners;
