import React, { useState } from "react";
import { Winner } from "./Winner"; // Asegúrate de que la ruta sea correcta

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
      <div className="winnersContainer">
        <article className="configWinner">
          <span>
            <label htmlFor="goldCredits">Amount of GC: </label>
            <input
              type="number"
              name="goldCredits"
              value={goldCredits}
              onChange={handleGoldCreditsChange}
            />
            <label htmlFor="imes">Amount of IMES: </label>
            <input
              type="number"
              name="imes"
              value={imes}
              onChange={handleImesChange}
            />
            <button onClick={addWinner}>Add Winner</button>
          </span>
        </article>

        <section className="List">
          <h2>Winners List:</h2>
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
          <h2>All Winners:</h2>
          {winners.map((winner, index) => (
            <div key={index}>
              <p>
                Name: {winner.name} | Event: {winner.event} | Times Won:{" "}
                {winner.times} | Gold Credits: {winner.goldCredits} | IMES:{" "}
                {winner.imes}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
