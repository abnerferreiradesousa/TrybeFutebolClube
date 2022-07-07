import { Router } from 'express';
import UserController from '../controllers/user.controller';
import verifyError from '../utils/user.validation';

const route = Router();

const userController = new UserController();

route.post('/login', verifyError, userController.login);

export default route;
