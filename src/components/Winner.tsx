import React, { useState, useEffect } from "react";

type WinnerProps = {
  onWinnerChange: (
    name: string,
    times: number,
    event: string,
    goldCredits: number,
    imes: number
  ) => void;
  goldCredits: number; // Valor fijo
  imes: number; // Valor fijo
};

export const Winner: React.FC<WinnerProps> = ({
  onWinnerChange,
  goldCredits,
  imes,
}) => {
  const [name, setName] = useState<string>("");
  const [times, setTimes] = useState<number>(1);
  const [event, setEvent] = useState<string>("");

  useEffect(() => {
    // Notificar cambios cada vez que se actualiza un valor
    onWinnerChange(name, times, event, goldCredits * times, imes * times);
  }, [name, times, event, goldCredits, imes, onWinnerChange]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTimesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value === "" ? 0 : Number(value);
    setTimes(numericValue);
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Times Won"
        value={times}
        onChange={handleTimesChange}
      />
      <input
        type="text"
        placeholder="Event"
        value={event}
        onChange={handleEventChange}
      />
      <span>
        Gold Credits: {goldCredits * times}, IMES: {imes * times}
      </span>
    </div>
  );
};
