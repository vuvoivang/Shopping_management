import { REDUCER_ID } from './cart.reducer';

export const getCart = globalState => globalState[REDUCER_ID].cart;
