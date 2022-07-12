import { Router } from 'express';
import routeUser from './routeUser';
import routeTeam from './routeTeam';
import routeMatch from './routeMatch';

const route = Router();

route.use('/login', routeUser);
route.use('/teams', routeTeam);
route.use('/matches', routeMatch);

export default route;
