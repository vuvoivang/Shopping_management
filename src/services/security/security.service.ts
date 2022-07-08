import { User } from 'models/user.model';
import { users } from '../../assets/dummy-data/user.data';

export interface LoginResponse {
  status: string;
  data?: {
    user: User;
  };
  message?: string;
}
export const login = (email: string, password: string): Promise<LoginResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = users.find(user => user.email === email && user.password === password);
      if (response) {
        return resolve({
          status: 'success',
          data: {
            user: response
          }
        });
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject("Can't find user");
    }, 1000);
  });
