import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import TeamService from '../services/team.service';

export default class TeamController {
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new TeamService();
      const teams = await service.getAll();
      return res.status(StatusCodes.OK).json(teams);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new TeamService();
      const { id } = req.params;
      const team = await service.getById(Number(id));
      return res.status(StatusCodes.OK).json(team);
    } catch (error) {
      next(error);
    }
  };
}
