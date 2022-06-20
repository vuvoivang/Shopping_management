import { AppConstant } from 'constants/app.constant';

export const NUMBER_VALUE = 9999;
export const OBJECT_VALUE = {};
export const ARRAY_OBJECT_ONE_ITEM = [{}];

export const getAppState = () => {
  return {
    [AppConstant.redux.ROUTER_STATE]: { location: {} }
  };
};


