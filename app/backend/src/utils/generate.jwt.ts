import * as jwt from 'jsonwebtoken';
import IUserPayload from '../interfaces/user.interface';

const generateJWT = (payload: IUserPayload) => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET = 'hulkEsmaga', {});
  return token;
};

export default generateJWT;
