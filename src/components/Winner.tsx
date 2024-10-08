import React, { useState, useEffect } from "react";
import { WinnerProps } from "../types/winnerType";
import "../styles/Winner.css";

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
    <div className="Winner">
      <input
        className="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />

      <input
        className="times"
        type="number"
        placeholder="Times Won"
        value={times}
        onChange={handleTimesChange}
      />

      <input
        className="events"
        type="text"
        placeholder="Event Types"
        value={event}
        onChange={handleEventChange}
      />
      <span>
        Gold Credits: {goldCredits * times}, IMES: {imes * times}
      </span>
    </div>
  );
};
