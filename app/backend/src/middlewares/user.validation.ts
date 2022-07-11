import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

import errorMessage from '../utils/error.message';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const verifyError = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    throw errorMessage(StatusCodes.BAD_REQUEST, 'All fields must be filled');
  }
  const { error } = schema.validate(req.body);
  if (error) {
    throw errorMessage(StatusCodes.BAD_REQUEST, error.message);
  }
  next();
};

export default verifyError;
