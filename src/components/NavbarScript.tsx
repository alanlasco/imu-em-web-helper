import React from "react";
import "../styles/NavbarScript.css";

interface NavbarScriptProps {
  setActiveComponent: (component: "winnerslist" | "script") => void; // Prop para actualizar el componente activo
}

export const NavbarScript: React.FC<NavbarScriptProps> = ({
  setActiveComponent,
}) => {
  return (
    <nav className="nav2">
      <ul>
        <li>
          <button onClick={() => console.log("EM Section clicked")}>
            EM Section
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("winnerslist")}>
            Winner/s
          </button>
        </li>
        <li>
          <button onClick={() => setActiveComponent("script")}>Script</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarScript;
