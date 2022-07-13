import { StatusCodes } from 'http-status-codes';
import Match from '../database/models/matches';
import Team from '../database/models/teams';
import IMatch from '../interfaces/team.interface';
import TeamService from './team.service';
import errorMessage from '../utils/error.message';

export default class MatchService {
  public model = Match;
  // public helperService;
  constructor(model = Match) {
    this.model = model;
    // this.helperService = helperService;
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

  // Req 25, 26 nao passam...

  public validAmbiguousTeams = (awayTeam: number, homeTeam: number) => {
    if (awayTeam === homeTeam) {
      throw errorMessage(
        StatusCodes.UNAUTHORIZED,
        'It is not possible to create a match with two equal teams',
      );
    }
  };

  public async create(dataMatch: IMatch) {
    this.validAmbiguousTeams(dataMatch.awayTeam, dataMatch.homeTeam);
    const helperService = new TeamService();
    const [,, { id }] = await Promise.all([
      helperService.getById(dataMatch.awayTeam),
      helperService.getById(dataMatch.homeTeam),
      this.model.create({ ...dataMatch, inProgress: 1 }),
    ]);
    return {
      id,
      ...dataMatch,
      inProgress: true,
    };
  }

  public async updateProgress(id: number) {
    const progress = await this.model.update(
      { inProgress: 0 },
      { where: { id } },
    );
    return progress && 'Finished';
  }
}
