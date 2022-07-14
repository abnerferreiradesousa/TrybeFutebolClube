import { Router } from 'express';
import LeaderController from '../controllers/leader.controller';

const leaderController = new LeaderController();

const routeLeader = Router();

// p1
routeLeader.get('/home', leaderController.getAll);

export default routeLeader;
