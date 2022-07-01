import { loadingActions } from 'redux/loading/loading.reducer';

type AsyncActionThunk = (data, payloadCreator) => Promise<unknown> | void;

export const useLoading = (asyncAction: AsyncActionThunk) => async (data, payloadCreator) => {
  const { dispatch } = payloadCreator;
  try {
    dispatch(loadingActions.startLoading());
    return await asyncAction(data, payloadCreator);
  } finally {
    dispatch(loadingActions.endLoading());
  }
};
