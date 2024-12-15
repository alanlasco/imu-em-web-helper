import { useState, useEffect } from "react";
import { Mob } from "../interfaces/InMob";

function useRandomMob() {
  const [mobs, setMobs] = useState<Mob[]>([]);  // Lista de mobs
  const [randomMob, setRandomMob] = useState<Mob | null>(null); // Mob aleatorio

  useEffect(() => {
    // Carga el JSON desde la URL
    fetch("https://alanlasco.github.io/imu-em-web-helper/mobs.json")
      .then((response) => response.json())
      .then((data) => {
        const regularMobs = data[0]?.regularMobs;
    
        if (regularMobs && regularMobs.length > 0) {
          setMobs(regularMobs); // Establece la lista de mobs
          setRandomMob(regularMobs[Math.floor(Math.random() * regularMobs.length)]); // Establece un mob aleatorio
        } else {
          console.error("No se encontraron mobs en el JSON");
        }
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  }, []);

  // Función para actualizar el mob aleatorio
  const getRandomMob = () => {
    if (mobs.length > 0) {
      const randomIndex = Math.floor(Math.random() * mobs.length);
      setRandomMob(mobs[randomIndex]); // Establece un nuevo mob aleatorio
    } else {
      console.error("La lista de mobs está vacía.");
    }
  };

  return { randomMob, getRandomMob };
}

export default useRandomMob;
