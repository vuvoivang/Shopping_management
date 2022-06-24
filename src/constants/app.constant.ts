export const AppConstant = {
  redux: {
    LANGUAGE_STATE: 'languageState',
    ROUTER_STATE: 'router'
  },
  storageKey: {
    state: 'state'
  }
};

export const RoutePath = {
  home: '/home',
  productList: '/products',
  productDetail: '/products/:productId',
  about: '/about'

};

export enum LANGUAGES {
  EN = 'en',
  VI = 'vi'
}
