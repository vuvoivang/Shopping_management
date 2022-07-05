import { REDUCER_ID } from './global.reducer';

export const getCountLoading = globalState => globalState[REDUCER_ID].loadingActions;
