import { Router } from 'express';
import MatchController from '../controllers/match.controller';
import authToken from '../middlewares/auth.token.middleware';

const matchController = new MatchController();

const routeMatch = Router();

routeMatch.post('/', authToken, matchController.create);

routeMatch.get('/inProgress', matchController.getByProgress);

routeMatch.get('/', matchController.getAll);

routeMatch.patch('/:id/finish', matchController.updateProgress);

export default routeMatch;
