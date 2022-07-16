import { IMatchTeams } from '../interfaces/team.interface';

const countResultOfMatchs = (matchs: IMatchTeams[]):number[] => {
  let victories = 0;
  let draws = 0;
  let losses = 0;
  let totalPoints = 0;
  matchs.forEach(({ homeTeamGoals, awayTeamGoals }: IMatchTeams) => {
    if (homeTeamGoals > awayTeamGoals) { victories += 1; totalPoints += 3; }
    if (homeTeamGoals === awayTeamGoals) { draws += 1; totalPoints += 1; }
    if (homeTeamGoals < awayTeamGoals) { losses += 1; }
  });
  return [victories, draws, losses, totalPoints];
};

export default countResultOfMatchs;
