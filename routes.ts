import { routeConfig } from './src/constants/routeConfig';

const routes = require("next-routes")();

Object.keys(routeConfig).forEach(routeName => routes.add(routeConfig[routeName]));

export default routes;
export const Link = routes.Link;
export const Router = routes.Router;
