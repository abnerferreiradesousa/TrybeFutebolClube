import { Router } from 'express';
import routeUser from './routeUser';
import routeTeam from './routeTeam';
import routeMatch from './routeMatch';
import routeLeader from './routeLeader';

const route = Router();

route.use('/login', routeUser);
route.use('/matches', routeMatch);
route.use('/teams', routeTeam);
route.use('/leaderboard', routeLeader);

export default route;
