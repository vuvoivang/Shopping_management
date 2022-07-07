import { Route } from 'react-router';
import { RouteModel } from 'models/route.models';
import { withLoading } from 'hocs/withLoading/withLoading.hoc';
import withHTMLHeadSEO from 'hocs/with-html-head-seo/withHTMLHeadSEO.hoc';
import { withHeader } from '../../hocs/withHeader/withHeader.hoc';
import { withLogin } from '../../hocs/withLogin/withLogin.hoc';

const LayoutHeader = (Component, haveHeader) => (haveHeader ? withHeader(Component) : Component);

export const createNormalRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact, title }) => {
    const WrappedComponent = LayoutHeader(withHTMLHeadSEO({ title })(withLoading(component)), haveHeader);
    return <Route key={path} path={path} component={WrappedComponent} exact={exact} />;
  });

export const createAuthRoutes = (routes: RouteModel[]) =>
  routes.map(({ path, component, haveHeader, exact, title }) => {
    const WrappedComponent = LayoutHeader(withLogin(withHTMLHeadSEO({ title })(withLoading(component))), haveHeader);
    return <Route key={path} path={path} component={WrappedComponent} exact={exact} />;
  });
