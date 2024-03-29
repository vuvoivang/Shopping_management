import { AppConstant } from '../constants/app.constant';

// working with localStorage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getState = (): { [x: string]: any } => {
  // get App state is stored in localStorage
  const stateStr = localStorage.getItem(AppConstant.storageKey.state);
  return stateStr && JSON.parse(stateStr);
};

// save App state
const storeState = newState => localStorage.setItem(AppConstant.storageKey.state, JSON.stringify(newState));

export { getState, storeState };
