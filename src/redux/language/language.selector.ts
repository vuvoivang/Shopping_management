import { REDUCER_ID } from './language.reducer';

export const getLocale = globalState => globalState[REDUCER_ID].locale;
