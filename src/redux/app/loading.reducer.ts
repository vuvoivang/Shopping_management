import { createSlice } from '@reduxjs/toolkit';
import { AppConstant } from 'constants/app.constant';

interface LoadingStateModel {
  loadingActions: number;
}

export const initialState: LoadingStateModel = {
  loadingActions: 0
};

export const REDUCER_ID = AppConstant.redux.LOADING_STATE; // string

const loadingSlice = createSlice({
  name: 'loading',
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

export const loadingReducer = loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
