import { IMatchTeams } from '../interfaces/team.interface';

const countGoals = (matchs: IMatchTeams[]): number[] => {
  const goalsFavor = matchs
    .reduce((currMatch, nextMatch: IMatchTeams) => currMatch + nextMatch.homeTeamGoals, 0);
  const goalsOwn = matchs
    .reduce((currMatch, nextMatch: IMatchTeams) => currMatch + nextMatch.awayTeamGoals, 0);
  const goalsBalance = goalsFavor - goalsOwn;
  return [goalsFavor, goalsOwn, goalsBalance];
};

export default countGoals;
