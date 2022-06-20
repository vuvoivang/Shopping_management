import { AppConstant } from '../constants/app.constant';

const getState = (): { [x: string]: any } => {
  const stateStr = localStorage.getItem(AppConstant.storageKey.state);
  return stateStr && JSON.parse(stateStr);
};

const storeState = newState => localStorage.setItem(AppConstant.storageKey.state, JSON.stringify(newState));

export {
  getState,
  storeState
};
