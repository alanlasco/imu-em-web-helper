import React, { useState, useEffect } from "react";
import mu from "../assets/mu.png";
import "../styles/ListOfWinners.css";

export const ListOfWinners = () => {
  const [goldCredits, setGoldCredits] = useState<number | string>(500);
  const [imes, setImes] = useState<number | string>(1);
  const [winners, setWinners] = useState<
    {
      name: string;
      event: string;
      times: number;
      goldCredits: number;
      imes: number;
    }[]
  >(() => {
    const storedWinners = localStorage.getItem("winners");
    return storedWinners ? JSON.parse(storedWinners) : [];
  });

  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [times, setTimes] = useState(1);

  // Guardar los ganadores en el local storage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("winners", JSON.stringify(winners));
  }, [winners]);

  const handleGoldCreditsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGoldCredits(value === "" ? "" : Number(value));
  };

  const handleImesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setImes(value === "" ? "" : Number(value));
  };

  const addWinner = () => {
    if (name && event) {
      // Solo agrega si hay un nombre y evento
      setWinners((prevWinners) => [
        ...prevWinners,
        {
          name,
          event,
          times,
          goldCredits: Number(goldCredits),
          imes: Number(imes),
        },
      ]);
      // Limpiar campos después de agregar
      setName("");
      setEvent("");
      setTimes(1);
    }
  };

  // Función para limpiar la lista de ganadores
  const clearWinners = () => {
    setWinners([]);
    localStorage.removeItem("winners"); // Limpiar también el local storage
  };

  return (
    <>
      <article className="configWinner">
        <div className="greenLight"></div>
        <div className="container">
          <div className="titleContainer">
            <img className="muImg" src={mu} alt="MU Light" />
            <span className="titleSection">List your Winners:</span>
          </div>
          <p className="description">Set Multipliers: </p>
          <span>
            <label htmlFor="goldCredits">Amount of GC: </label>
            <input
              className="inputGoldCredits"
              type="number"
              name="goldCredits"
              value={goldCredits}
              onChange={handleGoldCreditsChange}
            />
            <label htmlFor="imes">Amount of IMES: </label>
            <input
              className="inputImes"
              type="number"
              name="imes"
              value={imes}
              onChange={handleImesChange}
            />
          </span>
        </div>
      </article>

      <div className="winnersContainer">
        <div className="greenLight"></div>
        <div className="container">
          <section className="List">
            <p className="titleSectionSmaller">Add Winner:</p>
            <div className="textContainer">
              <span className="nameText">Winner: </span>
              <span className="eventsText">Event/s: </span>
            </div>
            <input
              className="inputText"
              type="text"
              placeholder="IGN"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inputText"
              type="text"
              placeholder="Event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            />
            <button onClick={addWinner}>Add Winner</button>
            <button className="buttonClear" onClick={clearWinners}>
              Clear List
            </button>{" "}
            {/* Botón para limpiar */}
          </section>

          <section className="WinnersOutput">
            <p className="titleSectionSmaller">All Winners:</p>
            {winners.map((winner, index) => (
              <div key={index}>
                <p className="description">
                  Name: {winner.name} | Event: {winner.event} | GC:{" "}
                  {winner.goldCredits} | IMES: {winner.imes}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
