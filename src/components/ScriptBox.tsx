import React, { useState } from "react";
import "../styles/TextBox.css";
import mu from "../assets/mu.png";
export const ScriptBox = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value); // Actualiza el estado con el valor del textarea
  };

  return (
    <div className="inputContainer">
      <div className="titleContainer">
        <img className="muImg" src={mu} alt="MU Light" />
        <span className="titleSection">Your Script:</span>
      </div>

      <textarea
        className="inputTextBox"
        value={value}
        onChange={handleChange}
        placeholder="Write your Script here...."
        rows={4}
        cols={50}
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default ScriptBox;
