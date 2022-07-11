import * as jwt from 'jsonwebtoken';
import { User } from '../types/index';

const generateJWT = (payload: User): string => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET = 'hulkEsmaga', {});
  return token;
};

export default generateJWT;
