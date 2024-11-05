import React from "react";
import "../styles/NavbarScript.css";
import muLightImage from "../assets/i-MU-light.png";
import { Link } from "react-router-dom";

interface NavbarScriptProps {
  setActiveComponent: (component: "winnerslist" | "script") => void; // Prop para actualizar el componente activo
}

export const NavbarScript: React.FC<NavbarScriptProps> = ({
  setActiveComponent,
}) => {
  return (
    <nav className="nav2">
      <div className="greenLight"></div>
      <ul>
      <Link to="/imu-em-web-helper"><img className="imuImg" src={muLightImage} alt="MU Light" /></Link>

        <li>
          <a
            href="https://forum.infinitymu.net/#event-masters-area.350"
            target="_blank"
          >
            EM Section
          </a>
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
