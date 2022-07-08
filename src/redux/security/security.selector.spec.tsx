import { getLoginInfo } from "./security.selector";

describe('Security selector', () => {
  const mockAppState = {
    securityState: {
      error: '',
      loading: false,
      user: {
        age: 20,
        avatar:
          'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/273377333_3198551323710665_8284106654593682154_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=9tmuLQ7fmOMAX_wW9bj&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_TnmDBAN_RNCSOIlVm4zmoqiEoHWOrzXtKEweggs6Rpg&oe=62BF20F3',
        email: 'vuhvo@kms-technology.com',
        firstName: 'Hoàng Vũ',
        lastName: 'Võ',
        password: 'vudeptrai'
      }
    }
  };

  it('get login infor', () => {
    // giả sử state đúng, check selector lấy đúng hay không
    const result = getLoginInfo(mockAppState);
    expect(result).toEqual(mockAppState.securityState);
  });
});
