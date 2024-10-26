import React, { useState, useEffect } from "react";
import "../styles/TextBox.css";
import mu from "../assets/mu.png";

export const ScriptBox = () => {
  const [value, setValue] = useState<string>(() => {
    return localStorage.getItem("script") || "";
  });

  useEffect(() => {
    localStorage.setItem("script", value);
  }, [value]);

  const clearScript = () => {
    setValue("");
    localStorage.removeItem("script");
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
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write your Script here...."
        rows={4}
        cols={50}
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
        }}
      />

      <button className="buttonClear" onClick={clearScript}>
        Clear Script
      </button>
    </div>
  );
};

export default ScriptBox;
