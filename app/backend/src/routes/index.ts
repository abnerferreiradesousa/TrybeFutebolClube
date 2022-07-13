import { Router } from 'express';
import routeUser from './routeUser';
import routeTeam from './routeTeam';
import routeMatch from './routeMatch';

const route = Router();

route.use('/matches', routeMatch);
route.use('/login', routeUser);
route.use('/teams', routeTeam);

export default route;
