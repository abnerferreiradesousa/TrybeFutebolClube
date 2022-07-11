import { Router } from 'express';
import TeamController from '../controllers/team.controller';
import authToken from '../middlewares/auth.token.middleware';

const teamController = new TeamController();

const routeTeam = Router();

routeTeam.post('/', authToken, teamController.getAll);

export default routeTeam;
