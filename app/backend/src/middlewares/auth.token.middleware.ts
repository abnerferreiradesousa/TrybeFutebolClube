import { Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import errorMessage from '../utils/error.message';
import MyRequest from '../interfaces/request.interface';

const authToken = (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'TOKEN_NOT_FOUND' });
    }

    const tokenIsValid = jwt.verify(authorization, 'hulkEsmaga') as jwt.JwtPayload;
    const { data } = tokenIsValid;
    req.user = data;
    next();
  } catch (error) {
    next(errorMessage(StatusCodes.UNAUTHORIZED, 'INVALID_TOKEN'));
  }
};

export default authToken;
