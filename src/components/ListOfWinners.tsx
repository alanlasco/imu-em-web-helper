import React, { useState } from "react";

export const ListOfWinners = () => {
  const [goldCredits, setGoldCredits] = useState<number | string>(200);
  const [imes, setImes] = useState<number | string>(1);
  const [winners, setWinners] = useState<
    { goldCredits: number; imes: number }[]
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
    if (typeof goldCredits === "number" && typeof imes === "number") {
      setWinners([
        ...winners,
        { goldCredits: Number(goldCredits), imes: Number(imes) },
      ]);
    }
  };

  return (
    <>
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
        {winners.map((winner, index) => (
          <span key={index}>
            Winner {winner.goldCredits * 2} {winner.imes} <br />
          </span>
        ))}
      </section>
    </>
  );
};
