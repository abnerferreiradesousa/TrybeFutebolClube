interface IBoardGoals {
  id?: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IMatch extends IBoardGoals {
  homeTeam: number;
  // homeTeamGoals: number;
  awayTeam: number;
  // awayTeamGoals: number;
}

export {
  IMatch,
  IBoardGoals,
};
