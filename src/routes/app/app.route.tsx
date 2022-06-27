import { lazy } from 'react';
import { RouteObject } from 'react-router';
import { withHeader } from '../../hocs/with-html-head-seo/withHeader.hoc';
import App from '../../components/App';
import { RoutePath } from '../../constants/app.constant';

const getRoutes = (): RouteObject[] => [
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: withHeader
      },
      {
        path: '/home',
        element: lazy(() => import('../../pages/home/Home.page'))
      },
      {
        path: RoutePath.about,
        element: lazy(() => import('../../pages/about/About.page'))
      },
      {
        path: RoutePath.productList,
        element: lazy(() => import('../../pages/product/List.page')),
        children: [
          {
            path: RoutePath.productDetail,
            element: lazy(() => import('../../pages/product/Detail.page'))
          }
        ]
      }
    ]
  }
];

export const AppRoutes = {
  getRoutes
};
