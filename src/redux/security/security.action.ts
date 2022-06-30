import { createAsyncThunk } from '@reduxjs/toolkit';
import { useLoading } from 'hooks/useLoading';
import { LoginInfo } from '../../pages/login/Login.page';
import { loginService } from '../../services/security.service';

// Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
// payloadCreator: callback
const actionLogin = async (data: LoginInfo, payloadCreator) => {
  const { rejectWithValue } = payloadCreator;
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
};
// authorized, validate user
export const security = createAsyncThunk(
  // async logic
  // Tên action
  'security',
  useLoading(actionLogin)
);
