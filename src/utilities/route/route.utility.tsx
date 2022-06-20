import { Route } from 'react-router';
import { RouteModel } from 'models/route.models';

export const createRoutes = (routes: RouteModel[]) => routes.map(({ path, component }) => (
  <Route key={path} path={path} component={component} />
));
