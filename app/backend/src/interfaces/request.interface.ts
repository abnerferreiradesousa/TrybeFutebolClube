import { Request } from 'express';
import User from '../database/models/users';

interface MyRequest extends Request {
  user?: User
}

export default MyRequest;
