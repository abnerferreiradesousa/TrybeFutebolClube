import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import MatchService from '../services/match.service';

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
}
