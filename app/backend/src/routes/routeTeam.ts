import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const teamController = new TeamController();

const routeTeam = Router();

routeTeam.get('/', teamController.getAll);
routeTeam.get('/:id', teamController.getById);

export default routeTeam;
