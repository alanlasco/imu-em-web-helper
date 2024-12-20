import { useState, useEffect } from "react";
import { Country } from "../interfaces/InCountryContinent";

function useRandomCountryContinent() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [randomCountry, setRandomCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetch("https://alanlasco.github.io/imu-em-web-helper/continents.json") // Asegúrate de que el archivo esté en la carpeta public
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        // Selecciona un país aleatorio al cargar los datos
        if (data.length > 0) {
          setRandomCountry(data[Math.floor(Math.random() * data.length)]);
        }
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  // Función para actualizar el país aleatorio
  const getRandomCountry = () => {
    if (countries.length > 0) {
      setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
    }
  };

  return { randomCountry, getRandomCountry };
}

export default useRandomCountryContinent;
