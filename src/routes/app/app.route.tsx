import { lazy } from 'react';
import { RouteModel } from '../../models/route.models';
import { RoutePath } from '../../constants/app.constant';

const getNormalRoutes = (): RouteModel[] => [
  {
    path: RoutePath.home,
    component: lazy(() => import('../../pages/home/Home.page')),
    haveHeader: true
  },
  {
    path: RoutePath.about,
    component: lazy(() => import('../../pages/about/About.page')),
    haveHeader: true
  },
  {
    path: RoutePath.login,
    component: lazy(() => import('../../pages/login/Login.page'))
  },
  {
    path: RoutePath.demo,
    component: lazy(() => import('../../pages/demo/Demo.page'))
  }
];

const getAuthRoutes = (): RouteModel[] => [
  {
    path: RoutePath.productList,
    component: lazy(() => import('../../pages/product/product-list/List.page')),
    exact: true,
    haveHeader: true
  },
  {
    path: RoutePath.productDetail,
    component: lazy(() => import('../../pages/product/product-detail/Detail.page')),
    haveHeader: true
  },
  {
    path: RoutePath.cart,
    component: lazy(() => import('../../pages/cart/Cart.page')),
    haveHeader: true
  }
];

export const AppRoutes = {
  getNormalRoutes,
  getAuthRoutes
};
