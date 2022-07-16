import Match from '../database/models/matches';
import Team from '../database/models/teams';
import { ILeaderboard } from '../interfaces/leaderboard.interface';
import moldLeaderboard from '../utils/moldLeaderboard';
import orderLeaderboard from '../utils/orderLeaderboard';

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

    const allTeams = leaderboard.map(moldLeaderboard);
    // Referência para o código: https://www.reddit.com/r/CodingHelp/comments/ttmead/javascript_sort_an_array_with_multiple_keys/

    return allTeams.sort(orderLeaderboard);
  }
}
