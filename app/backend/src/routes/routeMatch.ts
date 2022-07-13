import { Router } from 'express';
import MatchController from '../controllers/match.controller';
import authToken from '../middlewares/auth.token.middleware';

const matchController = new MatchController();

const routeMatch = Router();

routeMatch.patch('/:id', matchController.update);

routeMatch.post('/', authToken, matchController.create);

routeMatch.patch('/:id/finish', authToken, matchController.updateProgress);

routeMatch.get('/inProgress', matchController.getByProgress);

routeMatch.get('/', matchController.getAll);

export default routeMatch;
