import Match from '../database/models/matches';
import Team from '../database/models/teams';
import IMatch from '../interfaces/team.interface';

export default class TeamService {
  public model = Match;
  constructor(model = Match) {
    this.model = model;
  }

  public async getAll() {
    const matchesData = await this.model.findAll({
      include: [
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
      ] });
    return matchesData;
  }

  public async getByProgress(inProgress: string) {
    const matchesData = await this.model.findAll({
      where: { inProgress: inProgress === 'true' ? 1 : 0 },
      include: [
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
      ] });
    return matchesData;
  }

  public async create(dataMatch: IMatch) {
    const matchData = await this.model.create({ ...dataMatch, inProgress: 1 });
    return {
      id: matchData.id,
      ...dataMatch,
      inProgress: true,
    };
  }
}
