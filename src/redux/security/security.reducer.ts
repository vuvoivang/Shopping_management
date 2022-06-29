import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConstant } from 'constants/app.constant';
import { security } from './security.action';

export const REDUCER_ID = AppConstant.redux.SECURITY_STATE; // string

interface LoginStateModel {
  loading: boolean;
  user: User;
  error: string;
}

export const initialState: LoginStateModel = {
  loading: false,
  user: null,
  error: ''
};

const securitySlice = createSlice({
  name: 'security',
  reducers: {
    logout(state) {
      state.user = null;
      state.error = '';
    },
    restoreUser(state, action: PayloadAction<LoginStateModel>) {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  extraReducers(builder) {
    // Bắt đầu thực hiện action security (Promise pending)
    builder.addCase(security.pending, state => {
      // Bật trạng thái loading
      state.loading = true;
      state.user = null;
      state.error = '';
    });

    // Khi thực hiện action security thành công (Promise fulfilled)
    builder.addCase(security.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.loading = false;
      state.user = action.payload.data.user;
      state.error = '';
    });

    // Khi thực hiện action security thất bại (Promise rejected)
    builder.addCase(security.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.loading = false;
      state.user = null;
      state.error = action.payload as string;
    });
  },
  initialState
});

export const securityReducer = securitySlice.reducer;
export const securityActions = securitySlice.actions;