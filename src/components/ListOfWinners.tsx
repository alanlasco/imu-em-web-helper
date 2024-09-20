import React, { useState } from "react";

export const ListOfWinners = () => {
  const [goldCredits, setGoldCredits] = useState<number | string>(200);
  const [imes, setImes] = useState<number | string>(1);

  const handleGoldCreditsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGoldCredits(value === "" ? "" : Number(value)); // No cambiar a número si está vacío
  };

  const handleImesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setImes(value === "" ? "" : Number(value));
  };
  return (
    <>
      <article className="configWinner">
        <span>
          <label htmlFor="goldCredits">Amount of GC: </label>
          <input
            type="number"
            name="goldCredits"
            id=""
            value={goldCredits}
            onChange={handleGoldCreditsChange} //e argumento que representa el cambio del input
          />
          <label htmlFor="imes">Amount of IMES: </label>
          <input
            type="number"
            name="imes"
            value={imes}
            onChange={handleImesChange}
          />
        </span>
      </article>
      <section className="List">
        <span>
          Winner {Number(goldCredits) * 2} {imes}
        </span>
      </section>
    </>
  );
};
