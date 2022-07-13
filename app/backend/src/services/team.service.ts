import { StatusCodes } from 'http-status-codes';
import errorMessage from '../utils/error.message';
import Team from '../database/models/teams';

export default class TeamService {
  public model = Team;
  constructor(model = Team) {
    this.model = model;
  }

  public async getAll(): Promise<Team[]> {
    const teamsData = await this.model.findAll();
    return teamsData;
  }

  public async getById(id: number): Promise<Team> {
    const teamData = await this.model.findOne({ where: { id } });
    if (!teamData) {
      throw errorMessage(StatusCodes.NOT_FOUND, 'There is no team with such id!');
    }
    return teamData;
  }
}
