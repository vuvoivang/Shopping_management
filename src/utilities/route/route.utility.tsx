import { Route } from 'react-router';
import { RouteModel } from 'models/route.models';
import { withHeader } from '../../hocs/with-html-head-seo/withHeader.hoc';
import { withLogin } from '../../hocs/with-html-head-seo/withLogin.hoc';

const LayoutHeader = (Component, haveHeader) => (haveHeader ? withHeader(Component) : Component);

export const createNormalRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact }) => <Route key={path} path={path} component={LayoutHeader(component, haveHeader)} exact={exact} />);

export const createAuthRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact }) => <Route key={path} path={path} component={withLogin(LayoutHeader(component, haveHeader))} exact={exact} />);
