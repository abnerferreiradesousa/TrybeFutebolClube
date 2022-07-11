import { StatusCodes } from 'http-status-codes';
import errorMessage from '../utils/error.message';
import generateJWT from '../utils/generate.jwt';
import User from '../database/models/users';

export default class UserService {
  public model = User;
  constructor(model = User) {
    this.model = model;
  }

  public async login(email: string): Promise<string> {
    const userData = await this.model.findOne({ where: { email } });
    console.log(userData, 'auqidjskfkkls');
    if (!userData) {
      throw errorMessage(StatusCodes.UNAUTHORIZED, 'Incorrect email or password');
    }
    const { id, username } = userData;
    const token = generateJWT({ id, username });
    return token;
  }

  // Como pegar os dados que estão dentro do userData?

  public async getRole(id: number): Promise<string> {
    const userData = await this.model.findOne({ where: { id } });
    if (!userData) {
      throw errorMessage(StatusCodes.UNAUTHORIZED, 'Incorrect email or password');
    }
    const { role } = userData;
    return role;
  }
}
