import { REDUCER_ID } from './loading.reducer';

export const getCountLoading = globalState => globalState[REDUCER_ID].loadingActions;
