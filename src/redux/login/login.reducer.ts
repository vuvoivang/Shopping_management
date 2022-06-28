import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginInfo } from '../../pages/login/Login.page';
import { loginService } from '../../services/login.service';
import { AppConstant } from '../../constants/app.constant';

export const REDUCER_ID = AppConstant.redux.LOGIN_STATE; // string

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

export const login = createAsyncThunk(
  // async logic
  // Tên action
  'user/login',
  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data: LoginInfo, { rejectWithValue }) => {
    // Call API backend
    let response = null;
    try {
      response = await loginService(data.email, data.password);
      // Còn không thì trả về dữ liệu
      return response;
    } catch (err) {
      // need to throw
      if (typeof err === 'string') {
        throw rejectWithValue(err.toUpperCase());
      } else if (err instanceof Error) {
        throw rejectWithValue(err.message);
      }
    }
    return response;
  }
);

const loginSlice = createSlice({
  name: 'login',
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
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(login.pending, state => {
      // Bật trạng thái loading
      state.loading = true;
      state.user = null;
      state.error = '';
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(login.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.loading = false;
      state.user = action.payload.data.user;
      state.error = '';
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(login.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.loading = false;
      state.user = null;
      state.error = action.payload as string;
      // return {
      //   ...state,
      //   loading: false,
      //   user: null,
      //   error: action.payload as string
      // };
    });
  },
  initialState
});

export const loginReducer = loginSlice.reducer;
export const loginActions = loginSlice.actions;
