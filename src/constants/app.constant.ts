import Map from 'components/demo/Map.component';
import Timer from 'components/demo/Timer.component';

export const AppConstant = { // name of app's states
  redux: {
    LANGUAGE_STATE: 'languageState',
    ROUTER_STATE: 'router',
    SECURITY_STATE: 'securityState',
    GLOBAL_STATE: 'globalState',
    CART_STATE: 'cartState'
  },
  storageKey: { // key in localStorage
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
    label: 'home',
    href: '/home'
  },
  {
    label: 'products',
    href: '/products'
  },
  {
    label: 'about',
    href: '/about'
  },
  {
    label: 'demo',
    href: '/demo'
  }
];

export const MenuItemsLanguage = [
  {
    label: 'Vietnamese',
    value: 'vi'
  },
  {
    label: 'English',
    value: 'en'
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
