import React, { useState } from "react";
import { Winner } from "./Winner"; // Asegúrate de que la ruta sea correcta
import mu from "../assets/mu.png";
import "../styles/ListOfWinners.css";
// Componente principal que maneja la lista de ganadores
export const ListOfWinners = () => {
  const [goldCredits, setGoldCredits] = useState<number | string>(200);
  const [imes, setImes] = useState<number | string>(1);
  const [winners, setWinners] = useState<
    {
      name: string;
      event: string;
      times: number;
      goldCredits: number;
      imes: number;
    }[]
  >([]);

  const handleGoldCreditsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGoldCredits(value === "" ? "" : Number(value));
  };

  const handleImesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setImes(value === "" ? "" : Number(value));
  };

  const addWinner = () => {
    setWinners([
      ...winners,
      {
        name: "",
        event: "",
        times: 1,
        goldCredits: Number(goldCredits),
        imes: Number(imes),
      },
    ]);
  };

  const handleWinnerChange = (
    index: number,
    name: string,
    times: number,
    event: string,
    goldCredits: number,
    imes: number
  ) => {
    const updatedWinners = [...winners];
    updatedWinners[index] = {
      ...updatedWinners[index],
      name,
      times,
      event,
      goldCredits,
      imes,
    };
    setWinners(updatedWinners);
  };

  return (
    <>
      <article className="configWinner">
        <div className="titleContainer">
          <img className="muImg" src={mu} alt="MU Light" />
          <span className="titleSection">List your Winners:</span>
        </div>
        <p className="description">Set the Multipliers: </p>
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
      </article>

      <div className="winnersContainer">
        <section className="List">
          <span>
            <p className="titleSectionSmaller">Winners List:</p>
            <button onClick={addWinner}>Add Winner</button>
          </span>
          <div className="textContainer">
            <span className="nameText">Winner: </span>
            <span className="timesText">T/: </span>
            <span className="eventsText">Event/s: </span>
          </div>
          {winners.map((winner, index) => (
            <Winner
              key={index}
              onWinnerChange={(name, times, event, goldCredits, imes) =>
                handleWinnerChange(index, name, times, event, goldCredits, imes)
              }
              goldCredits={Number(goldCredits)} // Asegúrate de que sea un número
              imes={Number(imes)} // Asegúrate de que sea un número
            />
          ))}
        </section>

        <section className="WinnersOutput">
          <p className="titleSectionSmaller">All Winners:</p>
          {winners.map((winner, index) => (
            <div key={index}>
              <p className="description">
                Name: {winner.name} | Event: {winner.event} | Times Won:{" "}
                {winner.times} | GC: {winner.goldCredits} | IMES: {winner.imes}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
