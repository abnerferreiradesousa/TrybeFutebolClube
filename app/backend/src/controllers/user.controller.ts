import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const service = new UserService();
      const { email, password } = req.body;
      const token = await service.login(email, password);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
