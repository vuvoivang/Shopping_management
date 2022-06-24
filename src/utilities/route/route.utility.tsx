import { Route } from 'react-router';
import { RouteModel } from 'models/route.models';
import { withHeader } from '../../hocs/with-html-head-seo/withHeader.hoc';

export const createRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact }) => <Route key={path} path={path} component={haveHeader ? withHeader(component) : component} exact={exact} />);
