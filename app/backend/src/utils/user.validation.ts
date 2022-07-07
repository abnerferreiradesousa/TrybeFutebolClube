import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

// problema joi
// middleware de erro
import Joi from 'joi';

import errorMessage from './error.message';

const schema = Joi.object({
  email: Joi.email().required(),
  password: Joi.string().min(7).required(),
});

const verifyError = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    if (error.message.includes('required')) {
      throw errorMessage(StatusCodes.BAD_REQUEST, error.message);
    }
    throw errorMessage(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
  }
  next();
};

export default verifyError;
