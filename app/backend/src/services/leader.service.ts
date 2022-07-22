import Match from '../database/models/matches';
import Team from '../database/models/teams';
import { ILeaderboard, ILeaderboardBoard } from '../interfaces/leaderboard.interface';
import { IMatchTeams } from '../interfaces/team.interface';

export default class LeaderService {
  constructor(private model = Team) { this.model = model; }

  public calcEfficiency = (totalPoints: number, totalGames: number): number => {
    const result = (totalPoints / (totalGames * 3)) * 100;
    return result;
  };

  public countGoals = (matchs: IMatchTeams[]): number[] => {
    const goalsFavor = matchs
      .reduce((currMatch, nextMatch: IMatchTeams) => currMatch + nextMatch.homeTeamGoals, 0);
    const goalsOwn = matchs
      .reduce((currMatch, nextMatch: IMatchTeams) => currMatch + nextMatch.awayTeamGoals, 0);
    const goalsBalance = goalsFavor - goalsOwn;
    return [goalsFavor, goalsOwn, goalsBalance];
  };

  public countResultOfMatchs = (matchs: IMatchTeams[]):number[] => {
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

  public moldLeaderboard = ({ teamName, matchesHome }: ILeaderboard) => {
    const [
      victoriesHome, drawsHome, lossesHome, pointsHome,
    ] = this.countResultOfMatchs(matchesHome);
    const [goalsFavorHome, goalsOwnHome, goalsBalanceHome] = this.countGoals(matchesHome);
    const efficiency = this.calcEfficiency(pointsHome, matchesHome.length);

    return {
      name: teamName,
      totalPoints: pointsHome,
      totalGames: matchesHome.length,
      totalVictories: victoriesHome,
      totalDraws: drawsHome,
      totalLosses: lossesHome,
      goalsFavor: goalsFavorHome,
      goalsOwn: goalsOwnHome,
      goalsBalance: goalsBalanceHome,
      efficiency: Number(efficiency.toFixed(2)),
    };
  };

  public orderLeaderboard = (a: ILeaderboardBoard, b:ILeaderboardBoard) => {
    if (a.totalPoints < b.totalPoints) { return 1; }
    if (a.totalPoints > b.totalPoints) { return -1; }
    if (a.totalVictories < b.totalVictories) { return 1; }
    if (a.totalVictories > b.totalVictories) { return -1; }
    if (a.goalsBalance < b.goalsBalance) { return 1; }
    if (a.goalsBalance > b.goalsBalance) { return -1; }
    if (a.goalsFavor < b.goalsFavor) { return 1; }
    if (a.goalsFavor > b.goalsFavor) { return -1; }
    if (a.goalsOwn < b.goalsOwn) { return 1; }
    if (a.goalsOwn > b.goalsOwn) { return -1; }
    return 0;
  };

  public async getAll() {
    const dataMatch = await this.model.findAll({
      include: [
        { model: Match, as: 'matchesHome', where: { inProgress: 0 } },
      ] });
    const leaderboard = dataMatch as unknown as ILeaderboard[];

    const allTeams = leaderboard.map(this.moldLeaderboard);
    // Referência para o código: https://www.reddit.com/r/CodingHelp/comments/ttmead/javascript_sort_an_array_with_multiple_keys/

    return allTeams.sort(this.orderLeaderboard);
  }
}
