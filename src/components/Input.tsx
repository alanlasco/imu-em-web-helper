import React, { useState, ChangeEvent } from "react";

export const InputExample = () => {
  // Configura el estado para el valor del input
  const [inputValue, setInputValue] = useState<string>("");

  // Maneja el cambio en el input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Introduce algo:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <p>Valor del input: {inputValue}</p>
    </div>
  );
};
