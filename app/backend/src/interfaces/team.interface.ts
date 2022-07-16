interface IBoardGoals {
  id?: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IMatch extends IBoardGoals {
  homeTeam: number;
  awayTeam: number;
}

interface IMatchTeams extends IMatch {
  inProgress: boolean;
}

export {
  IMatch,
  IBoardGoals,
  IMatchTeams,
};
