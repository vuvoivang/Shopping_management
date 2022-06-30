import { User } from 'models/user.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConstant } from 'constants/app.constant';
import { LoginResponse } from 'services/security.service';
import { security } from './security.action';

export const REDUCER_ID = AppConstant.redux.SECURITY_STATE; // string

interface SecurityStateModel {
  loading: boolean;
  user: User;
  error: string;
}

export const initialState: SecurityStateModel = {
  loading: false,
  user: null,
  error: ''
};

const securitySlice = createSlice({
  name: 'security',
  reducers: {
    logout(state) {
      // action: security/logout
      state.user = null;
      state.error = '';
    },
    setUser(state, action: PayloadAction<User>) {
      return {
        ...state,
        user: action.payload
      };
    },
    restoreSecurity(state, action: PayloadAction<SecurityStateModel>) {
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
      state.user = (action.payload as LoginResponse).data.user;
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
