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
    // if (!userData) {
    //   throw errorMessage(StatusCodes.UNAUTHORIZED, ');
    // }
    return teamsData;
  }

  // Como pegar os dados que estão dentro do userData?

  public async getById(id: number): Promise<Team> {
    const teamData = await this.model.findOne({ where: { id } });
    if (!teamData) {
      throw errorMessage(StatusCodes.UNAUTHORIZED, 'Not found');
    }
    return teamData;
  }
}
