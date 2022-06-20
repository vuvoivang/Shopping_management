import { createBrowserHistory, History } from 'history';
import valueEqual from 'value-equal';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const prevHistoryPush = history.push;
let lastLocation = history.location;

history.listen(location => {
  lastLocation = location;
});

history.push = (location: History, state = {}) => {
  if (
    lastLocation.pathname === location.pathname &&
    lastLocation.search === location.search &&
    lastLocation.hash === location.hash &&
    valueEqual(lastLocation.state, location.state)
  ) {
    return;
  }
  prevHistoryPush(location, state);
};

export default history;
