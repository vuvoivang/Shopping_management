import { lazy } from 'react';
import { RouteModel } from '../../models/route.models';
import { RoutePath } from '../../constants/app.constant';

const getNormalRoutes = (): RouteModel[] => [
  {
    path: RoutePath.home,
    component: lazy(() => import('../../pages/home/Home.page')),
    haveHeader: true,
    title: 'Shopping creative'
  },
  {
    path: RoutePath.about,
    component: lazy(() => import('../../pages/about/About.page')),
    haveHeader: true,
    title: 'About authority'
  },
  {
    path: RoutePath.login,
    component: lazy(() => import('../../pages/login/Login.page')),
    title: 'Login'
  },
  {
    path: RoutePath.demo,
    component: lazy(() => import('../../pages/demo/Demo.page')),
    title: 'Chill with some demos'
  }
];

const getAuthRoutes = (): RouteModel[] => [
  {
    path: RoutePath.productList,
    component: lazy(() => import('../../pages/product/product-list/List.page')),
    exact: true,
    haveHeader: true,
    title: 'Product list'
  },
  {
    path: RoutePath.productDetail,
    component: lazy(() => import('../../pages/product/product-detail/Detail.page')),
    haveHeader: true,
    title: 'Product detail'
  },
  {
    path: RoutePath.cart,
    component: lazy(() => import('../../pages/cart/Cart.page')),
    haveHeader: true,
    title: 'Cart'
  }
];

export const AppRoutes = {
  getNormalRoutes,
  getAuthRoutes
};
