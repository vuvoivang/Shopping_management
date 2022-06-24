import { lazy } from 'react';
import { RouteModel } from '../../models/route.models';
import { RoutePath } from '../../constants/app.constant';

const getRoutes = (): RouteModel[] => [
  {
    path: RoutePath.home,
    component: lazy(() => import('../../pages/home/Home.page')),
    haveHeader: true
  },
  {
    path: RoutePath.productList,
    component: lazy(() => import('../../pages/product/List.page')),
    exact: true,
    haveHeader: true
  },
  {
    path: RoutePath.productDetail,
    component: lazy(() => import('../../pages/product/Detail.page')),
    haveHeader: true
  },
  {
    path: RoutePath.about,
    component: lazy(() => import('../../pages/about/About.page')),
    haveHeader: true
  }
];

export const AppRoutes = {
  getRoutes
};
