import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchService from '../services/team.service';

export default class MatchController {
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new MatchService();
      const Matchs = await service.getAll();
      return res.status(StatusCodes.OK).json(Matchs);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new MatchService();
      const { id } = req.params;
      const Match = await service.getById(Number(id));
      return res.status(StatusCodes.OK).json(Match);
    } catch (error) {
      next(error);
    }
  };
}
