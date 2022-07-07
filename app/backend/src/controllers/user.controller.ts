import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private service = new UserService()) {}

  public async login(req: Request, res: Response) {
    const { email } = req.body;
    const token = await this.service.login(email);
    res.status(200).json({ token });
  }
}
