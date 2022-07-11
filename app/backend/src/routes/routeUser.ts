import { Router } from 'express';
import UserController from '../controllers/user.controller';
import verifyError from '../middlewares/user.validation';
import authToken from '../middlewares/auth.token.middleware';

const userController = new UserController();

const routeUser = Router();

routeUser.post('/', verifyError, userController.login);

routeUser.get('/validate', authToken, userController.getRole);

export default routeUser;
