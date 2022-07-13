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

  public getByProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new MatchService();
      const { inProgress } = req.query;
      const Matchs = await service.getByProgress(inProgress as string);
      return res.status(StatusCodes.OK).json(Matchs);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new MatchService();
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
      const dataMatch = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals };
      const match = await service.create(dataMatch);
      res.status(StatusCodes.CREATED).json(match);
    } catch (error) {
      next(error);
    }
  };

  public updateProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new MatchService();
      const message = await service.updateProgress(Number(req.params.id));
      res.status(StatusCodes.OK).json({ message });
    } catch (error) {
      next(error);
    }
  };
}
