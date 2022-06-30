import { AppRoutes } from './app/app.route';

const getNormalRoutes = () => [...AppRoutes.getNormalRoutes()];
const getAuthRoutes = () => [...AppRoutes.getAuthRoutes()];

export { getNormalRoutes, getAuthRoutes };
