import { configureStore } from "@reduxjs/toolkit";
import * as loginServices from "services/security/security.service";
import * as securityActions from "./security.action";
import { securityReducer } from "./security.reducer";

describe('Login action', () => {
  const userData = {
    firstName: 'Hoàng Vũ',
    lastName: 'Võ',
    email: 'vuhvo@kms-technology.com',
    password: 'vudeptrai',
    age: 20,
    // eslint-disable-next-line max-len
    avatar: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/273377333_3198551323710665_8284106654593682154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=9tmuLQ7fmOMAX_wW9bj&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_TnmDBAN_RNCSOIlVm4zmoqiEoHWOrzXtKEweggs6Rpg&oe=62BF20F3'
  };
  // test security reducer for action login: async thunk
  const store = configureStore({
    reducer: securityReducer
  });

  it('login success', async () => {
    const response = {
      status: 'success',
      data: {
        user: userData
      }
    };
    
    // track call to loginService
    const loginSpy = jest.spyOn(loginServices, "login").mockResolvedValue(response);
    // dispatch action
    await store.dispatch(securityActions.security({email: userData.email, password: userData.password}));
    expect(loginSpy).toBeCalledWith( userData.email, userData.password);
    const state = store.getState();
    expect(state.loading).toBeFalsy();
    expect(state.user).toEqual(userData);
  });

  it('login failed', async () => {
    const responseErr = "Can't find user";
    // track call to loginService
    const loginSpy = jest.spyOn(loginServices, "login").mockRejectedValue(responseErr);
    // dispatch action
    await store.dispatch(securityActions.security({email: userData.email, password: userData.password + 'wrong'}));
    expect(loginSpy).toBeCalledWith( userData.email, userData.password + 'wrong');
    const state = store.getState();
    expect(state.loading).toBeFalsy();
    expect(state.user).toEqual(null); // deep equality
    expect(state.error).toMatch(responseErr.toUpperCase());
  });
});
