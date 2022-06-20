import { lazy } from 'react';
import { RouteModel } from '../../models/route.models';
import { RoutePath } from '../../constants/app.constant';

const getRoutes = (): RouteModel[] => [
  {
    path: RoutePath.home,
    component: lazy(() => import('../../pages/home/Home.page'))
  }
];

export const AppRoutes = {
  getRoutes
};
