import { useState, useCallback } from 'react';

function useRandomMathProblem() {
  const generateMathProblem = useCallback(() => {
    const operators = ['+', '-'];
    let problem = '';
    let result = 0;

    // Generar el primer número aleatorio
    let number = Math.floor(Math.random() * 20) + 1; // Número entre 1 y 20
    problem += number;
    result = number;

    // Generar entre 2 y 5 operadores y números aleatorios
    const operatorCount = Math.floor(Math.random() * 4) + 2; // Entre 2 y 5 operadores

    for (let i = 0; i < operatorCount; i++) {
      let operator = operators[Math.floor(Math.random() * operators.length)];
      number = Math.floor(Math.random() * 20) + 1;

      // Si el operador es resta, verificar si el resultado será negativo
      if (operator === '-' && result - number < 0) {
        // Si el resultado sería negativo, usa una suma en lugar de la resta
        operator = '+';
      }

      problem += ` ${operator} ${number}`;
      result = operator === '+' ? result + number : result - number;
    }

    return { problem, result };
  }, []);

  const [mathProblem, setMathProblem] = useState(generateMathProblem());

  const generateNewProblem = () => {
    setMathProblem(generateMathProblem());
  };

  return { mathProblem, generateNewProblem };
}

export default useRandomMathProblem;

