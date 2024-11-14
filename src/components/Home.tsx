import React from "react";
import "../styles/Home.css"
import { MdMenu } from "react-icons/md";
import mu from "../assets/mu.png";
export const Home = () => {
  return <div className="HomeContaier">
    <div className="welcomeContainer">
    <p className="welcome"><img className="muImg" src={mu} alt="MU Light" />Welcome to:   </p>
    <strong className="Em">🏹Event Master's Web Tool<span className="bow">🏹</span> </strong> 
    </div>
   
    <p>Intructions: </p> 
    <p>
    Click on (<span className="menu"><MdMenu /></span>) </p>
    <p>There you will to find a list of NoN-PK events</p>
    
      <ul className="list">
      <li className="listEt">Events:</li>
      <br />
        <li className="listE">
          Atomic Number of the element
        </li>
        <li className="listE">
          Chemical Symbol of the element
        </li>
        <li className="listE">
          Math
        </li>
        <li className="listE">Capitals and countries</li>
        <br />
        <li className="listEt">Tools:</li>
        <ul className="list">
          <li className="listE">Reversed Words</li>
          <li className="listE">Scramble</li>
        </ul>
      </ul>
      <p>
        Each feature will generate a Random list
      </p>
      <p>Tools: Need words to generate the list</p>
      <p>This will allow you to make your script quicker</p>
      
      <ul className="list">
      <li className="listEt">Left side:</li>
      <br />
        <li className="listE">Script: Paste your script there </li>
        <li className="listE">Winners: List your winners there </li>
      </ul>

      <br />


  </div>;
};
