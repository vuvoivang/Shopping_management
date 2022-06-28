import React, { Component, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { History } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from '@reduxjs/toolkit';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer } from 'react-toastify';
import { getRoutes } from '../routes';
import history from '../helpers/history.helper';
import { configureStore } from '../redux/app.store';
import { RoutePath } from '../constants/app.constant';
import { createRoutes } from '../utilities/route/route.utility';
import withHTMLHeadSEO from '../hocs/with-html-head-seo/withHTMLHeadSEO.hoc';
import Loading from './loading/Loading.component';
import ErrorBoundary from './error-boundary/ErrorBoundary.component';
import '../assets/scss/main.scss';
import ConnectedIntlProvider from './connected-intl-provider/ConnectedIntlProvider.component';

if (typeof window !== 'undefined') { // call once for use toastify
  injectStyle();
}
class App extends Component {
  history: History;
  store: Store;

  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize = () => {
    this.history = history; // browser history
    this.store = configureStore(this.history);
  };

  render() {
    const HTMLHeadSEOComponent = withHTMLHeadSEO(null)(null);
    const appRoutes = createRoutes(getRoutes());
    // Provider: use Store to connect
    // ConnectedIntlProvider: use multiLang
    // HTMLHeadSEOComponent: add title for SEO
    // ErrorBoundary: component catch error & render
    // Suspense: use Lazy load & show loading if pending
    // Switch: use Router
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          <ConnectedIntlProvider>
            <>
              <HTMLHeadSEOComponent />
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Switch>
                    {appRoutes}
                    <Redirect from="/" exact to={RoutePath.home} />
                  </Switch>
                </Suspense>
                <ToastContainer />
              </ErrorBoundary>
            </>
          </ConnectedIntlProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
