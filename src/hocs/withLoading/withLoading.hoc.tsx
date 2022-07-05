import Loading from 'components/loading/Loading.component';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalSelector } from 'redux/global';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withLoading = Component => (props: any) => {
  const countLoading = useSelector(globalSelector.getCountLoading);
  return (
    <>
      {countLoading > 0 && <Loading />}
      <Component {...props} />
    </>
  );
};
