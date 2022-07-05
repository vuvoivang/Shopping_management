import { globalActions } from 'redux/global/global.reducer';

type AsyncActionThunk = (data, payloadCreator) => Promise<unknown> | void;

export const useLoading = (asyncAction: AsyncActionThunk) => async (data, payloadCreator) => {
  const { dispatch } = payloadCreator;
  try {
    dispatch(globalActions.startLoading());
    return await asyncAction(data, payloadCreator);
  } finally {
    dispatch(globalActions.endLoading());
  }
};
