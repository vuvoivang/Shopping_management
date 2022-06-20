import React from 'react';
import configureMockStore from 'redux-mock-store';
import { merge } from 'lodash';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { routerMiddleware } from 'connected-react-router';
import { AppConstant } from '../../../src/constants/app.constant';
import { getAppState } from '../TestHelper';
import { defaultLanguage } from './IntlHelper';
import history from '../../../src/helpers/history.helper';
import { Router } from 'react-router';
import { getLanguageMessages } from '../../../src/utilities/i18n/i18n.utility';
import { IntlProvider } from 'react-intl';

const languageInitialState = {
  [AppConstant.redux.LANGUAGE_STATE]: {
    locale: 'en',
    formattedMessages: {
      en: defaultLanguage
    }
  }
};

export const defaultStore = {
  router: {
    location: {}
  }
};
const { locale, languageMessages } = getLanguageMessages(navigator.language.split(/[-_]/)[0]);

export const shallowWithProvider = children => (store = getMockStore({})) => shallow(<Provider
  store={store}>{children}</Provider>);
export const mountWithProvider = children => (store = getMockStore({})) => mount(<Provider
  store={store}>{children}</Provider>);

export const mountWithProviderAndRouter = children => (store = getMockStore({})) => {
  return mount(
    (
      <Provider store={store}>
        <IntlProvider locale={locale} messages={languageMessages}>
          <Router history={history}>
            {children}
          </Router>
        </IntlProvider>
      </Provider>
    )
  );
}

export const mountWithProviderAndStore = (
  children,
  userType?: string,
  store?: { [key: string]: any },
  middleware = []
) => {
  let mockStore;
  if (!store) {
    mockStore = getMockStore(defaultStore, middleware);
  } else {
    mockStore = getMockStore(store, middleware);
  }
  return mountWithProvider(children)(mockStore);
};

export const getMockStore = (state, middleware = []) => {
  const middlewares = [thunkMiddleware, routerMiddleware(history)].concat(middleware);
  const mockStore = configureMockStore(middlewares);
  const languageAddedState = merge({}, languageInitialState, getAppState(), state);
  return mockStore(languageAddedState);
};

export const getMockStoreWithConfig = ({ state = {}, middleware = [], epic, epics = [] }) => {
  let reduxMiddlewares = [];
  if (middleware && middleware.length) {
    reduxMiddlewares.push(...middleware);
  }

  return getMockStore(state, reduxMiddlewares);
};
