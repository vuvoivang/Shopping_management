import { Route } from 'react-router';
import { RouteModel } from 'models/route.models';
import { withLoading } from 'hocs/withLoading/withLoading.hoc';
import { withHeader } from '../../hocs/withHeader/withHeader.hoc';
import { withLogin } from '../../hocs/withLogin/withLogin.hoc';

const LayoutHeader = (Component, haveHeader) => (haveHeader ? withHeader(Component) : Component);

export const createNormalRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact }) => <Route key={path} path={path} component={LayoutHeader(withLoading(component), haveHeader)} exact={exact} />);

export const createAuthRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact }) => <Route key={path} path={path} component={withLogin(LayoutHeader(withLoading(component), haveHeader))} exact={exact} />);
