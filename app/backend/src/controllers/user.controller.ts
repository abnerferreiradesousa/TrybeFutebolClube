import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new UserService();
      const { email } = req.body;
      const token = await service.login(email);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
