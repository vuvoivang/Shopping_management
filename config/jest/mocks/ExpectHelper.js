import ReduxActionTypes from './ReduxActionTypes';

export const expectActionCalled = (store, actionType, { numberOfCalled = 1, payload, debug = false } = {}) => {
  const actions = store.getActions();
  if (debug) {
    console.log('store mock actions');
    console.log(actions);
  }
  const expectedActions = actions.filter(action => action.type === actionType);
  expect(expectedActions.length).toEqual(numberOfCalled);
  if (payload) {
    expect(payload).toEqual(expectedActions[0].payload);
  }
};

export const expectRouteActionCalledWithURL = (store, URL, { debug = false, actionIndex = -1 } = {}) => {
  const actions = store.getActions();
  if (debug) {
    console.log('store mock actions');
    console.log(actions);
  }

  const routeAction = actionIndex === -1 ? actions.filter(action => action.type === ReduxActionTypes.ROUTER_HISTORY)[0] : store.getActions()[actionIndex];

  expect(routeAction.payload.args[0]).toEqual(URL);
};

export const expectRouteActionCalledWithOptions = (store, options = {}, { debug = false, actionIndex = -1 } = {}) => {
  const actions = store.getActions();
  if (debug) {
    console.log('store mock actions');
    console.log(actions);
  }

  const routeAction = actionIndex === -1 ? actions.filter(action => action.type === ReduxActionTypes.ROUTER_HISTORY)[0] : store.getActions()[actionIndex];

  expect(routeAction.payload.args[0]).toEqual(options);
};

export const expectObjectHasProperties = (object = {}, properties = []) => {
  properties.forEach(property => expect(object.hasOwnProperty(property)).toEqual(true));
};
