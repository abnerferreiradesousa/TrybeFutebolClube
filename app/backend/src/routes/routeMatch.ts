import { Router } from 'express';
import MatchController from '../controllers/match.controller';
// import authToken from '../middlewares/auth.token.middleware';

const matchController = new MatchController();

const routeMatch = Router();

routeMatch.get('/', matchController.getAll);

export default routeMatch;
