import Map from 'components/demo/Map.component';
import Timer from 'components/demo/Timer.component';

export const AppConstant = {
  redux: {
    LANGUAGE_STATE: 'languageState',
    ROUTER_STATE: 'router',
    SECURITY_STATE: 'securityState',
    GLOBAL_STATE: 'globalState',
    CART_STATE: 'cartState'
  },
  storageKey: {
    state: 'appState'
  }
};

export const RoutePath = {
  home: '/home',
  productList: '/products',
  productDetail: '/products/:productId',
  about: '/about',
  login: '/login',
  cart: '/cart',
  demo: '/demo'
};

export const RoutePathNavbar = [
  {
    label: 'Home',
    href: '/home'
  },
  {
    label: 'Our products',
    href: '/products'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Demo',
    href: '/demo'
  }
];

export enum LANGUAGES {
  EN = 'en',
  VI = 'vi'
}

export const DefaultOptions = {
  position: 'top-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const DemoComponents = [
  {
    name: 'Map',
    component: Map
  },
  {
    name: 'Timer',
    component: Timer
  }
];
