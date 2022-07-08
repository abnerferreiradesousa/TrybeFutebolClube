import errorMessage from '../utils/error.message';
import generateJWT from '../utils/generate.jwt';
import User from '../database/models/users';
import { StatusCodes } from 'http-status-codes';

export default class UserService {
  public model = User;
  constructor(model = User) {
    this.model = model;
  }

  public async login(email: string, password: string) {
    const userData = await this.model.findOne({ where: { email } });
    if (!userData) {
      throw errorMessage(StatusCodes.UNAUTHORIZED, 'Incorrect email or password');
    }
    const { id, username } = userData;
    const token = generateJWT({ id, username });
    return token;
  }
}
