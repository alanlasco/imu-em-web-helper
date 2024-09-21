export type WinnerProps = {
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
