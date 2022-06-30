import { User } from 'models/user.model';
import { users } from '../assets/dummy-data/user.data';

interface LoginResponse {
  status: string;
  data?: {
    user: User;
  };
  message?: string;
}
export const loginService = (email: string, password: string): Promise<LoginResponse> =>
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
      return reject(new Error("Can't find user"));
    }, 1000);
  });
