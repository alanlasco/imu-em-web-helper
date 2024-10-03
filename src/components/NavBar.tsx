import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("toggler");
  const [paginaActiva, setPaginaActiva] = useState<string>("home");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    /**/
    toggleIcon === "toggler"
      ? setToggleIcon("toggler toggle")
      : setToggleIcon("toggler");
  };

  return (
    <nav className="nav">
      <ul className={active}>
        <li
          onClick={() => setPaginaActiva("home")}
          className={paginaActiva === "home" ? "nav-item activo" : "nav-item"}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setPaginaActiva("atomicnumber")}
          className={
            paginaActiva === "atomicnumber" ? "nav-item activo" : "nav-item"
          }
        >
          <Link to="/atomicnumber">Atomic Number</Link>
        </li>
        <li
          onClick={() => setPaginaActiva("capitalsandcountries")}
          className={
            paginaActiva === "capitalsandcountries"
              ? "nav-item activo"
              : "nav-item"
          }
        >
          <Link to="/capitalsandcountries">Capitals & Countries</Link>
        </li>
        <li
          onClick={() => setPaginaActiva("chemicalsymbol")}
          className={
            paginaActiva === "chemicalsymbol" ? "nav-item activo" : "nav-item"
          }
        >
          <Link to="/chemicalsymbol">Chemical Symbol</Link>
        </li>
        <li
          onClick={() => setPaginaActiva("reverseword")}
          className={
            paginaActiva === "reverseword" ? "nav-item activo" : "nav-item"
          }
        >
          <Link to="/reverseword">Reversed Words</Link>
        </li>
        <li
          onClick={() => setPaginaActiva("scramble")}
          className={
            paginaActiva === "scramble" ? "nav-item activo" : "nav-item"
          }
        >
          <Link to="/scramble">Scramble</Link>
        </li>
      </ul>
      <div className="circle">
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;