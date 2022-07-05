import { createSlice } from '@reduxjs/toolkit';
import { AppConstant } from 'constants/app.constant';

interface GlobalStateModel {
  loadingActions: number;
}

export const initialState: GlobalStateModel = {
  loadingActions: 0
};

export const REDUCER_ID = AppConstant.redux.GLOBAL_STATE; // string

const globalSlice = createSlice({
  name: 'global',
  reducers: {
    startLoading(state) {
      state.loadingActions += 1;
    },
    endLoading(state) {
      state.loadingActions -= 1;
    }
  },
  initialState
});

export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;
