import { useState, useEffect } from "react";
import { ChemicalElement } from "../interfaces/Inchemicalelement";

function useRandomCountry() {
  const [elements, setElements] = useState<ChemicalElement[]>([]);
  const [randomElement, setRandomElement] = useState<ChemicalElement | null>(
    null
  );

  useEffect(() => {
    fetch("/chemical-elements.json") // Asegúrate de que el archivo esté en la carpeta public
      .then((response) => response.json())
      .then((data) => {
        setElements(data);
        // Selecciona un país aleatorio al cargar los datos
        if (data.length > 0) {
          setRandomElement(data[Math.floor(Math.random() * data.length)]);
        }
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  // Función para actualizar el país aleatorio
  const getRandomCountry = () => {
    if (elements.length > 0) {
      setRandomElement(elements[Math.floor(Math.random() * elements.length)]);
    }
  };

  return { randomElement, getRandomCountry };
}

export default useRandomCountry;