export const AppConstant = {
  redux: {
    LANGUAGE_STATE: 'languageState',
    ROUTER_STATE: 'router',
    SECURITY_STATE: 'securityState',
    LOADING_STATE: 'loadingState',
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
  cart: '/cart'
};

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
