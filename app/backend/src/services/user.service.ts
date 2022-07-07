import errorMessage from '../utils/error.message';
import generateJWT from '../utils/generate.jwt';
import User from '../database/models/users';

export default class UserService {
  constructor(public model = User) {}

  public async login(email: string) {
    const userData = await this.model.findOne({ where: { email } });
    if (!userData) throw errorMessage(404, 'User Not Found');
    const { id, username } = userData;
    const token = generateJWT({ id, username });
    return token;
  }
}
