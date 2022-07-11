import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';
import MyRequest from '../interfaces/request.interface';
import User from '../database/models/users';

export default class UserController {
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new UserService();
      const { email } = req.body;
      const token = await service.login(email);
      return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      next(error);
    }
  };

  public getRole = async (req: MyRequest, res: Response, next: NextFunction) => {
    try {
      const service = new UserService();
      const user = req.user as User;
      const role = await service.getRole(user.id);
      return res.status(StatusCodes.OK).json({ role });
    } catch (error) {
      next(error);
    }
  };
}
