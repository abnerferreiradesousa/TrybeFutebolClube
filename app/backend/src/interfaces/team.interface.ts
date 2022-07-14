interface IBoardGoals {
  id?: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IMatch extends IBoardGoals {
  homeTeam: number;
  awayTeam: number;
}

export {
  IMatch,
  IBoardGoals,
};
