const calcEfficiency = (totalPoints: number, totalGames: number): number => {
  const result = (totalPoints / (totalGames * 3)) * 100;

  return result;
};

export default calcEfficiency;
