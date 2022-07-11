import { Router } from 'express';
import routeUser from './routeUser';
import routeTeam from './routeTeam';

const route = Router();

route.use('/login', routeUser);
route.use('/teams', routeTeam);

export default route;
