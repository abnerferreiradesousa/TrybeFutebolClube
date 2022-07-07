import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

import errorMessage from './error.message';

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const verifyError = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    if (error.message.includes('required')) {
      throw errorMessage(StatusCodes.BAD_REQUEST, error.message);
    }
    throw errorMessage(StatusCodes.BAD_REQUEST, error.message);
  }
  next();
};

export default verifyError;
