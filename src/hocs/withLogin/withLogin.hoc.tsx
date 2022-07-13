import { Redirect } from 'react-router-dom';
import { AppConstant } from 'constants/app.constant';
import { getState } from 'helpers/storage.helper';
import React from 'react';
import { useLocation } from 'react-router';
import { displayToastify } from 'utilities/toastify/toastify.utility';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// bọc những component cần authentication
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withLogin = WrappedComponent => (props: any) => {
  const location = useLocation();
  let isLogin = false;
  const user = getState()[AppConstant.redux.SECURITY_STATE]?.user;
  if (user) {
    isLogin = true;
  }
  if (!isLogin) displayToastify('Please login to access this site!!', 'failed');
  return (
    <>
      {isLogin ? (
        <WrappedComponent {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location.pathname }
          }}
        />
      )}
    </>
  );
};
