import { login } from "./security.service";

describe('Security service', () => {
  const rightData = {
    email: 'vuhvo@kms-technology.com',
    password: 'vudeptrai'
  };
  const wrongData = {
    email: 'vuhvo@kms-technology.com',
    password: 'vudeptrai12'
  };
  it('login successfully', async () => {
    const loginData = await login(rightData.email, rightData.password);
    expect(loginData.status).toMatch("success");
  });
  it('login failed', async () => {
    try {
      await login(wrongData.email, wrongData.password);
    } catch (err) {
      expect(err).toMatch("Can't find user");
    }
  });
});
