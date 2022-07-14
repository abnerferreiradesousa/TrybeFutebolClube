import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LeaderService from '../services/leader.service';

export default class LeaderController {
  private helperService: LeaderService;

  constructor(service = new LeaderService()) {
    this.helperService = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const data = await this.helperService.getAll();
    return res.status(StatusCodes.OK).json(data);
  };
}
