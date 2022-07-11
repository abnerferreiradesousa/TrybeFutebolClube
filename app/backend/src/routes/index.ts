import { Router } from 'express';
import routeUser from './routeUser';

const route = Router();

route.use('/login', routeUser);

export default route;
