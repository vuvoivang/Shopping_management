import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit';
import { pick } from 'lodash';
import { AppConstant } from '../constants/app.constant';
import * as StorageHelper from '../helpers/storage.helper';
import { languageActions, languageReducer } from './language';
import { securityActions, securityReducer } from './security';
import { globalReducer } from './global/global.reducer';
import { cartActions, cartReducer } from './cart';

// list actions will trigger store state
const actionTypesWhitelist = [
  '@@router/LOCATION_CHANGE',
  'language/setLocale',
  'security/setUser',
  'security/logout',
  'cart/addToCart',
  'cart/deleteFromCart',
  'cart/increaseNumber',
  'cart/decreaseNumber',
  'cart/checkout',
  'cart/changeNumber',
  'cart/resetCart'
];

const statesToBeStoredInLocalStorage: { stateKey?: (state: any) => void } = {
  // object state is stored, the corresponding key and satet from restore
  [AppConstant.redux.LANGUAGE_STATE]: languageActions.restoreLocale,
  [AppConstant.redux.SECURITY_STATE]: securityActions.restoreSecurity,
  [AppConstant.redux.CART_STATE]: cartActions.restoreCart
};

const createAppReducer = history => ({
  [AppConstant.redux.ROUTER_STATE]: connectRouter(history),
  [AppConstant.redux.LANGUAGE_STATE]: languageReducer,
  [AppConstant.redux.SECURITY_STATE]: securityReducer,
  [AppConstant.redux.GLOBAL_STATE]: globalReducer,
  [AppConstant.redux.CART_STATE]: cartReducer
});

const restoreState = store => {
  const rootStateFromStorage = StorageHelper.getState(); // current state from localStorage
  if (!rootStateFromStorage) return;
  // load every state from localStorage by corresponding restoreAction
  Object.entries(statesToBeStoredInLocalStorage).forEach(([stateKey, restoreFunc]) => {
    const state = rootStateFromStorage[stateKey];
    if (state) {
      store.dispatch(restoreFunc(state)); // dispatch to update store's app
    }
  });
};

export const getInitialState = () => ({});

const storageMiddleware = ({ getState }) => next => action => {
  // middleware storage khi có action đến
  const result = next(action);
  if (actionTypesWhitelist.includes(action.type)) {
    // Nếu là 1 trong các action được liệt kê, thì lưu state vào localStorage
    const state = pick(getState(), Object.keys(statesToBeStoredInLocalStorage));
    StorageHelper.storeState(state);
  }
  return result; // hết middleware, chuyển qua next function
};

export const configureStore = history => {
  const middlewares = [thunkMiddleware, routerMiddleware(history), storageMiddleware];
  if (process.env.NODE_ENV === 'development') {
    // development: create redux logger
    middlewares.push(createLogger({ collapsed: true }));
  }
  const store = reduxConfigureStore({
    reducer: createAppReducer(history),
    middleware: middlewares,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: getInitialState()
  });
  restoreState(store); // loop qua từng state trong statesToBeStoredInLocalStorage, load data từ localStorage lên lúc đầu

  return store;
};
