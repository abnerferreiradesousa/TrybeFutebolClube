/* eslint-disable max-lines-per-function */
import Match from '../database/models/matches';
import Team from '../database/models/teams';
import { ILeaderboard, ILeaderboardBoard } from '../interfaces/leaderboard.interface';
import countResultOfMatchs from '../utils/countResultOfMatchs';
import countGoals from '../utils/countGoals';
import calcEfficiency from '../utils/calcEfficiency';

export default class LeaderService {
  constructor(private model = Team) { this.model = model; }

  // Seria melhor fazer metodo pra tudo isso?
  // O que dá pra melhorar?

  public async getAll() {
    const dataMatch = await this.model.findAll({
      include: [
        { model: Match, as: 'matchesHome', where: { inProgress: 0 } },
        // { model: Match, as: 'matchesAway', where: { inProgress: 0 } },
      ] });
    const leaderboard = dataMatch as unknown as ILeaderboard[];

    const allTeams = leaderboard.map(({ teamName, matchesHome }) => {
      const [victoriesHome, drawsHome, lossesHome, pointsHome] = countResultOfMatchs(matchesHome);
      // const [victoriesAway, drawsAway, lossesAway, pointsAway] = countResultOfMatchs(matchesAway);
      const [goalsFavorHome, goalsOwnHome, goalsBalanceHome] = countGoals(matchesHome);
      // const [goalsFavorAway, goalsOwnAway, goalsBalanceAway] = countGoals(matchesAway);
      const efficiency = calcEfficiency(
        pointsHome,
        matchesHome.length,
      );

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
    });

    // Referência para o código: https://www.reddit.com/r/CodingHelp/comments/ttmead/javascript_sort_an_array_with_multiple_keys/

    return allTeams.sort((a: ILeaderboardBoard, b:ILeaderboardBoard) => {
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
    });
  }
}
